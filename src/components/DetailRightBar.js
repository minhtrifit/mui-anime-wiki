import { React } from "react";
import { useContext } from "react";
import {
  Box,
  Paper,
  Typography,
  Breadcrumbs,
  Stack,
  Divider,
  Grid,
  CardMedia,
  List,
  Avatar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DetailContext from "./DetailContext";
import MyContext from "./MyContext";
import DetailReview from "./DetailReview";

const DetailRightBar = () => {
  const { detailData, loadingDetail, detailDataReview } =
    useContext(DetailContext);
  const { handleNavigation } = useContext(MyContext);
  const { id, category } = useParams();
  let checkResponse = false;

  if (detailData.mal_id && !loadingDetail) {
    checkResponse = true;
    // console.log("Check reviews", detailDataReview);
  }

  return (
    <>
      {(category === "anime" || category === "manga") &&
        checkResponse === true && (
          <Paper
            elevation={2}
            sx={{
              borderRadius: "0",
            }}
          >
            <Box p={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography
                  underline="hover"
                  color="inherit"
                  // to="/"
                  style={{
                    textDecoration: "none",
                    color: "#007aff",
                  }}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={(e) => {
                    handleNavigation();
                  }}
                >
                  Home
                </Typography>
                <Typography color="text.primary">{category}</Typography>
                <Typography color="text.primary">{id}</Typography>
              </Breadcrumbs>
              <Typography
                variant="h5"
                color="primary"
                fontWeight={700}
                mt={2}
                mb={2}
              >
                {detailData.title}
              </Typography>
              <Typography
                fontSize={14}
                color="gray"
                fontWeight={500}
                mt={2}
                mb={2}
              >
                {detailData.title_japanese}
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                divider={<Divider orientation="vertical" flexItem />}
                p={1}
                bgcolor="#e8e8e8"
              >
                <Box p={2}>
                  <Box
                    sx={{
                      backgroundColor: "#1976d2",
                      fontSize: 12,
                      color: "#fff",
                      borderRadius: "3px",
                      paddingLeft: 2,
                      paddingRight: 2,
                      textAlign: "center",
                    }}
                  >
                    SCORE
                  </Box>
                  <Typography textAlign="center" fontSize={40} fontWeight={700}>
                    {detailData.score}
                  </Typography>
                </Box>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={4} sm={3}>
                    <Stack
                      p={2}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Typography fontSize={20}>Ranked:</Typography>
                      <Typography fontSize={20} fontWeight={700} pl={1}>
                        #{detailData.rank}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack
                      p={2}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Typography fontSize={20}>Popularity:</Typography>
                      <Typography fontSize={20} fontWeight={700} pl={1}>
                        #{detailData.popularity}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack
                      p={2}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Typography fontSize={20}>Members:</Typography>
                      <Typography fontSize={20} fontWeight={700} pl={1}>
                        {detailData.members}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                  Synopsis:
                </Typography>
                <Divider />
                <Stack direction="row" mt={1}>
                  <Typography component="p" fontSize={12} textAlign="justify">
                    {detailData.synopsis}
                  </Typography>
                </Stack>
              </Stack>
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                  Background:
                </Typography>
                <Divider />
                <Stack direction="row" mt={1}>
                  <Typography component="p" fontSize={12} textAlign="justify">
                    {detailData.background}
                  </Typography>
                </Stack>
              </Stack>
              {category === "anime" && (
                <Stack marginTop={2}>
                  <Typography
                    variant="h5"
                    fontSize={15}
                    fontWeight={700}
                    mb={1}
                  >
                    Episode Videos:
                  </Typography>
                  <Divider />
                  <Stack
                    direction="row"
                    mt={1}
                    sx={{
                      width: 300,
                    }}
                  >
                    {detailData.trailer.embed_url && (
                      <CardMedia
                        component="iframe"
                        image={detailData.trailer.embed_url}
                        autoPlay={false}
                      />
                    )}
                  </Stack>
                </Stack>
              )}
              <Box mt={5} mb={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                  Reviews:
                </Typography>
                <Divider />
                <List sx={{ width: "100%" }}>
                  {detailDataReview &&
                    detailDataReview.map((item) => {
                      return <DetailReview item={item} key={item.mal_id} />;
                    })}
                </List>
              </Box>
            </Box>
          </Paper>
        )}
      {category === "characters" && checkResponse === true && (
        <Paper
          elevation={2}
          sx={{
            borderRadius: "0",
          }}
        >
          <Box p={2} pb={5}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography
                underline="hover"
                color="inherit"
                // to="/"
                style={{
                  textDecoration: "none",
                  color: "#007aff",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => {
                  handleNavigation();
                }}
              >
                Home
              </Typography>
              <Typography color="text.primary">{category}</Typography>
              <Typography color="text.primary">{id}</Typography>
            </Breadcrumbs>
            <Typography
              variant="h5"
              color="primary"
              fontWeight={700}
              mt={2}
              mb={2}
            >
              {detailData.name}
            </Typography>
            <Typography
              fontSize={14}
              color="gray"
              fontWeight={500}
              mt={2}
              mb={2}
            >
              {detailData.name_kanji}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              divider={<Divider orientation="vertical" flexItem />}
              p={1}
              bgcolor="#e8e8e8"
            >
              <Box p={2}>
                <Box
                  sx={{
                    backgroundColor: "#1976d2",
                    fontSize: 12,
                    color: "#fff",
                    borderRadius: "3px",
                    paddingLeft: 2,
                    paddingRight: 2,
                    textAlign: "center",
                  }}
                >
                  FAVORITES
                </Box>
                <Typography textAlign="center" fontSize={40} fontWeight={700}>
                  {detailData.favorites}
                </Typography>
              </Box>
              <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                  <Stack
                    p={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Typography fontSize={20}>ID:</Typography>
                    <Typography fontSize={20} fontWeight={700} pl={1}>
                      #{detailData.mal_id}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={8}>
                  <Stack
                    p={2}
                    sx={{
                      flexDirection: "row",
                      justifyContent: "center",
                      display: {
                        xs: "none",
                        sm: "flex",
                      },
                    }}
                  >
                    <Typography fontSize={20}>Nickname:</Typography>
                    <Typography fontSize={20} fontWeight={700} pl={1}>
                      #{detailData.nicknames[0]}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                About:
              </Typography>
              <Divider />
              <Stack direction="row" mt={1}>
                <Typography component="p" fontSize={12} textAlign="justify">
                  {detailData.about}
                </Typography>
              </Stack>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Voices:
              </Typography>
              <Divider />
              <Stack direction="row" mt={1}>
                {detailData.voices && (
                  <Typography fontSize={12} textAlign="justify">
                    {detailData.voices.map((item) => {
                      return (
                        <>
                          {item.language}: {item.person.name}
                          {"/ "}
                        </>
                      );
                    })}
                  </Typography>
                )}
              </Stack>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Anime:
              </Typography>
              <Divider />
              {detailData.anime && (
                <Grid container spacing={2} mt={0} columns={{ xs: 8, sm: 12 }}>
                  {detailData.anime.map((item) => {
                    return (
                      <Grid item xs={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            height: "100%",
                            "&:hover": {
                              cursor: "pointer",
                              bgcolor: "#dbdbdb",
                            },
                          }}
                          onClick={(e) => {
                            console.log(item);
                          }}
                        >
                          <Stack direction="row" p={1}>
                            <Avatar
                              alt={item.anime.title}
                              src={item.anime.images.jpg.image_url}
                            />
                            <Box>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                ml={1}
                              >
                                {item.anime.title}
                              </Typography>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                color="gray"
                                ml={1}
                              >
                                Role: Main
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Manga:
              </Typography>
              <Divider />
              {detailData.manga && (
                <Grid container spacing={2} mt={0} columns={{ xs: 8, sm: 12 }}>
                  {detailData.manga.map((item) => {
                    return (
                      <Grid item xs={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            height: "100%",
                            "&:hover": {
                              cursor: "pointer",
                              bgcolor: "#dbdbdb",
                            },
                          }}
                          onClick={(e) => {
                            console.log(item);
                          }}
                        >
                          <Stack direction="row" p={1}>
                            <Avatar
                              alt={item.manga.title}
                              src={item.manga.images.jpg.image_url}
                            />
                            <Box>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                ml={1}
                              >
                                {item.manga.title}
                              </Typography>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                color="gray"
                                ml={1}
                              >
                                Role: Main
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Stack>
          </Box>
        </Paper>
      )}
      {category === "people" && checkResponse === true && (
        <Paper
          elevation={2}
          sx={{
            borderRadius: "0",
          }}
        >
          <Box p={2} pb={5}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography
                underline="hover"
                color="inherit"
                // to="/"
                style={{
                  textDecoration: "none",
                  color: "#007aff",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={(e) => {
                  handleNavigation();
                }}
              >
                Home
              </Typography>
              <Typography color="text.primary">{category}</Typography>
              <Typography color="text.primary">{id}</Typography>
            </Breadcrumbs>
            <Typography
              variant="h5"
              color="primary"
              fontWeight={700}
              mt={2}
              mb={2}
            >
              {detailData.title}
            </Typography>
            <Typography
              fontSize={14}
              color="gray"
              fontWeight={500}
              mt={2}
              mb={2}
            >
              {detailData.title_japanese}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              divider={<Divider orientation="vertical" flexItem />}
              p={1}
              bgcolor="#e8e8e8"
            >
              <Box p={2}>
                <Box
                  sx={{
                    backgroundColor: "#1976d2",
                    fontSize: 12,
                    color: "#fff",
                    borderRadius: "3px",
                    paddingLeft: 2,
                    paddingRight: 2,
                    textAlign: "center",
                  }}
                >
                  FAVORITES
                </Box>
                <Typography textAlign="center" fontSize={40} fontWeight={700}>
                  {detailData.favorites}
                </Typography>
              </Box>
              <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4}>
                  <Stack
                    p={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Typography fontSize={20}>ID:</Typography>
                    <Typography fontSize={20} fontWeight={700} pl={1}>
                      #{detailData.mal_id}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={8}>
                  <Stack
                    p={2}
                    sx={{
                      flexDirection: "row",
                      justifyContent: "center",
                      display: {
                        xs: "none",
                        sm: "flex",
                      },
                    }}
                  >
                    <Typography fontSize={20}>Alternate Name:</Typography>
                    <Typography fontSize={20} fontWeight={700} pl={1}>
                      #
                      {detailData.alternate_names[0]
                        ? detailData.alternate_names[0]
                        : "None"}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                About:
              </Typography>
              <Divider />
              <Stack direction="row" mt={1}>
                <Typography component="p" fontSize={12} textAlign="justify">
                  {detailData.about}
                </Typography>
              </Stack>
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Anime:
              </Typography>
              <Divider />
              {detailData.anime && (
                <Grid container spacing={2} mt={0} columns={{ xs: 8, sm: 12 }}>
                  {detailData.anime.map((item) => {
                    return (
                      <Grid item xs={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            height: "100%",
                            "&:hover": {
                              cursor: "pointer",
                              bgcolor: "#dbdbdb",
                            },
                          }}
                          onClick={(e) => {
                            console.log(item);
                          }}
                        >
                          <Stack direction="row" p={1}>
                            <Avatar
                              alt={item.anime.title}
                              src={item.anime.images.jpg.image_url}
                            />
                            <Box>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                ml={1}
                              >
                                {item.anime.title}
                              </Typography>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                color="gray"
                                ml={1}
                              >
                                Role: Main
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Stack>
            <Stack marginTop={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Manga:
              </Typography>
              <Divider />
              {detailData.manga && (
                <Grid container spacing={2} mt={0} columns={{ xs: 8, sm: 12 }}>
                  {detailData.manga.map((item) => {
                    return (
                      <Grid item xs={4}>
                        <Paper
                          elevation={2}
                          sx={{
                            height: "100%",
                            "&:hover": {
                              cursor: "pointer",
                              bgcolor: "#dbdbdb",
                            },
                          }}
                          onClick={(e) => {
                            console.log(item);
                          }}
                        >
                          <Stack direction="row" p={1}>
                            <Avatar
                              alt={item.manga.title}
                              src={item.manga.images.jpg.image_url}
                            />
                            <Box>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                ml={1}
                              >
                                {item.manga.title}
                              </Typography>
                              <Typography
                                fontSize={12}
                                textAlign="justify"
                                color="gray"
                                ml={1}
                              >
                                Role: Main
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Stack>
            {/* <Box mt={5} mb={2}>
              <Typography variant="h5" fontSize={15} fontWeight={700} mb={1}>
                Reviews:
              </Typography>
              <Divider />
              <List sx={{ width: "100%" }}>
                {detailDataReview &&
                  detailDataReview.map((item) => {
                    return <DetailReview item={item} key={item.mal_id} />;
                  })}
              </List>
            </Box> */}
          </Box>
        </Paper>
      )}
    </>
  );
};

export default DetailRightBar;
