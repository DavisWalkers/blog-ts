
import { useDispatch } from 'react-redux';
import { createPostObjects } from '../../utils/createPostObject';
import { uppendLS } from '../../utils/localStorage';
import { Formik } from 'formik';
import { postsActions } from '../../redux/slices/postsSlice';
import { store as notificationStore } from 'react-notifications-component';
import { useHistory } from 'react-router';
import { formSchema } from './utils/formSchema';
import { Container, ErrorTitle, Form, Header, Section, ErrorBody, Button, StyledInput } from './styles';

export const Write = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const createPost = (title: string, body: string) => {
    const id = Math.floor(Math.random() * 1000000) + 10000;
    const post = createPostObjects(id, title, body);

    dispatch(postsActions.addPost(post));
    uppendLS(post);

    history.push('/my-posts');

    notificationStore.addNotification({
      title: "Successfully",
      message: "Post added!",
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

  return (
    <Section>
      <Container>
        <Header>Tell us your thoughts</Header>
        <Formik 
          initialValues={{ title: '', body: '' }}
          validationSchema={formSchema}
          onSubmit={(values, { resetForm }) => {
            createPost(values.title, values.body);
            resetForm({});
          }}
        >
        {({
         values,
         errors,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
          <Form onSubmit={handleSubmit}>
            {errors.title && 
              <ErrorTitle>
                {errors.title}
              </ErrorTitle>}
            <StyledInput
              placeholder='Title'
              id='title'
              name='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              placeholder='Body'
              minRows={6}
              id='body'
              name='body'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            {errors.body && 
              <ErrorBody>
                {errors.body}
              </ErrorBody>}
            <Button  
              type='submit' 
              disabled={isSubmitting}
            >
              Post
            </Button>
          </Form>)}
        </Formik>
      </Container>
    </Section>
  );
};