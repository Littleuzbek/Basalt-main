import "../components/Projects.css";
import { useNavigate, useParams } from "react-router";
import fiber from "../assets/basaltRockfiber/fiber1.jpg";
import geobasalt from "../assets/basaltGeogrid/geogrid2.jpg";
import ecobasalt from "../assets/basaltPipe/pipe4.jpg";
import goldfiber from "../assets/basaltGoldfiber/GOLDFIBER-37.jpg";
import wool from "../assets/basaltWool/wool3.jpg";
import trade from "../assets/basaltBasfiber/basfiber32.jpg";
import qqwool from "../assets/basaltQWool/qqWool3.jpg";
import quarry from "../assets/basaltQuarry/quarry5.jpg";
import { Helmet } from "react-helmet";

export default function Projects() {
  const navigate = useNavigate();
  const { lang } = useParams();
  return (
    <>
      <Helmet>
        <title>Basalt-Engineering products</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="projects-page">
        <div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-up"
          >
            <img src={fiber} loading="lazy" alt="" />
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
            <img src={geobasalt} loading="lazy" alt="" />
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
            <img src={ecobasalt} loading="lazy" alt="" />
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
            <img src={goldfiber} loading="lazy" alt="" />
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
            <img src={wool} loading="lazy" alt="" />
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
            <img src={trade} loading="lazy" alt="" />
            <div>
              <h4>
                {" "}
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
            <img src={qqwool} loading="lazy" alt="" />
            <div>
              <h4>
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
            <img src={quarry} loading="lazy" alt="" />
            <div>
              <h4>{lang === "en" ? "BASALT QUARRY" : "БАЗАЛЬТОВЫЙ КАРЬЕР"}</h4>
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
        </div>
      </div>
    </>
  );
}
