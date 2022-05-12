import styled from "styled-components";
import { Link } from "react-router-dom";
import { mc, sa, tf, fc } from "../../assets/images";

const Background = styled.div`
  background-color: #f6f6f6;

  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  margin-top: 3vh;

  width: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface CardProps {
  image: string;
}

const Card = styled(Link)<CardProps>`
  all: unset;

  padding-left: 2.5vh;
  padding-right: 2.5vh;

  width: 15vh;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  filter: drop-shadow(0 0 0.5vh #ccc);
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 1vh #fff) brightness(110%);
  }

  :before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: -4.5vh;
    ${(props) => props.image === mc && `background-position: -18vh;`}
    ${(props) => props.image === tf && `background-position: -9vh;`}
    ${(props) => props.image === fc && `background-position: -9.5vh;`}
    background-repeat: no-repeat;

    content: "";
    filter: brightness(85%) blur(0.5vh);
    transition: filter 0.25s;
  }

  :hover::before {
    filter: brightness(90%) blur(0.25vh);
  }
`;

const MenuTitle = styled.div`
  font-size: 4vh;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  color: #fff;
  font-size: 3vh;
  font-weight: 100;
  text-align: center;

  filter: drop-shadow(0 0 0.25vh #000);
`;

interface MenuProps {
  animation: string;
  duration: string;
}

const Menu = ({ animation, duration }: MenuProps) => {
  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <MenuTitle>Choose Question's Type</MenuTitle>
      <CardWrapper>
        <Card to="/make/mc" image={mc}>
          <Title>Multiple Choice Question</Title>
        </Card>
        <Card to="/make/sa" image={sa}>
          <Title>Short Answer Question</Title>
        </Card>
        <Card to="/make/tf" image={tf}>
          <Title>True or False Question</Title>
        </Card>
        <Card to="/make/fc" image={fc}>
          <Title>Flash Card</Title>
        </Card>
      </CardWrapper>
    </Background>
  );
};

export default Menu;
