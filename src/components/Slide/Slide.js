import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slide.css";
import { Navigation, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

import MyCard from "../Card/Card";

const Slide = (props) => {
  const { title, list, handleViewDetail } = props;

  return (
    <Box mb={3}>
      <Typography variant="h6" fontWeight={500} fontSize={15} mb={1}>
        {title}
      </Typography>
      <Swiper
        breakpoints={{
          // when window width is < 768px
          0: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
        // slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item) => {
          return (
            <SwiperSlide className="swiper-slide" key={item.mal_id}>
              <MyCard
                img={item.images.jpg.image_url}
                title={item.title_english}
                id={item.mal_id}
                handleViewDetail={handleViewDetail}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slide;
