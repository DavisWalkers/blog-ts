import { Articles } from '../../pages/Articles';
import {
  Switch,
  Route
} from 'react-router-dom';
import { PostPage } from '../../pages/PostPage';
import { Write } from '../../pages/Write';
import { MyPosts } from '../../pages/MyPosts';
import { NotFound } from '../../pages/NotFound';
import { EditPost } from '../../pages/EditPost';
import { ButtonScrollTop } from '../ButtonScrollTop';
import { MainElement } from './styles';

export const Main = () => {
  return (
    <MainElement>
      <Switch>
        <Route exact path='/'>
          <Articles />
        </Route>
        <Route path='/post/:id'>
          <PostPage />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/my-posts'>
          <MyPosts />
        </Route>
        <Route path='/edit-post/:id'>
          <EditPost />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <ButtonScrollTop />
    </MainElement>
  );
};