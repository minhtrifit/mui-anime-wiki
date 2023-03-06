import { React, useContext } from "react";
import { Grid } from "@mui/material";
import Nav from "../components/Nav";
import DetailContext from "../components/DetailContext";
import DetailLeftBar from "../components/DetailLeftBar";
import DetailRightBar from "../components/DetailRightBar";
import MyContext from "../components/MyContext";

const Detail = () => {
  const { detailData } = useContext(MyContext);

  return (
    <>
      <Nav />
      <DetailContext.Provider value={{ detailData }}>
        <Grid container spacing={2} mt={2} columns={{ xs: 9, sm: 12 }}>
          <Grid item xs={3}>
            <DetailLeftBar />
          </Grid>
          <Grid item xs={9}>
            <DetailRightBar />
          </Grid>
        </Grid>
      </DetailContext.Provider>
    </>
  );
};

export default Detail;
