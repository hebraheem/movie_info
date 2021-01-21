import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useMovieConsumer } from "../context";
import { Star, Search } from "@material-ui/icons";
import Loading from "./Loading";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  media: {
    width: "320px",
    height: "250px",
  },
  card: {
    width: "320px",
    margin: "20px auto",
    transitionProperty: "transform",
    transitionDuration: "1s",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
      transition: "1s",
    },
  },
  search: {
    margin: "20px 0 20px 50px",
    width: "300px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Movies() {
  const {
    movies,
    loading,
    search,
    setSearch,
    detailMovie,
  } = useMovieConsumer();
  const classes = useStyles();

  return (
    <>
      {!loading && (
        <>
        <TextField
          label="Search"
          variant="standard"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.search}
        />
        </>
      )}

      <Grid container>
        {loading && <Loading />}
        {movies.map((movie) => {
          let searchfilter = movie.name.includes(search.charAt(0).toUpperCase());
          const checkCountry = movie.network
            ? movie.network.country.name
            : "Not availabe";
          return (
            searchfilter && (
              <Grid item sm={12} md={6} lg={4} key={movie.id}>
                <Link className={classes.link} to="/movie_info">
                  <Card className={classes.card}>
                    <CardHeader title={`Name: ${movie.name}`} />
                    <CardMedia
                      image={movie.image.medium}
                      title={movie.name}
                      className={classes.media}
                      onClick={() => detailMovie(movie.id)}
                    />
                    <CardContent>
                      <Typography variant="h6">
                        Rating: {movie.rating.average} {<Star />}
                      </Typography>
                      <Typography variant="h6">
                        Status: {movie.status}
                      </Typography>
                      <Typography variant="h6">
                        Country: {checkCountry}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            )
          );
        })}
      </Grid>
    </>
  );
}
