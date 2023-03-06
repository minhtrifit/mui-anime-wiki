import { React, useContext } from "react";
import { Paper } from "@mui/material";
import Slide3 from "./Slide3/Slide3";
import Slide4 from "./Slide4/Slide4";
import Slide5 from "./Slide5/Slide5";
import MyContext from "./MyContext";

const RightBar = () => {
  const { randomCharacterList, randomPeopleList, mangaRecommendList } =
    useContext(MyContext);
  return (
    <Paper
      elevation={2}
      sx={{
        // backgroundColor: "red",
        paddingBottom: 30,
        borderRadius: "0",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Slide3 title={"Random Top Characters:"} list={randomCharacterList} />
      <Slide4 title={"Random Top People:"} list={randomPeopleList} />
      <Slide5
        title={"Random Manga Recommendations:"}
        list={mangaRecommendList}
      />
    </Paper>
  );
};

export default RightBar;
