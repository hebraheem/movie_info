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
import { Star } from "@material-ui/icons";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

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
  const history = useHistory();

  const { isLoading, error, data } = useQuery("Data", () =>
    fetch("http://api.tvmaze.com/shows").then((res) => res.json())
  );

  const { loading, search, setSearch, currentUser } = useMovieConsumer();
  const classes = useStyles();

  if (isLoading) return <Loading />;

  if (error) return error.message;

  return (
    currentUser && (
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
          {data.map((movie) => {
            let searchfilter = movie.name.includes(
              search.charAt(0).toUpperCase()
            );
            const checkCountry = movie.network
              ? movie.network.country.name
              : "Not availabe";
            return (
              searchfilter && (
                <Grid
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  key={movie.id}
                  style={{ margin: "0 auto" }}
                >
                  <Card
                    className={classes.card}
                    onClick={() => history.push(`/movie/${movie.id}`)}
                  >
                    <CardHeader title={`Name: ${movie.name}`} />
                    <CardMedia
                      image={movie.image.medium}
                      title={movie.name}
                      className={classes.media}
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
                </Grid>
              )
            );
          })}
        </Grid>
      </>
    )
  );
}
