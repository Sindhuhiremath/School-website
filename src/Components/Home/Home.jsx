import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Logo from "../../assets/logo.jpg";
import Science from "../../assets/science.jpg";
import Sports from "../../assets/sports.jpg";
import Exhibition from "../../assets/exhibition.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="school-intro">
        <img src={Logo} alt="School-logo" />
        <h1>Springdale Public School</h1>
        <p>
          Welcome to Springdale Public School, where we nurture young minds and
          foster a love for learning. Our mission is to provide a supportive and
          inclusive environment that encourages academic excellence and personal
          growth.
        </p>
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        className="carousel-banner"
      >
        <div>
          <img src={Science} alt="Event 1" />
          <p className="legend">Annual Science Fair</p>
        </div>
        <div>
          <img src={Sports} alt="Event 2" />
          <p className="legend">Sports Day</p>
        </div>
        <div>
          <img src={Exhibition} alt="Event 3" />
          <p className="legend">Art Exhibition</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
