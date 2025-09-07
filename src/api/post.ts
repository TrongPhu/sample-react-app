import { sendGet, sendPost } from "./axios";

export const getPosts = (params: any) =>
sendGet(`/posts`, params).then((res) => {
  return res?.data;
});

export const getDetailPost = (idPost: any) =>
sendGet(`/posts/${idPost}`).then((res) => {
  return res?.post;
});

export const createPost = (payload: any) =>
  sendPost('/posts', payload).then((res) => res?.data);