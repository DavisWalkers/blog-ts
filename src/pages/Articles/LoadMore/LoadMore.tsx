import { useEffect, useRef } from 'react';
import './LoadMore.scss';
import { Loader } from '../../../common/Loader/Loader';

export const LoadMore = (props: any) => {
  const setObserver = props.setObserver;
  const observer = props.observer;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setObserver(observer, ref.current);
  }, []);

  return (
    <div ref={ref} className='load-more'>
      <Loader />
    </div>
  );
};