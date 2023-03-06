import { React, useContext } from "react";
import { Typography, Box } from "@mui/material";
import MyContext from "../MyContext";
import Card3 from "../Card3/Card3";

const Slide3 = (props) => {
  const { title, list } = props;
  const { handleViewManga } = useContext(MyContext);
  // console.log(list);

  return (
    <Box p={2}>
      <Typography variant="h6" fontWeight={500} fontSize={15} mb={1}>
        {title}
      </Typography>
      {list.map((item) => {
        return (
          <Card3 item={item} handleDetail={handleViewManga} key={item.mal_id} />
        );
      })}
    </Box>
  );
};

export default Slide3;
