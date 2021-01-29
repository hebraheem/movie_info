import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useMovieConsumer } from "../context";
import Loading from "./Loading";
import { Star } from "@material-ui/icons";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";

const useStyles = makeStyles(() => ({
  container: {
    paddingLeft: "20px",
  },
  search: {
    margin: "20px",
    width: "300px",
  },
  img: {
    width: "90%",
    height: "600px",
  },
  gridItem: {
    paddingRight: "20px",
  },
  link: {
    textDecoration: "none",
  },
}));
export default function MovieInfo() {
  const classes = useStyles();
  const { id } = useParams();

  const { loading, search, setSearch } = useMovieConsumer();

  const { isLoading, error, data } = useQuery(["repoData", id], () =>
    fetch(`http://api.tvmaze.com/shows/${id}`).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (error) return error.message;

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
      <Grid container className={classes.container}>
        {[data].map((detail) => {
          const regex = /(<([^>]+)>)/gi;
          const checkCountry = detail.network
            ? detail.network.country.name
            : "Not availabe";
          return (
            <>
              <Grid item key={detail.id} xs={12} md={5}>
                <img
                  className={classes.img}
                  src={detail.image.medium}
                  alt={detail.name}
                />
              </Grid>
              <Grid item xs={12} md={7} className={classes.gridItem}>
                <Typography variant="h3">{detail.name}</Typography>
                <Typography variant="h6">
                  Genres: {detail.genres.toString()}
                </Typography>
                <Typography variant="h6">
                  Rating: {detail.rating.average} {<Star />}
                </Typography>
                <Typography variant="h6">Type: {detail.type}</Typography>
                <Typography variant="h6">
                  Language: {detail.language}
                </Typography>
                <Typography variant="h6">Status: {detail.status}</Typography>
                <Typography variant="h6">Country: {checkCountry}</Typography>
                <Typography variant="h6">
                  Run time: {detail.runtime}mins
                </Typography>
                <Typography variant="h6">
                  OfficialSite: {detail.officialSite}
                </Typography>
                <Typography variant="h6">
                  Showing: {detail.schedule.time} {detail.schedule.days}
                </Typography>

                <Typography variant="h6">
                  Summary: <br /> {detail.summary.replace(regex, " ")}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Button variant="outlined" color="primary" size="large">
          <Link to="/" className={classes.link}>
            go back
          </Link>
        </Button>
      </div>
    </>
  );
}
