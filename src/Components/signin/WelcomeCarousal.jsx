import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WelcomeCarousal = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2100, disableOnInteraction: false }}
        loop
        style={{ height: "100%", width: "600px", marginRight: "175px" }}
      >
        <SwiperSlide>
          <Box
            sx={{
              height: "750px",
              backgroundImage: `url('${import.meta.env.BASE_URL}sign1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              height: "750px",
              backgroundImage: `url('${import.meta.env.BASE_URL}sign2.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              height: "750px",
              backgroundImage: `url('${import.meta.env.BASE_URL}sign3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WelcomeCarousal;
