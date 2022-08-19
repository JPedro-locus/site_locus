import React from 'react';
import Emerge from '../../images/eMergeImagemEvento.jpeg';
import EmergeLogo from '../../images/eMerge_Americas_Logo_3.jpg';
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
import Carousel from '../CarouselEmerge';
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
          <p><b>eMerge</b></p>
        </div>
        <StyledBanner>
          <StyledEventCard>
            <StyledLogo>
              <img src={EmergeLogo} alt="Logo do evento" />
            </StyledLogo>
            <StyledDate>
              2022
            </StyledDate>
          </StyledEventCard>
          <StyledMainImage src={Emerge} alt="Imagem do evento" />
        </StyledBanner>
      </StyledSection>
      <StyledMainContent>
        <StyledText>
          {t("specificEvent4")}
        </StyledText>
        <StyledSubtitle>
          {t("specificEvent5")}
        </StyledSubtitle>
        <StyledTitle>
          eMerge Americas!
        </StyledTitle>
        <StyledText>
          {t("specificEvent6")}
        </StyledText>
      </StyledMainContent>
      <StyledVisualContent>
        <StyledSubtitle>{t("card-event-button")}</StyledSubtitle>
        <StyledVideo src='https://www.youtube.com/embed/Zp-IC9qjD8M' width="600" height="300" />
        <Carousel />
      </StyledVisualContent>
      <Mouse />
    </StyledEvent >
  );
}

export default WebSummitEvent;
