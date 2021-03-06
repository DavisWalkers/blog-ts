import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postsActions } from '../../../redux/slices/postsSlice';
import { deleteItemFromLS } from '../../../utils/localStorage';
import { store as notificationStore } from 'react-notifications-component';
import { ButtonElement } from '../../../common/Button/styles';

export const DeletePostButton = (props: any) => {
  const id = props.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      dispatch(postsActions.removePost(id));
      deleteItemFromLS(id);
      history.push('/my-posts');

      notificationStore.addNotification({
        title: "Successfully",
        message: "Post deleted!",
        type: "info",
        insert: "top",
        container: "top-left",
        dismiss: {
          duration: 3000,
          onScreen: false
        }
      });
    }
  };
  
  return (
    <ButtonElement type='button' onClick={handleClick}>
      Delete post
    </ButtonElement>
  );
};