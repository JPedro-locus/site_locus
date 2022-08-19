import React from 'react';
import WebSummit from '../images/Web-summit.png';
import WebSummitLogo from '../images/websummit-logo.png';
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
import Carousel from './Carousel';
import Mouse from '../../Components/Mouse';
import { useParams } from 'react-router-dom';

function SpecificEvent() {
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
          <p><b>Web Summit</b></p>
        </div>
        <StyledBanner>
          <StyledEventCard>
            <StyledLogo>
              <img src={WebSummitLogo} alt="Logo do evento" />
            </StyledLogo>
            <StyledDate>
              2021
            </StyledDate>
          </StyledEventCard>
          <StyledMainImage src={WebSummit} alt="Imagem do evento" />
        </StyledBanner>
      </StyledSection>
      <StyledMainContent>
        <StyledText>
          {t("specificEvent1")}
        </StyledText>
        <StyledSubtitle>
          {t("specificEvent2")}
        </StyledSubtitle>
        <StyledTitle>
          o WEB SUMMIT!
        </StyledTitle>
        <StyledText>
          {t("specificEvent3")}
        </StyledText>
      </StyledMainContent>
      <StyledVisualContent>
        <StyledSubtitle>{t("card-event-button")}</StyledSubtitle>
        <StyledVideo src='https://www.youtube.com/embed/HFgMH-MXZJw' width="600" height="300" />
        <Carousel />
      </StyledVisualContent>
      <Mouse />
    </StyledEvent >
  );
}

export default SpecificEvent;
