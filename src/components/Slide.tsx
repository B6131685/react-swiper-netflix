import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import MovieSlide from "./movieSlide";
register();
type Props = {
  title: string;
};
type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };
const Slide = ({ title }: Props) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBegin, setIsBegin] = useState<boolean>(true);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 3.5,
      spaceBetween: 10,
      breakpoints: {
        0:{
            slidesPerView: 1
        },
        300:{
            slidesPerView: 1.3
        },
        640: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 3.5,
        },
      },
      injectStyles: [
        `  
          .swiper-button-prev {
            position: absolute;
            left: -100px;
            color: hsl(357 92% 47%);
          }
          
          .swiper-button-next{
            position: absolute;
            rigth: -140px;
            color: hsl(357 92% 47%);
          }
      `,
      ],
    };

    if (swiperContainer) Object.assign(swiperContainer, params);

    swiperContainer?.initialize();
    swiperContainer?.addEventListener("slidechange", () => {
      swiperContainer?.swiper.isBeginning
        ? setIsBegin(true)
        : setIsBegin(false);
      swiperContainer?.swiper.isEnd ? setIsEnd(true) : setIsEnd(false);
    });
  }, []);

  function PrevSlide() {
    swiperRef.current?.swiper.slidePrev();
  }

  function NextSlide() {
    swiperRef.current?.swiper.slideNext();
  }

  const db: { title: string; img: string }[] = [
    { title: "weneday", img: "./wednesday.jpg" },
    { title: "dark", img: "./dark.jpg" },
    { title: "katherine", img: "./katherine.jpg" },
    { title: "money heis", img: "./money-heist.jpg" },
    { title: "squid game", img: "./squid-game.jpg" },
    { title: "stranger thing", img: "./stranger-thing.jpg" },
    { title: "arcane", img: "./arcane.jpg" },
  ];
  return (
    <div className="w-full">
      <div className="text-white font-semibold text-xl mt-8 mb-4 px-[40px] select-none">{title}</div>
      <div className="w-full grid grid-cols-slid-layout">
        <img
          src="./bx-chevron-left.svg"
          alt=""
          className={`h-10 place-self-center select-none ${
            isBegin ? "opacity-50" : "hover:cursor-pointer opacity-100"
          }`}
          onClick={PrevSlide}
        />
        <div className="text-white">
          <swiper-container ref={swiperRef}>
            {db.map((movie) => (
              <swiper-slide key={movie.title}>
                <MovieSlide
                  title={movie.title}
                  img={movie.img}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <img
          src="./bx-chevron-right.svg"
          alt=""
          className={`h-10 place-self-center select-none ${
            isEnd
              ? "opacity-50 hover:cursor-default"
              : "opacity-100 hover:cursor-pointer"
          }`}
          onClick={NextSlide}
        />
      </div>
    </div>
  );
};

export default Slide;
