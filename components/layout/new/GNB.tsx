import { useRouter } from "next/router";
import styled from "styled-components";
import { useAtom } from "jotai";
import { gnbActivePathAtom, modalStateAtom } from "../../../store/globalState";

const Gnb = () => {
  const router = useRouter();
  const [activePathOption, setActivePathOption] = useAtom(gnbActivePathAtom);
  const [, setShowModal] = useAtom(modalStateAtom);
  const isHome = router.pathname === "/";

  const handleClickOption = (option) => {
    setActivePathOption(option);

    switch (option) {
      case "friends":
        setShowModal({
          label: "friends",
          show: true,
        });
        break;
      case "snowball":
        router.push("/snowball");
        break;
      case "message":
        router.push("/message");
        break;
      case "home":
        router.push(isHome ? "/town" : "/");
        break;
      case "todays-heart":
        router.push("/todays-heart");
        break;
      default:
        break;
    }
  };

  const getImagePath = (option) => {
    const condition = option === "home" ? isHome : activePathOption === option;
    console.log(activePathOption);
    console.log(option);
    return `/asset_ver2/image/layout/gnb/${option}${
      condition ? "-click" : "-default"
    }.svg`;
  };

  return (
    <Wrapper>
      <IconWrapper>
        <Img
          src={getImagePath("friends")}
          onClick={() => handleClickOption("friends")}
        />
        <Img
          src={getImagePath("snowball")}
          onClick={() => handleClickOption("snowball")}
        />
        <Img
          src={getImagePath("home")}
          onClick={() => handleClickOption("home")}
        />
        <Img
          src={getImagePath("message")}
          onClick={() => handleClickOption("message")}
        />
        <Img
          src={getImagePath("todays-heart")}
          onClick={() => handleClickOption("todays-heart")}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: #1a2838;
  z-index: 10;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  background-color: #1a2838;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
