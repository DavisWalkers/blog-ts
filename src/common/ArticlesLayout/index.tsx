import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle';
import { postsSelector } from '../../redux/selectors/postsSelector';
import { myPostsSelector } from '../../redux/selectors/myPostsSelector';
import { Post } from '../../types/post';
import { Container } from './styles';

export const ArticlesLayout = (props: any) => {
  const isAll = (props.isAll === 'true');
  const allPosts = useSelector(postsSelector).slice(1);
  const myPosts = useSelector(myPostsSelector);
  const posts = isAll ? allPosts : myPosts;

  return (
    <Container>
      {posts.map((value: Post, index: number) => {
        return <SmallArticle key={index} id={value.id} data={value} />
      })}
    </Container>
  );
};