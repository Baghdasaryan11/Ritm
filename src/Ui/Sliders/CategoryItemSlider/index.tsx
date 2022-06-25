// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./CategoryItemSlider.scss";

// import required modules

interface ICategoryItemSliderProps {
  images: string[];
}

const CategoryItemSlider = ({ images }: ICategoryItemSliderProps) => {
  return (
    <div className='CategoryItemSlider'>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        className='mySwiper'
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryItemSlider;
