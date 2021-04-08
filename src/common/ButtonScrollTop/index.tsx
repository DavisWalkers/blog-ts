import React, { useEffect, useState } from 'react';
import { Container, Icon } from './styles';

export const ButtonScrollTop = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setScrollListener = () => {
    if (window.pageYOffset > 300) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setScrollListener);
    return () => {
      window.removeEventListener('scroll', setScrollListener);
    };
  }, []);

  return (
    <React.Fragment>
      {!!visibility && 
        <Container onClick={handleClick}>
          <Icon></Icon>
        </Container>}
    </React.Fragment>
  );
};