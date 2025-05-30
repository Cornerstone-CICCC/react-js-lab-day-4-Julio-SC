// src/store/post.store.ts
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";


export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};


type PostStore = {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  updatePost: (id: string, title: string, content: string) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => Post | undefined;
};

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],

  addPost: (title, content) => {
    const newPost: Post = {
      id: uuidv4(),
      title,
      content,
      published: true,
    };
    set((state) => ({ posts: [...state.posts, newPost] }));
  },

  updatePost: (id, title, content) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, title, content } : post
      ),
    }));
  },

  deletePost: (id) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },

  getPostById: (id) => {
    return get().posts.find((post) => post.id === id);
  },
}));
