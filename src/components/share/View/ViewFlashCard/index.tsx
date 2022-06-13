import { useEffect, useState } from "react";
import styled from "styled-components";

interface BackgroundProps {
  isRevealed: boolean;
}

const Background = styled.div<BackgroundProps>`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 3vh;
  padding-top: 1.5vh;
  padding-bottom: 7.5vh;

  background-color: #fff;

  width: 75vh;
  height: 40vh;

  @media screen and (max-device-width: 640px) {
    width: 90vw;
    height: 50vh;
  }

  list-style: none;
  box-sizing: border-box;
  perspective: 100vh;
  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  z-index: 2;

  ${(props) =>
    props.isRevealed === true && "> div { transform: rotateY(180deg); }"}
`;

const SubWrapper = styled.span`
  width: 69vh;
  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  display: inline-flex;
  justify-content: space-between;
`;

const Leave = styled.h3`
  all: unset;

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

const Delete = styled.h3`
  all: unset;

  color: #f66;
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
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s, color 0.25s;
  transform-style: preserve-3d;
  cursor: pointer;

  :hover {
    color: #aaa;
  }

  h1 {
    width: 69vh;
  }
`;

const Face = styled.div`
  position: absolute;

  width: 100%;
  height: 30vh;

  @media screen and (max-device-width: 640px) {
    height: 40vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;

  transform: rotateY(180deg);

  width: 100%;
  height: 30vh;

  @media screen and (max-device-width: 640px) {
    height: 40vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5vh;
  backface-visibility: hidden;
`;

const Title = styled.h1`
  all: unset;

  font-size: 3vh;
  font-weight: 600;
  text-align: center;
  word-break: break-all;
`;

const SubTitle = styled.h3`
  all: unset;

  width: 100%;

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
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const question: string[] = JSON.parse(
    localStorage.getItem(questionName) || ""
  );

  const deleteQuestion = () => {
    const total: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredTotal = total.filter((v) => {
      return v !== questionName;
    });
    const fc: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredFC = fc.filter((v) => {
      return v !== questionName;
    });
    localStorage.setItem("Total", JSON.stringify(filteredTotal));
    localStorage.setItem("FC", JSON.stringify(filteredFC));
    localStorage.removeItem(questionName);

    setViewState("");
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setViewState("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background isRevealed={isRevealed}>
      <SubWrapper>
        <Leave onClick={() => setViewState("")}>← Close</Leave>
        <Delete onClick={() => deleteQuestion()}>✕ Delete</Delete>
      </SubWrapper>
      <Card onClick={() => setIsRevealed(!isRevealed)}>
        <Face>
          <Title>{question[0]}</Title>
        </Face>
        <Back>
          <Title>{question[1]}</Title>
        </Back>
      </Card>
      <SubTitle>Click To Check Card {isRevealed ? "Face" : "Back"}.</SubTitle>
    </Background>
  );
};

export default FcView;
