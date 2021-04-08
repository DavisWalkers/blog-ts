import { useSelector } from 'react-redux';
import { SmallArticle } from '../SmallArticle/SmallArticle';
import { postsSelector } from '../../redux/selectors/postsSelector';
import { myPostsSelector } from '../../redux/selectors/myPostsSelector';
import './ArticlesLayout.scss';
import { Post } from '../../types/post';

export const ArticlesLayout = (props: any) => {
  const isAll = (props.isAll === 'true');
  const allPosts = useSelector(postsSelector).slice(1);
  const myPosts = useSelector(myPostsSelector);
  const posts = isAll ? allPosts : myPosts;

  return (
    <div className='articles-layout'>
      {posts.map((value: Post, index: number) => {
        return <SmallArticle key={index} id={value.id} data={value} />
      })}
    </div>
  );
};