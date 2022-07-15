import styled from "styled-components";
import { Link } from "react-router-dom";
import ActionMenuMobile from "./Mobile";
import { importImage, exportImage } from "../../assets/images";

interface MenuProps {
  animation: string;
  duration: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const ActionMenu = ({ animation, duration, setViewState }: MenuProps) => {
  return (
    <>
      <ActionMenuMobile setViewState={setViewState} />
      <Background data-aos={animation} data-aos-duration={duration}>
        <MenuTitle>Choose Action Type</MenuTitle>
        <CardWrapper>
          <Card
            to="/make"
            image={importImage}
            onClick={() => setViewState("Import")}
          >
            <Title>Import Question</Title>
          </Card>
          <Card
            to="/make"
            image={exportImage}
            onClick={() => setViewState("Export")}
          >
            <Title>Export Question</Title>
          </Card>
        </CardWrapper>
      </Background>
    </>
  );
};

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

  @media screen and (max-device-width: 640px) {
    display: none;
  }
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
  padding-top: 18vh;

  width: 15vh;
  height: 12vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #333;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  filter: drop-shadow(0 0 0.1vh #ccc);
  transition: filter 0.25s;

  div {
    transition: color 0.25s;
  }

  :hover div {
    color: #fff;
    filter: drop-shadow(0 0 0.25vh #333);
  }

  :before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-image: url(${(props) => props.image});
    background-size: 19.5vh 20vh;
    background-position: 0.25vh 0.5vh;
    background-repeat: no-repeat;

    content: "";

    filter: drop-shadow(0 0 0.5vh #ccc);
  }
`;

const MenuTitle = styled.div`
  font-size: 4vh;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  font-size: 3vh;
  font-weight: 100;
  text-align: center;

  filter: drop-shadow(0 0 0.25vh #000);
`;

export default ActionMenu;
