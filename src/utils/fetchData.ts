import { Post } from '../types/post';

export const fetchData = async (page: number) => {
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  const data = await response.json();
  const posts: Post[] = data.data.map((element: any) => {
    return {
      id: element.id,
      title: element.title,
      body: element.body,
      img: `https://picsum.photos/500/800?sig=${element.id}`
    } 
  });
  return posts;
};