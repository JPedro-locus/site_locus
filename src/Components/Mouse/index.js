import React, { useEffect, useState } from 'react';
import MouseIcon from '../../Assets/mouse.svg';
import ArrowDown from '../../Assets/arrow-down.svg';
import { StyledMouseContainer, StyledArrow } from './styles';

function Mouse() {
  const [hidden, setHidden] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 400) {
      setHidden(true);
  }
  }, [scrollPosition]);

  return (
    <StyledMouseContainer hidden={hidden}>
      <img src={MouseIcon} alt="Icone de mouse" />
      <StyledArrow src={ArrowDown} alt="Icon de flexa" />
    </StyledMouseContainer>
  );
}

export default Mouse;
