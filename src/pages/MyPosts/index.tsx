import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { myPostsSelector } from '../../redux/selectors/myPostsSelector';
import { ArticlesLayout } from '../../common/ArticlesLayout';
import { Section, Container, Header, Description } from './styles';

export const MyPosts = () => {
  const myPostsLength = useSelector(myPostsSelector).length;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
 
  return (
    <Section>
      <Container>
        <Header>My Posts</Header>
        {(myPostsLength > 0) && <ArticlesLayout isAll='false' />}
        {(myPostsLength === 0) && <Description>There is nothing...</Description>}
      </Container>
    </Section>
  )
};