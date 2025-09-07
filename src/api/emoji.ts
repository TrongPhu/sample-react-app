import { sendGet, sendPost } from './axios';

export const getListEmoji = () =>
  sendGet('/conversations/get-emoji').then((res) => res?.data);

export const reactEmoji = (messageId: string, payload: any) =>
  sendPost(`/conversations/reaction/${messageId}`, payload).then(
    (res) => res?.data
  );
