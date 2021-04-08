import { BigArticle } from '../../common/BigArticle';
import { ArticlesLayout } from '../../common/ArticlesLayout';
import { useEffect, useState } from 'react';
import { LoadMore } from './LoadMore';
import { loadMoreData } from '../../utils/loadMoreData';
import { options } from './utils/observerOptions';
import { ButtonWrapper, Container, Header, Section } from './styles';

export const Articles = () => {
  const [pageNumber, setPageNumber] = useState(2);

  const setObserver = (observer: IntersectionObserver, ref: HTMLDivElement) => {
    observer.observe(ref);
  };
  
  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 1) {
        setPageNumber((prevNumber) => prevNumber + 1);
      }
    });
  };
  
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    loadMoreData(pageNumber);
  }, [pageNumber])

  return (
    <Section>
      <Container>
        <BigArticle />
        <Header>All articles</Header>
        <ArticlesLayout isAll='true' />
        <ButtonWrapper>
          <LoadMore setObserver={setObserver} observer={observer} />
        </ButtonWrapper>
      </Container>
    </Section>
  );
};