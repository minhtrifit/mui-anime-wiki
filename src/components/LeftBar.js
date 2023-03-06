import { React, useContext } from "react";
import { Box, Paper } from "@mui/material";
import Slide from "./Slide/Slide";
import Slide2 from "./Slide2/Slide2";
import MyContext from "./MyContext";

const LeftBar = () => {
  const {
    topAnimeList,
    topMangaList,
    handleViewAnime,
    handleViewManga,
    animeRecommendList,
    animeRecommendPag,
    handleAnimeRecommendListPag,
  } = useContext(MyContext);
  // console.log(AnimeRecommendList);

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "0",
      }}
    >
      <Box p={2}>
        <Slide
          title={"Top Anime List:"}
          list={topAnimeList}
          handleViewDetail={handleViewAnime}
        />
        <Slide
          title={"Top Manga List:"}
          list={topMangaList}
          handleViewDetail={handleViewManga}
        />
        <Slide2
          title={"Lastest Anime Recommendations:"}
          list={animeRecommendList}
          animeRecommendPag={animeRecommendPag}
          handleAnimeRecommendListPag={handleAnimeRecommendListPag}
          handleViewDetail={handleViewAnime}
        />
      </Box>
    </Paper>
  );
};

export default LeftBar;
