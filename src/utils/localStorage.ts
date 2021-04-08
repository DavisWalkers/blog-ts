import { Post } from "../types/post";

const PAGE = 'my-posts';

const addToLS = (posts: Post[]) => {
  localStorage.setItem(PAGE, JSON.stringify(posts));
};

const getFromLS = () => {
  const item = localStorage.getItem(PAGE) ?? '';
  return JSON.parse(item);
};

const deleteLS = () => {
  localStorage.removeItem(PAGE);
};

const deleteItemFromLS = (id: number) => {
  const posts = getFromLS();
  const newPosts = posts.filter((post: Post) => {
    return post.id !== id;
  });
  deleteLS();
  addToLS(newPosts);
};

const uppendLS = (post: Post) => {
  const posts = getFromLS();
  deleteLS();
  posts.push(post);
  addToLS(posts);
};

const setLS = () => {
  localStorage.setItem(PAGE, JSON.stringify([]));
};

const updateLS = (post: Post) => {
  const posts = getFromLS();
  deleteLS();
  const newPosts = posts.map((element: Post) => {
    if (element.id === post.id) {
      return post;
    } else {
      return element;
    }
  });
  addToLS(newPosts);
};

export {
  addToLS,
  getFromLS,
  deleteLS,
  uppendLS,
  setLS,
  deleteItemFromLS,
  updateLS
};