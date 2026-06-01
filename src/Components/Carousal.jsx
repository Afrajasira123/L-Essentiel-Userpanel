import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousal = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2100, disableOnInteraction: false }}
        loop
        style={{ height: "350px", width: "300px", marginRight: "175px", marginTop: "15px" }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Box
            sx={{
              height: "350px",
              backgroundImage: `url('${import.meta.env.BASE_URL}small.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              px: { xs: 3, md: 8 },
              color: "#fff",
            }}
          ></Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              height: "350px",
              backgroundImage: `url('${import.meta.env.BASE_URL}small1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Box
            sx={{
              height: "400px",
              backgroundImage: `url('${import.meta.env.BASE_URL}small2.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousal;
