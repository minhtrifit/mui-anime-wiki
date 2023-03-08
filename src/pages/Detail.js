import { React, useContext, useEffect } from "react";
import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DetailContext from "../components/DetailContext";
import DetailLeftBar from "../components/DetailLeftBar";
import DetailRightBar from "../components/DetailRightBar";
import MyContext from "../components/MyContext";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/system";

const Detail = () => {
  const { detailData, loadingDetail, setLoadingDetail, detailDataReview } =
    useContext(MyContext);
  const { id, category } = useParams();

  console.log(loadingDetail);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Anime Wiki | ${category} | ${id}`;
  }, [category, id]);

  useEffect(() => {
    setTimeout(() => {
      setLoadingDetail(false);
    }, 3000);
  }, [loadingDetail, setLoadingDetail]);

  return (
    <>
      {loadingDetail ? (
        <Box
          mt={20}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <Stack
            // bgcolor="red"
            sx={{
              direction: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
            <Typography variant="h5" color="primary" fontWeight={700} mt={2}>
              Loading...
            </Typography>
          </Stack>
        </Box>
      ) : (
        <>
          <Nav />
          <DetailContext.Provider value={{ detailData, detailDataReview }}>
            <Grid container spacing={2} mt={2} columns={{ xs: 9, sm: 12 }}>
              <Grid item xs={3}>
                <DetailLeftBar />
              </Grid>
              <Grid item xs={9}>
                <DetailRightBar />
              </Grid>
            </Grid>
          </DetailContext.Provider>
          <Footer />
        </>
      )}
    </>
  );
};

export default Detail;
