import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postsSelector } from '../../redux/selectors/postsSelector';
import { isFetchingSelector } from '../../redux/selectors/isFetchingSelector';
import { Loader } from '../Loader';
import {
  Card,
  Wrapper,
  ImageWrapper,
  Image,
  Header,
  Description,
  Separator
} from './styles';

export const BigArticle = () => {
  const isFetching = useSelector(isFetchingSelector);
  const posts = useSelector(postsSelector);
  const bigPost = posts ? posts[0] : { title: '', body: '', id: 0 };
  const url = `/post/${bigPost.id}`;
  
  return (
    <Card>
      <Link to={url}>
        <Wrapper>
          <ImageWrapper>
            {!!isFetching && <Loader />}
            {!isFetching && <Image 
              src={bigPost.img}
              alt='Post visual content'
            />}
          </ImageWrapper>
          <Header>
            {bigPost.title}
          </Header>
          <Description>
            {bigPost.body}
          </Description>
          <Separator />
        </Wrapper>
      </Link>
    </Card>
  );
};