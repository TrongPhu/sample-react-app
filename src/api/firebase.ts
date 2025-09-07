import { sendPost } from './axios';

export const regisToken = (payload: any) =>
  sendPost('/fcm/regist-token', payload).then((res) => res?.data);
