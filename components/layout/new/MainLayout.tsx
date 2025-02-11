import styled from "styled-components";
import Snow from "../Snow";
import Header from "./Header";
import Gnb from "./GNB";
import { ShareLink } from "../../share/ShareLink";
import { QuestionLink } from "../../share/QuestionLink";
import SettingSideBar from "../../setting/SettingSideBar";
import Banner from "../../common/Banner";

const Layout = ({ children = null }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Buildings src={"/asset_ver2/image/layout/forest_background.png"} />
        <UpperWrapper>
          <Banner />
          {children}
        </UpperWrapper>
        <Ground />
      </MainWrapper>
      <SettingSideBar />
      <Snow />
      <QuestionLink />
      <ShareLink />
      <Gnb />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: #1c3249;
  position: absolute;
  width: 100%;
  height: 100%;
  top: env(safe-area-inset-top);
  bottom: env(safe-area-inset-bottom);
`;

const MainWrapper = styled.div`
  height: calc(100dvh - 150px);
  background-color: #1c3249;
  position: relative;

  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const AbsoluteImg = styled.img`
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom) + 17vh);
  left: 50%;
  transform: translateX(-50%);
`;

const Buildings = styled(AbsoluteImg)`
  height: 25vh;
`;
const Ground = styled.div`
  position: absolute;
  width: 100%;
  height: 17vh;
  bottom: env(safe-area-inset-bottom);
  background-color: #d9e2ed;
`;
