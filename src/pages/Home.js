import { React } from "react";
import { Grid } from "@mui/material";
import Nav from "../components/Nav";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const Home = () => {
  return (
    <>
      <Nav />
      <Grid container spacing={2} mt={1} columns={{ xs: 8, sm: 12 }}>
        <Grid item xs={8}>
          <LeftBar />
        </Grid>
        <Grid item xs={4}>
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
