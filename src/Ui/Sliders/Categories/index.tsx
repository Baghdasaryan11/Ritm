// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Categories.scss";
import { useNavigate } from "react-router-dom";

// import required modules

export default function CategoriesSlider() {
  const navigate = useNavigate();
  return (
    <div className='Categories'>
      {/* <p>Find your place</p> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide onClick={() => navigate("/categories/bars")}>
          Bars
        </SwiperSlide>
        <SwiperSlide>Clubs</SwiperSlide>
        <SwiperSlide>Resturants</SwiperSlide>
        <SwiperSlide>Game zone</SwiperSlide>
        <SwiperSlide>Loft</SwiperSlide>
        <SwiperSlide onClick={() => navigate("categories/beer-house")}>
          Beer house
        </SwiperSlide>
        <SwiperSlide>Pub</SwiperSlide>
        <SwiperSlide>Romantic</SwiperSlide>
        <SwiperSlide>Events</SwiperSlide>
      </Swiper>
    </div>
  );
}
