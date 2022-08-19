import React, { useEffect, useRef, useState } from 'react';
import { 
  StyledProcessCard,
  StyledTitleCard,
  StyledTextCard,
  StyledIcon,
  StyledDividerCircle,
  StyledFixedContent
} from './styles';

function Card({ icon, side, label, description, scrollPosition }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const div = ref.current;
    const distanceToTop = div.getBoundingClientRect().top - 98;
    const middleHeight = (window.innerHeight / 2) + 98;

    if ((distanceToTop <= (middleHeight + 100)) && (distanceToTop >= (middleHeight - 100))) {
      setHidden(true);
    }
  }, [scrollPosition]);

  return (
    <StyledProcessCard onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} hidden={hidden} className={side} active={active} side={side}>
      <StyledDividerCircle className={side} ref={ref} active={active} side={side} />
      <StyledFixedContent className={side} active={active}>
        <StyledIcon src={icon} alt="Icone" />
        <StyledTitleCard>{label}</StyledTitleCard>
        <StyledTextCard>{description}</StyledTextCard>
      </StyledFixedContent>
    </StyledProcessCard>
  );
};

export default Card;
