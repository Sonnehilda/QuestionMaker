import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  margin-bottom: 1.5vh;

  width: 76vh;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;

  label {
    position: absolute;

    width: 38vh;
    height: 6vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.5vh;
    font-weight: 100;
  }
`;

const True = styled.input`
  all: unset;

  background-color: #006600;

  width: 38vh;
  height: 6vh;

  border: 0.1vh solid #000;
  border-right: 0.025vh solid #000;
  border-top-left-radius: 0.5vh;
  border-bottom-left-radius: 0.5vh;
  transition: background-color 0.25s;

  :hover {
    background-color: #00aa00;
  }
  :focus {
    background-color: #00aa00;
  }
  :checked {
    background-color: #00ff00;
  }
`;
const False = styled.input`
  all: unset;

  background-color: #660000;

  width: 38vh;
  height: 6vh;

  border: 0.1vh solid #000;
  border-left: 0.025vh solid #000;
  border-top-right-radius: 0.5vh;
  border-bottom-right-radius: 0.5vh;
  transition: background-color 0.25s;

  :hover {
    background-color: #aa0000;
  }
  :focus {
    background-color: #aa0000;
  }
  :checked {
    background-color: #ff0000;
  }
`;

interface SwitchProps {
  trueRef: React.RefObject<HTMLInputElement>;
  falseRef: React.RefObject<HTMLInputElement>;
  answer: boolean | undefined;
  setAnswer: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Switch = ({ trueRef, falseRef, answer, setAnswer }: SwitchProps) => {
  useEffect(() => {
    if (trueRef.current && falseRef.current && answer !== undefined) {
      trueRef.current.checked = answer;
      falseRef.current.checked = !answer;
    }
  }, [answer]);

  return (
    <Background>
      <Wrapper>
        <label htmlFor="true">True</label>
        <True
          id="true"
          onChange={() => setAnswer(true)}
          ref={trueRef}
          type="checkbox"
        />
      </Wrapper>
      <Wrapper>
        <label htmlFor="false">False</label>
        <False
          id="false"
          onChange={() => setAnswer(false)}
          ref={falseRef}
          type="checkbox"
        />
      </Wrapper>
    </Background>
  );
};

export default Switch;
