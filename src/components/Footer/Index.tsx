import styled from "styled-components";

const Background = styled.footer`
  background-color: rgba(0, 0, 0, 0.025);

  margin-top: 6vh;

  width: 100vw;
  height: 6vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Copyright = styled.div`
  position: relative;
  right: 0.5vh;

  padding-left: 1vh;
  padding-right: 1vh;

  font-size: 1.5vh;
  font-weight: 100;
`;

const Footer = () => {
  return (
    <Background>
      <Copyright>ⓒ 2022 __Rals All rights reserved.</Copyright>
    </Background>
  );
};

export default Footer;
