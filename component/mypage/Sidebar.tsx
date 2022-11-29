import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { useGetLogin } from "../../api/hooks/useGetLogin";
import Link from "next/link";
import { setPutPush, useGetPush } from "../../api/hooks/useStting";

const Container = styled.div`
  background-color: #3c6c54;
  border-radius: 30px 0 0 30px;
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  padding-left: 0;
  border: solid 3px white;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 70%;
    border-radius: 15px 0 0 15px;
  }
`;

const IndexDiv = styled.div`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const Index = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  width: ${(props) => (props.back ? "50px" : "100%")};
  filter: ${(props) =>
    props.back
      ? "invert(100%) sepia(100%) saturate(2%) hue-rotate(235deg) brightness(115%) contrast(101%)"
      : "transparent"};
  padding: 15px;
  font-size: 22px;
  margin: 0 auto 0 5px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CloseIcon = styled.img`
  width: 50px;
  transform: scaleX(-1);
  cursor: pointer;
`;
const Ul = styled.ul`
  padding-left: 0;
`;
const Li = styled.li`
  padding: 0 10px 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Hr = styled.hr`
  border: dashed 2px white;
  margin: 0;
`;

const Img = styled.img`
  margin-top: -5px;
  width: 65px;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #191c21;
`;

const Sidebar = (props) => {
  const router = useRouter();
  const isUserToggleOpen = useGetPush();
  const [toggleValue, setToggleValue] = useState(isUserToggleOpen);
  const toggleHandler = () => setToggleValue(!toggleValue);
  useEffect(() => {
    setPutPush(toggleValue);
  }, [toggleValue]);
  return (
    <>
      {/*Background : 배경 블러처리 겸, 아무 곳이나 눌러도 사이드바 해제하는 역할*/}
      <Background onClick={props.menu} />
      <Container>
        <Index back>
          <CloseIcon src="/assets/image/icons/close.png" onClick={props.menu} />
        </Index>
        <Ul>
          <Li>
            <Img src="/assets/image/character/face_heart_white.png" />
            <Index>알림설정</Index>
            <Switch
              onChange={toggleHandler}
              checked={toggleValue}
              className="react-switch"
            />
          </Li>
          <Hr />
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index
                onClick={() => {
                  router.push("https://pf.kakao.com/_wDRPxj");
                }}
              >
                Contact to Us
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index onClick={useGetLogin}>로그아웃</Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>
                <StyledLink
                  href={process.env.NEXT_PUBLIC_FRONT_URL + `/onboarding`}
                >
                  스토리 다시보기
                </StyledLink>
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>v.1.0.0</Index>
            </Li>
            <Hr />
          </IndexDiv>
        </Ul>
      </Container>
    </>
  );
};
export default Sidebar;