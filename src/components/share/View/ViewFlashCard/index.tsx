import { useEffect } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 3vh;
  padding-bottom: 6vh;

  background-color: #fff;

  width: 75vh;
  height: 25vh;

  list-style: none;
  box-sizing: border-box;
  perspective: 100vh;
  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  z-index: 2;

  :hover > div {
    transform: rotateY(180deg);
  }
`;

const Leave = styled.h3`
  all: unset;

  position: absolute;

  margin-left: 1vh;

  color: #666;
  font-size: 1.5vh;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.25s;
  z-index: 3;

  :link {
    color: #666;
  }
  :visited {
    color: #666;
  }

  :hover {
    filter: brightness(150%);
  }
`;

const Card = styled.div`
  width: 69vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s;
  transform-style: preserve-3d;
`;

const Face = styled.div`
  position: absolute;

  width: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;

  transform: rotateY(180deg);

  width: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
`;

const Title = styled.h1`
  all: unset;

  font-size: 3vh;
  font-weight: 600;
  text-align: center;
`;

const SubTitle = styled.h3`
  all: unset;

  width: 69vh;

  display: flex;
  justify-content: center;

  font-size: 2vh;
  font-weight: 100;
  text-align: center;
`;

interface FcViewProps {
  questionName: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const FcView = ({ questionName, setViewState }: FcViewProps) => {
  const question: string[] = JSON.parse(
    localStorage.getItem(questionName) || ""
  );

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setViewState("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <Background>
      <Leave onClick={() => setViewState("")}>← Close</Leave>
      <Card>
        <Face>
          <Title>{question[0]}</Title>
        </Face>
        <Back>
          <Title>{question[1]}</Title>
        </Back>
      </Card>
      <SubTitle>Hover To Check Card Back.</SubTitle>
    </Background>
  );
};

export default FcView;
