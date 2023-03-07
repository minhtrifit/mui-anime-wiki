import { React, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Paper,
  CardMedia,
  List,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import DetailContext from "./DetailContext";

const DetailLeftBar = () => {
  const { detailData, loadingDetail } = useContext(DetailContext);
  const { category } = useParams();
  let checkResponse = false;

  if (detailData.mal_id && !loadingDetail) {
    checkResponse = true;
    // console.log("Check data", detailData);
  }

  const summaryBirthday = (str) => {
    const subStr = str.split("T");
    const newDate = subStr[0];
    return newDate;
  };

  return (
    checkResponse === true && (
      <Paper
        elevation={2}
        sx={{
          borderRadius: "0",
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Box p={2} pb={30}>
          <CardMedia
            component="img"
            image={detailData.images.jpg.image_url}
            alt={detailData.mal_id}
          />
          {category === "anime" && (
            <List
              sx={{
                width: "100%",
                // bgcolor: "red",
                bgcolor: "background.paper",
              }}
            >
              {/* Alternative Titles */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Alternative Titles:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Japanese:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.title_japanese}
                  </Typography>
                </Stack>
              </Stack>
              {/* Information */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Information:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Type:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.type}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Episodes:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.episodes}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Status:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.status}
                  </Typography>
                </Stack>
                {detailData.studios && (
                  <Stack direction="row">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Studios:
                    </Typography>
                    {detailData.studios.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          marginLeft={1}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.broadcast && (
                  <Stack direction="row">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Broadcast:
                    </Typography>
                    <Typography component="p" fontSize={12} marginLeft={1}>
                      {detailData.broadcast.string}
                    </Typography>
                  </Stack>
                )}
                {detailData.producers && (
                  <Stack
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Producers:
                    </Typography>
                    {detailData.producers.map((item) => {
                      return (
                        <Typography
                          component="a"
                          href={item.url}
                          fontSize={12}
                          sx={{
                            textDecoration: "none",
                          }}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.genres && (
                  <Stack
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Genres:
                    </Typography>
                    {detailData.genres.map((item) => {
                      return (
                        <Typography
                          component="a"
                          href={item.url}
                          fontSize={12}
                          sx={{
                            textDecoration: "none",
                          }}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Duration:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.duration}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Rating:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.rating}
                  </Typography>
                </Stack>
              </Stack>
              {/* Statistics */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Statistics:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Score:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.score}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Ranked:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.rank}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Popularity:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.popularity}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Members:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.members}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Favorites:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.favorites}
                  </Typography>
                </Stack>
              </Stack>
            </List>
          )}
          {category === "manga" && (
            <List
              sx={{
                width: "100%",
                // bgcolor: "red",
                bgcolor: "background.paper",
              }}
            >
              {/* Alternative Titles */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Alternative Titles:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Japanese:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.title_japanese}
                  </Typography>
                </Stack>
              </Stack>
              {/* Information */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Information:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Type:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.type}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Chapter:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.chapters}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Status:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.status}
                  </Typography>
                </Stack>
                {detailData.studios && (
                  <Stack direction="row">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Studios:
                    </Typography>
                    {detailData.studios.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          marginLeft={1}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.broadcast && (
                  <Stack direction="row">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Broadcast:
                    </Typography>
                    <Typography component="p" fontSize={12} marginLeft={1}>
                      {detailData.broadcast.string}
                    </Typography>
                  </Stack>
                )}
                {detailData.producers && (
                  <Stack
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Producers:
                    </Typography>
                    {detailData.producers.map((item) => {
                      return (
                        <Typography
                          component="a"
                          href={item.url}
                          fontSize={12}
                          sx={{
                            textDecoration: "none",
                          }}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.genres && (
                  <Stack
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Genres:
                    </Typography>
                    {detailData.genres.map((item) => {
                      return (
                        <Typography
                          component="a"
                          href={item.url}
                          fontSize={12}
                          sx={{
                            textDecoration: "none",
                          }}
                          key={item.mal_id}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Approved:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.approved ? "True" : "False"}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Publishing :
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.publishing ? "True" : "False"}
                  </Typography>
                </Stack>
              </Stack>
              {/* Statistics */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Statistics:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Score:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.score}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Ranked:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.rank}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Popularity:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.popularity}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Members:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.members}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Favorites:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.favorites}
                  </Typography>
                </Stack>
              </Stack>
            </List>
          )}
          {category === "characters" && (
            <List
              sx={{
                width: "100%",
                // bgcolor: "red",
                bgcolor: "background.paper",
              }}
            >
              {/* Alternative Titles */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Alternative Titles:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Japanese:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.name_kanji}
                  </Typography>
                </Stack>
              </Stack>
              {/* Information */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Information:
                </Typography>
                <Divider component="li" />
                {detailData.nicknames && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Nicknames:
                    </Typography>
                    {detailData.nicknames.map((item) => {
                      return (
                        <Typography component="p" fontSize={12} key={item}>
                          {item}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {/* {detailData.anime && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Anime:
                    </Typography>
                    {detailData.anime.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          key={item.anime.mal_id}
                        >
                          {item.anime.title}, role: {item.role}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.manga && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Manga:
                    </Typography>
                    {detailData.manga.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          key={item.manga.mal_id}
                        >
                          {item.manga.title}, role: {item.role}
                        </Typography>
                      );
                    })}
                  </Stack>
                )} */}
                {/* {detailData.voices && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Voices:
                    </Typography>
                    {detailData.voices.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          key={item.person.mal_id}
                        >
                          {item.language}: {item.person.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                )} */}
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Approved:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.approved ? "True" : "False"}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Publishing :
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.publishing ? "True" : "False"}
                  </Typography>
                </Stack>
              </Stack>
              {/* Statistics */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Statistics:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    ID:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.mal_id}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Favorites:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.favorites}
                  </Typography>
                </Stack>
              </Stack>
            </List>
          )}
          {category === "people" && (
            <List
              sx={{
                width: "100%",
                // bgcolor: "red",
                bgcolor: "background.paper",
              }}
            >
              {/* Alternative Titles */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Alternative Titles:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Japanese:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.family_name}
                  </Typography>
                </Stack>
              </Stack>
              {/* Information */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Information:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Birthday:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {summaryBirthday(detailData.birthday)}
                  </Typography>
                </Stack>
                {/* {detailData.anime && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Manga:
                    </Typography>
                    {detailData.anime.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          key={item.anime.mal_id}
                        >
                          {item.anime.title}, position: {item.position}
                        </Typography>
                      );
                    })}
                  </Stack>
                )}
                {detailData.manga && (
                  <Stack direction="column">
                    <Typography component="p" fontSize={12} fontWeight={700}>
                      Manga:
                    </Typography>
                    {detailData.manga.map((item) => {
                      return (
                        <Typography
                          component="p"
                          fontSize={12}
                          key={item.manga.mal_id}
                        >
                          {item.manga.title}, position: {item.position}
                        </Typography>
                      );
                    })}
                  </Stack>
                )} */}
              </Stack>
              {/* Statistics */}
              <Stack marginTop={2}>
                <Typography variant="h5" fontSize={15} fontWeight={700}>
                  Statistics:
                </Typography>
                <Divider component="li" />
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    ID:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.mal_id}
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography component="p" fontSize={12} fontWeight={700}>
                    Favorites:
                  </Typography>
                  <Typography component="p" fontSize={12} marginLeft={1}>
                    {detailData.favorites}
                  </Typography>
                </Stack>
              </Stack>
            </List>
          )}
        </Box>
      </Paper>
    )
  );
};

export default DetailLeftBar;
