import "../Styles/Events.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import CarouselFive from "../Components/Carousels/CarouselFive/CarouselFive.jsx";

const Events = () => {
  const { t } = useTranslation();

  return (
    <div className="main-events">
      <div className="event-path">
        <Link className="link-event" to="/">Home</Link>
        <p className="separator"><b>/</b></p>
        <p><b>Eventos</b></p>
      </div>
      <div className="container-events">
        <div className="title-events">EVENTS</div>
        <div className="carousel-events">
          <CarouselFive />
        </div>
      </div>
    </div>

  );
}

export default Events;