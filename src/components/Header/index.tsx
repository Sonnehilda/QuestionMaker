import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.header`
  background-color: #fff;

  width: 100%;
  height: 6vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link)`
  all: unset;

  margin-bottom: 0.4vh;

  font-size: 3vh;
  font-weight: 100;

  @media screen and (max-device-width: 640px) {
    font-size: 2.5vh;
  }

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 0.5vh #b0933b) brightness(125%);
  }

  :link {
    color: #666;
  }
  :visited {
    color: #666;
  }

  span {
    color: #daa500;
    font-weight: 600;
  }
`;

const Contents = styled(Link)`
  all: unset;

  margin-left: 2.5vh;
  margin-right: 2.5vh;
  margin-bottom: 0.175vh;

  color: #666;
  font-size: 2vh;
  font-weight: 100;

  @media screen and (max-device-width: 640px) {
    margin-left: 0.75vh;
    margin-right: 0.75vh;
  }

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 0.25vh #aaa) brightness(90%);
  }

  :link {
    color: #666;
  }
  :visited {
    color: #666;
  }

  :nth-child(2) {
    margin-left: 5vh;
  }

  @media screen and (max-device-width: 640px) {
    :nth-child(2) {
      margin-left: 2vh;
    }
  }

  :nth-child(2n) {
    color: #333;
  }

  :nth-child(2n + 1) {
    color: #666 !important;
  }
`;

const LeftContents = styled.div`
  margin-left: 2.5vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Background>
      <LeftContents>
        <Title to="/">
          <span>Q</span>uestion <span>M</span>aker
        </Title>
        <Contents to="/make">Make Questions</Contents>
        <Contents to="/review">Saved Questions</Contents>
        <Contents to="/about">About</Contents>
      </LeftContents>
    </Background>
  );
};

export default Header;
