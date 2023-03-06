import { React } from "react";
import { Box, Typography, Pagination, Stack } from "@mui/material";
import Card2 from "../Card2/Card2";

const Slide2 = (props) => {
  const {
    title,
    list,
    animeRecommendPag,
    handleAnimeRecommendListPag,
    handleViewDetail,
  } = props;

  return (
    <Box mb={2}>
      <Typography variant="h6" fontWeight={500} fontSize={15} mb={1}>
        {title}
      </Typography>
      <Pagination
        count={animeRecommendPag}
        color="primary"
        sx={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(e) => {
          handleAnimeRecommendListPag(e.target.textContent);
        }}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {list.map((item, index) => {
          return (
            <Card2
              item={item}
              detail={item.entry[0]}
              handleViewDetail={handleViewDetail}
              key={index}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Slide2;
