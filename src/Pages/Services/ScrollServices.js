import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useResize';

export default function ScrollToServices() {
  const { pathname } = useLocation()

  const [width] = useWindowSize();

  useEffect(() => {
    if (width < 900) {
      window.scrollTo({ top: 750, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 1250, left: 0, behavior: 'smooth' });
    }
  },[width])
  return null;


}