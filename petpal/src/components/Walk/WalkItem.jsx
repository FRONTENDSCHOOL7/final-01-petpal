import React, { useState } from 'react';
import { WalkItemImage, LikeAndChat } from './WalkItemStyle';
import {
  InfoDiv,
  InfoGroup,
  InfoSpan,
  ItemContainer,
  ItemContent,
  ItemContentDiv,
} from '../Common/Layout/LayoutStyle';
import { UserImg, LikeImg, ChatImg } from '../Common/SpanImg/SpanImgStyle';
import { StyledLink } from '../Common/Text/StyledLink';

export default function WalkItem({
  id,
  image,
  content,
  author,
  hearted,
  heartedCount,
  commentCount,
}) {
  // const DetailPath = {
  //   pathname: '/walkDetail/:' + index,
  //   state: { index: index },
  // };
  // console.log(DetailPath.state);

  const [heartedNum, setHeartedNum] = useState(0);
  const [commentNum, setCommentNum] = useState(0);

  if (heartedCount) setHeartedNum(heartedCount);
  if (commentCount) setHeartedNum(commentCount);

  return (
    // <StyledLink to={DetailPath}>
    <StyledLink to={`/walkDetail/${id}`}>
      <ItemContainer>
        <WalkItemImage src={image} alt={content} />
        <ItemContentDiv>
          <ItemContent>{content}</ItemContent>
          {/* 컴포넌트로 분리 예정 -> 산책, 돌보미 재사용 */}
          <InfoDiv>
            <InfoGroup>
              <UserImg user={author} />
              <InfoSpan>{author.username}</InfoSpan>
            </InfoGroup>
            <LikeAndChat>
              <InfoGroup className="likeAndChat">
                <LikeImg like={hearted} />
                <InfoSpan>{heartedNum}</InfoSpan>
              </InfoGroup>
              <InfoGroup className="likeAndChat">
                <ChatImg />
                <InfoSpan>{commentNum}</InfoSpan>
              </InfoGroup>
            </LikeAndChat>
          </InfoDiv>
        </ItemContentDiv>
      </ItemContainer>
    </StyledLink>
  );
}