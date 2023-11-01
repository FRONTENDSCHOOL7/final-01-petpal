import { tokenInstance } from './axiosInstance';

/* 내 게시글 가져오기 */
export const getMyPost = async accountname => {
  const response = await tokenInstance.get(
    `/post/${accountname}/userpost/?limit=Number&skip=Number`,
  );
  return response;
};

export const uploadPost = async post => {
  const response = await tokenInstance.post(`/post`, post);
  return response;
};
