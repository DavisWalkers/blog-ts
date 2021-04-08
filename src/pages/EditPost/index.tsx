import { Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import { postsSelector } from '../../redux/selectors/postsSelector';
import { createPostObjects } from '../../utils/createPostObject';
import { updateLS } from '../../utils/localStorage';
import { postsActions } from '../../redux/slices/postsSlice';
import { store as notificationStore } from 'react-notifications-component';
import { formSchema } from './utils/formSchema';
import { Post } from '../../types/post';
import { Button, Container, ErrorBody, ErrorTitle, Form, Header, Section, StyledInput } from './styles';

export const EditPost = () => {
  const params: any = useParams();
  const id = parseInt(params['id']);
  const post = useSelector(postsSelector).filter((post: Post) => { 
    return post.id === id;
  })[0];
  const dispatch = useDispatch();
  const history = useHistory();

  const updatePostObject = (title: string, body: string) => {
    const post = createPostObjects(id, title, body);

    dispatch(postsActions.updatePost(post));
    updateLS(post);
    history.push('/my-posts');

    notificationStore.addNotification({
      title: "Successfully",
      message: "Post edited!",
      type: "success",
      insert: "top",
      container: "top-left",
      dismiss: {
        duration: 3000,
        onScreen: false
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Section>
      <Container>
        <Header>Edit post</Header>
        {!!post && 
          <Formik 
            initialValues={{ title: post.title, body: post.body }}
            validationSchema={formSchema}
            onSubmit={values => {
              updatePostObject(values.title, values.body);
            }}
          >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <Form onSubmit={handleSubmit}>
            {errors.title && 
              <ErrorTitle>
                {errors.title}
              </ErrorTitle>}
            <StyledInput
              className='edit-post__input'
              placeholder='Title'
              id='title'
              name='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            >
              {post.title}
            </StyledInput>
            <StyledInput
              className='edit-post__input'
              placeholder='Body'
              id='body'
              minRows={4}
              name='body'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            >
              {post.body}
            </StyledInput>
            {errors.body && 
              <ErrorBody>
                {errors.body}
              </ErrorBody>}
            <Button 
              type='submit' 
            >
              Submit
            </Button>
          </Form>)}
        </Formik>}
        {!post && <Redirect to='/' />}
      </Container>
    </Section>
  );
};