import React from 'react';
import Post from '../../components/Common/Post/Post';

export default function WalkPostPage({ id, placeholder }) {
  return (
    <>
      <Post
        title="산책메이트"
        id="PostContent"
        placeholder="게시글 입력하기..."
      />
    </>
  );
}