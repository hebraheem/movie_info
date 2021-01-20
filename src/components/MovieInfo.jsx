import { Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useMovieConsumer } from "../context";
import Loading from "./Loading";
import {Star} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  search: {
    margin: "20px",
    width: "300px",
  },
  img: {
    width: "400px",
    height: "600px",
  },
}));
export default function MovieInfo() {
  const classes = useStyles();
  const { loading, movie, search, setSearch } = useMovieConsumer();
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
        {movie.map((detail) => {
            const regex= /(<([^>]+)>)/ig;
            const checkCountry = detail.network
              ? detail.network.country.name
              : "Not availabe";
          return (
            <>
              <Grid item key={detail.id} md={6}>
                <img
                  className={classes.img}
                  src={detail.image.original}
                  alt={detail.name}
                />
              </Grid>
              <Grid item md={6}>
                <Typography variant="h3">{detail.name}</Typography>
                <Typography variant="h6">
                  Genres: {detail.genres.slice(" ")}
                </Typography>
                <Typography variant="h6">
                  Rating: {detail.rating.average} {<Star />}
                </Typography>
                <Typography variant="h6">Status: {detail.status}</Typography>
                <Typography variant="h6">Country: {checkCountry}</Typography>
                <Typography variant="h6">Run time: {detail.runtime}mins</Typography>
                <Typography variant="h6" dangrouesly >Summary:  <br/> {detail.summary.replace(regex, ' ')}</Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
