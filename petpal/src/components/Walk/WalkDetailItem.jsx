import React from 'react';
import {
  InfoGroup,
  InfoSpan,
  ItemListContainer,
} from '../Common/Layout/LayoutStyle';
import {
  Divider,
  PostBottom,
  PostContent,
  PostImage,
  PostTop,
} from './WalkDetailItemStyle';
import Button from '../Common/Button/SubmitButton/Button';
import UserInfo from '../Common/Userinfo/UserInfo';
import { LikeAndChat } from './WalkItemStyle';
import { ChatImg, LikeImg } from '../Common/SpanImg/SpanImgStyle';
import Comment from '../Common/Comment/Comment';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

// export default function WalkDetailItem({ location, walkDetailItem }) {
// 컴포넌트 분리 및 재사용 고려해서 다시 수정 예정 -> 산책, 돌보미 재사용
export default function WalkDetailItem({ walkDetailItem }) {
  // const post = walkDetailItem.post[0];

  // console.log(post.author);
  // console.log(post.author.image);
  // console.log(post.author);
  // console.log(post[0].content);

  // console.log(location);
  // console.log(post);
  // console.log(index);

  // console.log(post[index]);
  const img = 'images/exDogImg.jpg';

  const comments = [
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
    {
      num: 1,
      like: 1,
    },
  ];

  return (
    <ComponentLayout>
      <ItemListContainer>
        <PostTop>
          <UserInfo img={img} username={walkDetailItem.author.username} />
          <Button
            type="button"
            children="채팅하기"
            size="xs"
            variant="primary"
          />
        </PostTop>
        {/* {walkDetailItem.image && <PostImage src={img} alt="Post" />} */}
        <PostImage src={walkDetailItem.image} alt="Post" />
        <PostBottom>
          <LikeAndChat>
            <InfoGroup className="likeAndChat">
              <LikeImg like={walkDetailItem.hearted} />
              <InfoSpan>{walkDetailItem.heartCount}</InfoSpan>
            </InfoGroup>
            <InfoGroup className="likeAndChat">
              <ChatImg />
              <InfoSpan>{walkDetailItem.commentCount}</InfoSpan>
            </InfoGroup>
          </LikeAndChat>
          <PostContent>{walkDetailItem.content}</PostContent>
        </PostBottom>
        <Divider />
        <Comment comments={comments} />
      </ItemListContainer>
    </ComponentLayout>
  );
}