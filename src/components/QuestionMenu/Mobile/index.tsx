import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  background-color: #f6f6f6;

  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  width: 100vw;

  display: none;

  @media screen and (max-device-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardWrapper = styled.div`
  margin-top: 3vh;

  width: 70vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled(Link)`
  all: unset;

  margin-bottom: 3vh;

  width: 100%;
  height: 7.5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  filter: drop-shadow(0 0 0.5vh #a1a1a1);

  :last-child {
    margin-bottom: 0;
  }
`;

const MenuTitle = styled.div`
  font-size: 4vh;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2.5vh;
  font-weight: 100;
  text-align: center;
`;

const QuestionMenuMobile = () => {
  return (
    <Background>
      <MenuTitle>Choose Question Type</MenuTitle>
      <CardWrapper>
        <Card to="/make/mc">
          <Title>Multiple Choice Question</Title>
        </Card>
        <Card to="/make/sa">
          <Title>Short Answer Question</Title>
        </Card>
        <Card to="/make/tf">
          <Title>True or False Question</Title>
        </Card>
        <Card to="/make/fc">
          <Title>Flash Card</Title>
        </Card>
      </CardWrapper>
    </Background>
  );
};

export default QuestionMenuMobile;
