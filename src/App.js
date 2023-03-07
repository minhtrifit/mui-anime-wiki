import { React, useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyContext from "./components/MyContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [topMangaList, setTopMangaList] = useState([]);
  const [animeRecommendList, setAnimeRecommendList] = useState([]);
  const [animeRecommendPag, setAnimeRecommendPag] = useState(0); // Pagination for anime recommend list
  const [randomCharacterList, setRandomCharacterList] = useState([]);
  const [randomPeopleList, setRandomPeopleList] = useState([]);
  const [mangaRecommendList, setMangaRecommendList] = useState([]);
  const [paramsDetailData, setParamsDetailData] = useState({});
  const [detailData, setDetailData] = useState({});
  const [detailDataReview, setDetailDataReview] = useState({});
  const [loadingDetail, setLoadingDetail] = useState(true);
  const [search, setSearch] = useState("");
  const [openSearchAlert, setOpenSearchAlert] = useState(false);
  const navigate = useNavigate();

  const TopAnimePath = "./Data/TopAnime.json";
  const TopMangaPath = "./Data/TopManga.json";
  const TopCharacterPath = "./Data/TopCharacter.json";
  const animeRecommendPath = "./Data/AnimeRecommendations.json";
  const TopPeoplePath = "./Data/TopPeople.json";
  const mangaRecommendPath = "./Data/MangaRecommendations.json";

  //==================== API Handle
  const getTopAnimeList = async (path) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      setTopAnimeList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopMangaList = async (path) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      setTopMangaList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnimeRecommend = async (path, n) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      const x = 5;
      const begin = (n - 1) * x;
      const end = (n - 1) * x + x;
      const tempList = data.data.slice(begin, end);
      const pageCount = data.data.length / x;
      setAnimeRecommendPag(pageCount);
      setAnimeRecommendList(tempList);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomCharacter = async (path) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      let sortList = [];
      const array = Array(5) // array size is 5
        .fill()
        .map(() => Math.floor(data.data.length * Math.random())); // numbers from 0- data length (exclusive)

      for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < data.data.length; ++j) {
          if (array[i] === j) {
            // value of array is index of data.data
            sortList.push(data.data[j]);
          }
        }
      }
      setRandomCharacterList(sortList);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomPeople = async (path) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      let sortList = [];
      const array = Array(5) // array size is 5
        .fill()
        .map(() => Math.floor(data.data.length * Math.random())); // numbers from 0- data length (exclusive)

      for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < data.data.length; ++j) {
          if (array[i] === j) {
            // value of array is index of data.data
            sortList.push(data.data[j]);
          }
        }
      }
      setRandomPeopleList(sortList);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomManga = async (path) => {
    try {
      const res = await axios.get(path);
      const data = res.data;
      let sortList = [];
      const array = Array(5) // array size is 5
        .fill()
        .map(() => Math.floor(data.data.length * Math.random())); // numbers from 0- data length (exclusive)

      for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < data.data.length; ++j) {
          if (array[i] === j) {
            // value of array is index of data.data
            sortList.push(data.data[j]);
          }
        }
      }
      setMangaRecommendList(sortList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDetail = async (id, category) => {
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v4/${category}/${id}/full`
      );
      const data = res.data.data;
      setDetailData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDetailReviews = async (id, category) => {
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v4/${category}/${id}/reviews`
      );
      const data = res.data.data;
      setDetailDataReview(data);
    } catch (error) {
      console.log(error);
    }
  };

  //==================== CALL API
  // Main
  useEffect(() => {
    getTopAnimeList(TopAnimePath);
    getTopMangaList(TopMangaPath);
    getAnimeRecommend(animeRecommendPath, 1);
    getRandomCharacter(TopCharacterPath);
    getRandomPeople(TopPeoplePath);
    getRandomManga(mangaRecommendPath);
  }, []);

  // Get detail
  useEffect(() => {
    const { id, category } = paramsDetailData;
    if (id && category) {
      handleGetDetail(id, category);
      handleGetDetailReviews(id, category);
    }
  }, [paramsDetailData]);

  //==================== Event handle
  const handleViewAnime = async (id) => {
    try {
      setParamsDetailData({
        id: id.toString(),
        category: "anime",
      });

      navigate(`/anime/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewManga = async (id) => {
    try {
      setParamsDetailData({
        id: id.toString(),
        category: "manga",
      });

      navigate(`/manga/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnimeRecommendListPag = (str) => {
    const number = parseInt(str);
    getAnimeRecommend(animeRecommendPath, number);
    // window.scrollTo(0, 600);
  };

  const handleViewCharacter = (id) => {
    setParamsDetailData({
      id: id.toString(),
      category: "characters",
    });

    navigate(`/characters/${id}`);
    // console.log(id);
  };

  const handleViewPeople = (id) => {
    setParamsDetailData({
      id: id.toString(),
      category: "people",
    });

    navigate(`/people/${id}`);
    // console.log(id);
  };

  const handleNavigation = () => {
    navigate("/");
    document.title = "Anime Wiki";
    getAnimeRecommend(animeRecommendPath, 1);
    setLoadingDetail(!loadingDetail);
  };

  const handleCloseSearchAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSearchAlert(false);
  };

  const handleSearch = () => {
    if (search === "") {
      setOpenSearchAlert(true);
    } else {
      const str = search.split(" ");
      const [id, category] = str;
      if (category === "anime") {
        handleViewAnime(id);
      }
      if (category === "manga") {
        handleViewManga(id);
      }
      if (category === "characters") {
        handleViewCharacter(id);
      }
      if (category === "people") {
        handleViewPeople(id);
      }
      setLoadingDetail(!loadingDetail);
      setSearch("");
    }
  };

  return (
    <MyContext.Provider
      value={{
        topAnimeList,
        topMangaList,
        handleViewAnime,
        handleViewManga,
        animeRecommendList,
        animeRecommendPag,
        handleAnimeRecommendListPag,
        randomCharacterList,
        handleViewCharacter,
        randomPeopleList,
        handleViewPeople,
        mangaRecommendList,
        detailData,
        handleNavigation,
        loadingDetail,
        setLoadingDetail,
        detailDataReview,
        search,
        setSearch,
        handleSearch,
        openSearchAlert,
        handleCloseSearchAlert,
      }}
    >
      <div className="app">
        <Container maxWidth="lg" /*sx={{ backgroundColor: "red" }}*/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:id" element={<Detail />} />
          </Routes>
        </Container>
      </div>
    </MyContext.Provider>
  );
}

export default App;
