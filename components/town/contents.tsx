import styled from "styled-components";
import Image from "next/image";
import { BoardData } from "../../util/type";
import ThumbsUp from "./thumbs-up";
import Report from "./report";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { useState } from "react";
import { useRouter } from "next/router";

interface IContentTemplate {
  contents: BoardData[];
  isPopular?: boolean;
}

const Contents = ({ contents, isPopular = false }: IContentTemplate) => {
  const [blurredId, setBlurredId] = useState(null);
  const router = useRouter();
  const { storeUserData } = useAuthContext();
  const isMyContent = (content) => content.writerId === storeUserData.id;
  const handleSetBlurredId = (boardId) => setBlurredId(boardId);
  const handleClickProfile = (content) => {
    if (content.isAnonymous) return;
    if (confirm(`${content.writerName}님의 캘린더로 이동하시겠어요?`)) {
      router.push(`/${content.invitationLink}`);
    }
  };

  return (
    <>
      {contents.map((content) => {
        return blurredId === content.boardId || content.isBlur ? (
          <BlurWrapper key={content.boardId}>
            🚨신고한 게시글입니다.🚨 검토 후 삭제처리할게요.
          </BlurWrapper>
        ) : (
          <ContentWrapper key={content.boardId}>
            {/* 댓글 Header 시작 ------ */}
            <Flex justifyContent={"space-between"}>
              <NameWrapper>
                {isPopular && (
                  <Image
                    alt="best"
                    src="/asset_ver2/image/town/best.svg"
                    width={35}
                    height={18}
                  />
                )}
                <Name>{content.isAnonymous ? "익명" : content.writerName}</Name>
                <CreatedAt>({content.createdAt})</CreatedAt>
              </NameWrapper>
              {!isMyContent(content) && (
                <Report
                  boardId={content.boardId}
                  writerId={content.writerId}
                  handleSetBlurredId={handleSetBlurredId}
                />
              )}
            </Flex>
            {/* 댓글 Header 끝 -------- */}
            {/* 댓글 Body 시작 ------ */}
            <Flex padding={"0 0 20px 0"}>
              <CircularImage
                alt="profile"
                src={
                  content.isAnonymous
                    ? "/asset_ver2/image/common/default-profile.png"
                    : content.profile
                }
                width={44}
                height={44}
              />
              {!content.isAnonymous && (
                <GoCalendar
                  alt="go-profile"
                  src={"/asset_ver2/image/town/go-profile.svg"}
                  width={20}
                  height={20}
                  onClick={() => handleClickProfile(content)}
                />
              )}
              <Content>{content.contents}</Content>
              {/* 댓글 Body 끝 -------- */}
            </Flex>
            <ThumbsUp
              isLiked={content.isLiked}
              boardId={content.boardId}
              isMyComment={isMyContent(content)}
              likeCounts={content.likeCounts}
            />
          </ContentWrapper>
        );
      })}
    </>
  );
};

export default Contents;

const GoCalendar = styled(Image)`
  position: absolute;
  top: 60px;
  left: 45px;
  cursor: pointer;
`;

const CircularImage = styled(Image)`
  border-radius: 100%;
`;

const ContentWrapper = styled.div`
  flex-shrink: 0;
  font-size: 12px;
  width: 100%;
  padding: 10px 15px;
  height: fit-content;
  min-height: 90px;
  color: #333;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.8);
  backdrop-filter: blur(3px);
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const Content = styled.div`
  word-wrap: break-word;
  overflow: auto;
  flex: 1;
`;

const BlurWrapper = styled(ContentWrapper)`
  height: 90px;
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  color: #333;
  align-items: center;
  padding-bottom: 7px;
`;

const Name = styled.div`
  font-family: "NanumSquareNeoOTF-Bd";
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15vw; /* 최소 너비 설정 */
`;

const CreatedAt = styled.small`
  font-size: 10px;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  padding: ${({ padding }) => padding};
  justify-content: ${({ justifyContent }) => justifyContent || "normal"};
`;