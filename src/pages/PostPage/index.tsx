import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { postsSelector } from "../../redux/selectors/postsSelector";
import { isFetchingSelector } from "../../redux/selectors/isFetchingSelector";
import { DeletePostButton } from "./DeletePostButton";
import { Loader } from "../../common/Loader";
import { Post } from "../../types/post";
import { Container, Section, ImageWrapper, Image, Header, Description, Separator, ButtonsWrapper, WrapperSeparator } from "./styles";
import { ButtonElement } from "../../common/Button/styles";


export const PostPage = () => {
  const posts = useSelector(postsSelector);
  const params: any = useParams();
  const id = parseInt(params['id']);
  const isFetching = useSelector(isFetchingSelector);
  const isUserPost = id >= 10000;
  const urlEdit = `/edit-post/${id}`;
  let currentPost = isFetching ? posts[0] : posts.filter((post: Post) => post.id === id)[0];

  if (!currentPost) {
    currentPost = { title: 'No such post', body: '', img: '' };
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Section>
      <Container>
        <ImageWrapper>
          {!!isFetching && <Loader />}
          {!isFetching && 
            <Image
              src={currentPost.img}
              alt='Post visual content'
            />}
        </ImageWrapper>
        <Header>
          {currentPost.title}
        </Header>
        <Description>
          {currentPost.body}  
        </Description>
        <Separator />
        {!!isUserPost && 
          <ButtonsWrapper>
            <DeletePostButton id={id} />
            <WrapperSeparator />
            <Link to={urlEdit}>
              <ButtonElement>
                Edit post
              </ButtonElement>
            </Link>
          </ButtonsWrapper>}
      </Container>
    </Section>
  );
};