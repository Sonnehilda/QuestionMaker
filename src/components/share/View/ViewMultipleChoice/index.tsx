import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding-top: 3vh;
  padding-bottom: 3vh;

  background-color: #fff;

  width: 90vh;

  @media screen and (max-device-width: 640px) {
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  z-index: 2;
`;

const LeaveWrapper = styled.div`
  width: 76vh;
  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 1.5vh;
  padding-bottom: 0.5vh;

  width: 76vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  font-size: 3vh;
  font-weight: 600;
  text-align: center;

  border-bottom: 0.1vh solid #aaa;
`;

interface OptionProps {
  isRevealed: boolean;
  contents: string;
}

const Option = styled.input<OptionProps>`
  all: unset;

  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  margin-top: 1.5vh;

  width: 76vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: background-color 0.25s;

  :before {
    content: "${(props) => props.contents.replaceAll("@ANSWER", "")}";
  }

  :first-child {
    margin-top: 0;
  }

  :hover {
    background-color: #f6f6f6;
  }
  :checked {
    ${(props) =>
      props.isRevealed
        ? props.contents.includes("@ANSWER")
          ? "background-color: #aaffaa; filter: drop-shadow(0 0 0.55vh #aaffaa);"
          : "background-color: #ffaaaa; filter: drop-shadow(0 0 0.55vh #ffaaaa);"
        : "background-color: #ffdd00;"}
  }
`;

const Button = styled.button`
  all: unset;

  background-color: #e5e5e5;

  margin-top: 1.5vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;

  width: 76vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: background-color 0.25s, filter 0.25s;

  :hover {
    background-color: #d4d4d4;
    filter: drop-shadow(0 0 0.25vh #c3c3c3);
  }
`;

interface McViewProps {
  questionName: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const McView = ({ questionName, setViewState }: McViewProps) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const revealRef = useRef<HTMLButtonElement>(null);

  const question: string[] = JSON.parse(
    localStorage.getItem(questionName) || ""
  );

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        revealRef.current?.focus();
      }
      if (e.key === "Escape") {
        setViewState("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <LeaveWrapper>
        <Leave onClick={() => setViewState("")}>← Close</Leave>
      </LeaveWrapper>
      <Wrapper>
        <Title>{question[0]}</Title>
      </Wrapper>
      <Wrapper>
        {
          // eslint-disable-next-line array-callback-return
          question.map((v, i) => {
            if (i > 0)
              return (
                <Option
                  key={i}
                  type="checkbox"
                  disabled={isRevealed}
                  isRevealed={isRevealed}
                  contents={v}
                />
              );
          })
        }
      </Wrapper>
      <Button ref={revealRef} onClick={() => setIsRevealed(!isRevealed)}>
        {isRevealed ? "Hide Answer" : "Reveal Answer"}
      </Button>
    </Background>
  );
};

export default McView;
