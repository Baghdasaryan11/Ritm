// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./UpcomingEventsSlider.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

interface IEvent {
  img: string;
  description: string;
  date: string;
  address: string;
}

interface IUpcomingEventsSliderProps {
  events: IEvent[];
}

const UpcomingEventsSlider = ({ events }: IUpcomingEventsSliderProps) => {
  return (
    <div className='UpcomingEventsSlider'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {events.map((item, index) => {
          return (
            <SwiperSlide>
              <h4>
                {item.address} <span>{item.date}</span>
              </h4>
              <img src={item.img} alt={item.address} />
              <p>{item.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default UpcomingEventsSlider;
