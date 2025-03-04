import "../Projects.css";
import Slider from "react-slick";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { GrFormPrevious } from "react-icons/gr";
import fiber from "../../assets/basaltRockfiber/fiber1.jpg";
import geobasalt from "../../assets/basaltGeogrid/geogrid2.jpg";
import ecobasalt from "../../assets/basaltPipe/pipe4.jpg";
import goldfiber from "../../assets/basaltGoldfiber/GOLDFIBER-37.jpg";
import wool from "../../assets/basaltWool/wool3.jpg";
import trade from "../../assets/basaltBasfiber/basfiber32.jpg";
import qqwool from "../../assets/basaltQWool/qqWool3.jpg";
import quarry from "../../assets/basaltQuarry/quarry5.jpg";

export default function ProjectSlider() {
  let sliderRef = useRef(null);
  const { lang } = useParams();
  const navigate = useNavigate();

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    focusOnSelect: true,
    nav: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 5,
    swipe: true,
    draggable: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          autoplay: false,
          speed: 400,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          autoplay: false,
          speed: 400,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-project">
      <div>
        <div className="slider-container">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-up"
            >
              <img loading="lazy" src={fiber} alt="" />
              <div>
                <h4>{lang === "en" ? "ROCKFIBER" : "РОКФАЙБЕР"}</h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt roving (basalt continuous fiber), basalt chopped strand and basalt reinforcement bars."
                    : "Комплекс по производству базальтового непрерывного волокна, нарезанного прута и арматурных стержней."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/rockfiber`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-mid"
            >
              <img loading="lazy" src={geobasalt} alt="" />
              <div>
                <h4>
                  {lang === "en"
                    ? "GEOBASALT PRODUCTS"
                    : "ГЕОБАЗАЛЬТОВЫЕ ИЗДЕЛИЯ"}
                </h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt geogrid and facade mesh."
                    : "Комплекс по производству базальтовых георешеток и фасадной сетки."}
                </p>
                <div className="moreBtn">
                  <button
                    onClick={() => navigate(`/${lang}/projects/geobasalt-products`)}
                  >
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-low"
            >
              <img loading="lazy" src={ecobasalt} alt="" />
              <div>
                <h4>
                  {lang === "en" ? "ECOBASALT GROUP" : "ЭКОБАЗАЛЬТОВАЯ ГРУППА"}
                </h4>
                <p>
                  {lang === "en"
                    ? "Production of continuous BRP pipes"
                    : "Комплекс по производству непрерывных труб BRP."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/ecobasalt-group`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-up"
            >
              <img loading="lazy" src={goldfiber} alt="" />
              <div>
                <h4>{lang === "en" ? "GOLDFIBER PRO" : "ГОЛДФАЙБЕР ПРО"}</h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt continuous fiber (including basalt direct roving) and basalt chopped strand."
                    : "Комплекс по производству базальтового непрерывного волокна (в том числе базальтового прямого ровинга) и базальтовой рубленой нити."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/goldfiber-pro`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-mid"
            >
              <img loading="lazy" src={wool} alt="" />
              <div>
                <h4>{lang === "en" ? "BASALT WOOL" : "БАЗАЛЬТОВАЯ ВАТА"}</h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt rockwool and insulation materials"
                    : "Комплекс по производству базальтовой минеральной ваты."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/basalt-wool`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-up"
            >
              <img loading="lazy" src={trade} alt="" />
              <div>
                <h4>
                  {lang === "en" ? "BASFIBER TRADE" : "ТОРГОВЛЯ БАСФАЙБЕРОМ"}
                </h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt continuous fiber (including basalt direct roving) and basalt fabric"
                    : "Комплекс по производству базальтового волокна и тканей."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/basfiber-trade`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-mid"
            >
              <img loading="lazy" src={qqwool} alt="" />
              <div>
                <h4 style={{ padding: "12px 20px 0" }}>
                  {lang === "en"
                    ? "QORAQALPOQ BASALTWOOL"
                    : "КОРАКАЛПОК БАЗАЛЬТОВАЯ ВАТА"}
                </h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt rockwool and insulation materials"
                    : "Производство базальтовой минеральной ваты и изоляционных материалов."}
                </p>
                <div className="moreBtn">
                  <button
                    onClick={() => navigate(`/${lang}/projects/qoraqalpoq-basalt-wool`)}
                  >
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project-cardd project-card-slider"
              id="project-slider-low"
            >
              <img loading="lazy" src={quarry} alt="" />
              <div>
                <h4>
                  {lang === "en" ? "BASALT QUARRY" : "БАЗАЛЬТОВЫЙ КАРЬЕР"}
                </h4>
                <p>
                  {lang === "en"
                    ? "Production of basalt quarry"
                    : "Добыча базальтовой породы и подготовка сырья."}
                </p>
                <div className="moreBtn">
                  <button onClick={() => navigate(`/${lang}/projects/basalt-quarry`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="action-container-sm">
          <GrFormPrevious onClick={() => previous()} />
          <GrFormPrevious onClick={() => next()} />
        </div>
      </div>
    </div>
  );
}
