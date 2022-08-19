import React from 'react';
import Collision from '../../images/collisionEvento.jpg';
import CollisionLogo from '../../images/CollisionLogo.jpg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  StyledEvent,
  StyledSection,
  StyledBanner,
  StyledMainImage,
  StyledEventCard,
  StyledLogo,
  StyledDate,
  StyledText,
  StyledMainContent,
  StyledSubtitle,
  StyledTitle,
  StyledVisualContent,
  StyledVideo,
  StyledCarousel
} from './styles';
import Carousel from '../CarouselCollision';
import Mouse from '../../../Components/Mouse';
import { useParams } from 'react-router-dom';

function WebSummitEvent() {
  const { name } = useParams();
  const { t } = useTranslation();

  return (
    <StyledEvent>
      <StyledSection>
        <div className="specific-event-path">
          <Link className="link-event-specific" to="/">Home</Link>
          <p className="separator"><b>/</b></p>
          <Link className="link-event-specific" to="/events">{t("header-events")}</Link>
          <p className="separator"><b>/</b></p>
          <p><b>Collision</b></p>
        </div>
        <StyledBanner>
          <StyledEventCard>
            <StyledLogo>
              <img src={CollisionLogo} alt="Logo do evento" />
            </StyledLogo>
            <StyledDate>
              2022
            </StyledDate>
          </StyledEventCard>
          <StyledMainImage src={Collision} alt="Imagem do evento" />
        </StyledBanner>
      </StyledSection>
      <StyledMainContent>
        <StyledText>
          {t("specificEvent7")}
        </StyledText>
        <StyledSubtitle>
          {t("specificEvent8")}
        </StyledSubtitle>
        <StyledTitle>
            in North America
        </StyledTitle>
        <StyledText>
          {t("specificEvent9")}
        </StyledText>
      </StyledMainContent>
      <StyledVisualContent>
        <StyledSubtitle>{t("card-event-button")}</StyledSubtitle>
        <StyledVideo src='https://www.youtube.com/embed/f4Dv-MH9fFc' width="600" height="300" />
        <Carousel />
      </StyledVisualContent>
      <Mouse />
    </StyledEvent >
  );
}

export default WebSummitEvent;
