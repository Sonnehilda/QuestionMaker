import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../../Input";
import Switch from "../../../Switch";

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

interface AnswerProps {
  answer: string;
  selected: boolean | undefined;
}

const Answer = styled.div<AnswerProps>`
  ${(props) =>
    props.selected === Boolean(props.answer)
      ? "color: #66ff66;"
      : "color: #ff6666;"}
  font-size: 2vh;
  font-weight: 600;
`;

interface TfViewProps {
  questionName: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const TfView = ({ questionName, setViewState }: TfViewProps) => {
  const [answer, setAnswer] = useState<boolean>();

  const trueRef = useRef<HTMLInputElement>(null);
  const falseRef = useRef<HTMLInputElement>(null);

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
      <LeaveWrapper>
        <Leave onClick={() => setViewState("")}>← Close</Leave>
      </LeaveWrapper>
      <Wrapper>
        <Title>{question[0]}</Title>
      </Wrapper>
      <Wrapper>
        <Switch
          trueRef={trueRef}
          falseRef={falseRef}
          answer={answer}
          setAnswer={setAnswer}
        />
      </Wrapper>
      <Answer selected={answer} answer={question[1]}>
        {answer !== undefined &&
        !(
          trueRef.current?.checked === false &&
          falseRef.current?.checked === false
        )
          ? answer === Boolean(question[1])
            ? "Correct Answer!"
            : "Wrong Answer!"
          : ""}
      </Answer>
    </Background>
  );
};

export default TfView;
