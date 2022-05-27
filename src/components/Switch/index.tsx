import { useEffect } from "react";
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

    color: #000;
    font-size: 2.5vh;
    font-weight: 100;
  }
`;

const True = styled.input`
  all: unset;

  background-color: #f6f6f6;

  width: 38vh;
  height: 6vh;

  border: 0.1vh solid #000;
  border-right: 0.025vh solid #000;
  border-top-left-radius: 0.5vh;
  border-bottom-left-radius: 0.5vh;
  transition: background-color 0.25s, box-shadow 0.25s;

  :hover {
    background-color: #ccffcc;
  }
  :checked {
    background-color: #aaffaa;
    box-shadow: 0 0 1vh #aaffaa;
  }
`;
const False = styled.input`
  all: unset;

  background-color: #f6f6f6;

  width: 38vh;
  height: 6vh;

  border: 0.1vh solid #000;
  border-left: 0.025vh solid #000;
  border-top-right-radius: 0.5vh;
  border-bottom-right-radius: 0.5vh;
  transition: background-color 0.25s, box-shadow 0.25s;

  :hover {
    background-color: #ffcccc;
  }
  :checked {
    background-color: #ffaaaa;
    box-shadow: 0 0 1vh #ffaaaa;
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
