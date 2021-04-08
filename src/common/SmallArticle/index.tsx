import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isFetchingSelector } from '../../redux/selectors/isFetchingSelector';
import { Loader } from '../Loader';
import { Card, Header, Image, ImageWrapper, MyPost, Wrapper } from './styles';

export const SmallArticle = (props: any) => {
  const data = props.data;
  const id = props.id;
  const isFetching = useSelector(isFetchingSelector);
  const isUserPost = id >= 10000;
  const url = `/post/${id}`;
 
  return (
    <Card>
      <Link to={url}>
        <Wrapper>
          <ImageWrapper>
            {!!isFetching && <Loader />}
            {!isFetching && 
              <Image 
                src={data.img}
                alt='Post visual content'
              />}
          </ImageWrapper>
          <Header>
            {data.title}
          </Header>
          {!!isUserPost && <MyPost>My post</MyPost>}
        </Wrapper>
      </Link>
    </Card>
  );
};