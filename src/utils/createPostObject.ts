import { Post } from "../types/post";

export function createPostObjects(id: number, title: string, body: string): Post {
  return {
    id,
    title,
    body,
    img: `https://picsum.photos/500/800?sig=${id}`
  };
};