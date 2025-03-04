import "../components/homeComponents/Home.css";
import "../components/ContactUs.css";
import { Suspense, lazy } from "react";
import lava2 from "../assets/lava2.mp4"
import TopSection from "../components/TopSection"
import { Helmet } from "react-helmet";
const HomeHeader = lazy(() => import("../components/homeComponents/HomeHeader"));
const Testimonial = lazy(() => import("../components/homeComponents/Testimonial"));
const Welcome = lazy(() => import("../components/homeComponents/Welcome"));
const Team = lazy(() => import("../components/homeComponents/Team"));
const HomeNews = lazy(() => import("../components/homeComponents/HomeNews"));
const ProjectSlider = lazy(() => import("../components/sliders/ProjectSlider"));
const ContactUs = lazy(() => import("../components/ContactUsComp"));
const HomePartners = lazy(() => import("../components/homeComponents/HomePartners"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Basalt-Engineering high quality basalt products provider in Uzbekistan </title>
        <meta name="description" content=""/>
      </Helmet>

      <TopSection />

      <HomeHeader />

      <Welcome />

      <div className="home-project-container">
        <video
          src={lava2}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
        <div>
          <h2>Our Projects</h2>
          <span></span>
              <ProjectSlider />
        </div>
      </div>

      <Testimonial />

      <Team />

      <HomePartners />

      <HomeNews />

      <ContactUs />

    </>
  );
}
