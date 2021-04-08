import { useEffect, useRef } from 'react';
import { Loader } from '../../../common/Loader';
import { Container } from './styles';

export const LoadMore = (props: any) => {
  const setObserver = props.setObserver;
  const observer = props.observer;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setObserver(observer, ref.current);
  }, []);

  return (
    <Container ref={ref}>
      <Loader />
    </Container>
  );
};