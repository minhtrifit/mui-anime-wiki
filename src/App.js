import { React, useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyContext from "./components/MyContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";

function App() {
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [topMangaList, setTopMangaList] = useState([]);
  const [animeRecommendList, setAnimeRecommendList] = useState([]);
  const [animeRecommendPag, setAnimeRecommendPag] = useState(0); // Pagination for anime recommend list
  const [randomCharacterList, setRandomCharacterList] = useState([]);
  const [randomPeopleList, setRandomPeopleList] = useState([]);
  const [mangaRecommendList, setMangaRecommendList] = useState([]);
  const navigate = useNavigate();

  const TopAnimePath = "./Data/TopAnime.json";
  const TopMangaPath = "./Data/TopManga.json";
  const TopCharacterPath = "./Data/TopCharacter.json";
  const animeRecommendPath = "./Data/AnimeRecommendations.json";
  const TopPeoplePath = "./Data/TopPeople.json";
  const mangaRecommendPath = "./Data/MangaRecommendations.json";

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

  //==================== CALL API
  useEffect(() => {
    getTopAnimeList(TopAnimePath);
    getTopMangaList(TopMangaPath);
    getAnimeRecommend(animeRecommendPath, 1);
    getRandomCharacter(TopCharacterPath);
    getRandomPeople(TopPeoplePath);
    getRandomManga(mangaRecommendPath);
  }, []);

  //==================== Event handle
  const handleViewAnime = async (id) => {
    try {
      navigate(`/anime/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewManga = async (id) => {
    try {
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
    navigate(`/character/${id}`);
    // console.log(id);
  };

  const handleViewPeople = (id) => {
    navigate(`/people/${id}`);
    // console.log(id);
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
      }}
    >
      <div className="app">
        <Container maxWidth="lg" /*sx={{ backgroundColor: "red" }}*/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:id" element={<Detail />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
