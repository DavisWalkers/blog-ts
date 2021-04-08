import { Post } from "../../types/post";

export const myPostsSelector = (state: any) => state.posts.filter((post: Post) => post.id >= 10000);