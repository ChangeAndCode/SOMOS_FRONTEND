import { useState, useEffect } from 'react';
import { fetcher } from '../../../utils/fetcher';
import { dateFormatter } from '../../../utils/dateFormatter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Events() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const data = await fetcher('api/events', {
      method: 'GET',
    });
    console.log('Fetched events: ', data);
    setEvents(data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="font-montserrat text-[var(--text)] space-y-5 px-5">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {events.slice(-3).map((e, index) => {
          const Img = (
            <div className="flex justify-center items-center">
              <img
                className="lg:w-[70%] py-2 max-h-[400px] object-cover rounded-md"
                src={e.images?.[0]}
                alt={e.name || 'event'}
                width={320}
              />
            </div>
          );

          const Text = (
            <div className="flex-col justify-center items-center space-y-2 lg:text-xl">
              <h2 className="font-extrabold text-center">{e.name}</h2>
              <br />
              <div className="flex justify-center items-center">
                <p className="lg:w-[70%] text-justify">{e.description}</p>
              </div>
              <p className="text-center">{dateFormatter(e.startDate)}</p>
            </div>
          );

          return (
            <SwiperSlide key={e.id ?? index}>
              <div>
                <h1 className="py-5 font-extrabold text-center text-[var(--secondary)] text-xl lg:text-2xl">
                  {e.title}
                </h1>
                <div className="grid md:grid-cols-2 md:gap-4 justify-center items-center">
                  <div>{Img}</div>
                  <div>{Text}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
