import styled from "styled-components";

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Logo = styled.button`
    margin-top: 16px;
    margin-bottom: 20px;
    background: none;
    background-image: url("/asset/image/Logo.png");
    background-repeat: no-repeat;
    width: 120px;
    height: 40px;
    border: none;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Icons = styled.button`
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;
