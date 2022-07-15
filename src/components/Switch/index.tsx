import { useEffect } from "react";
import styled from "styled-components";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

const Background = styled.div`
  margin-bottom: 1.5vh;

  width: 76vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  display: flex;
`;

const Wrapper = styled.div`
  display: flex;

  label {
    position: absolute;

    width: 38vh;
    height: 6vh;

    @media screen and (max-device-width: 640px) {
      width: 40vw;
    }

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

  @media screen and (max-device-width: 640px) {
    width: 40vw;
  }

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

  @media screen and (max-device-width: 640px) {
    width: 40vw;
  }

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

export default Switch;
