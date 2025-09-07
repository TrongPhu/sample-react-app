import { message } from 'antd';

export const getErrorMessage = (error: any) => {
  return error?.response?.data?.data[0].message || 'Something went wrong!';
};

export const handleErrorMessage = (error: any, messageText?: string) => {
  message.config({
    top: 80,
    prefixCls: 'zm-ant-message',
  });
  message.destroy();
  message.error(messageText || getErrorMessage(error));
};

export const handleSuccessMessage = (messageText: string) => {
  message.config({
    top: 80,
    prefixCls: 'zm-ant-message',
  });
  message.destroy();
  message.success(messageText);
};

export const handleErrorMessageWithI18n = (errorCode: string) => {
  message.config({
    top: 80,
    prefixCls: 'zm-ant-message',
  });
  message.destroy();
  message.error(errorCode);
};
