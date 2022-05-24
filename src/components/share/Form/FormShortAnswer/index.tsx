import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, NavigateFunction } from "react-router-dom";
import {
  AnswerNotExistException,
  SucceededMessage,
  TitleNotExistException,
} from "../genericWarning";

const Background = styled.div`
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  background-color: #f6f6f6;

  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Leave = styled(Link)`
  margin-right: 69vh;

  color: #666;
  font-size: 1.5vh;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.25s;

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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputName = styled.div`
  margin-bottom: 1.5vh;
  padding-bottom: 0.5vh;

  width: 76vh;

  font-size: 3vh;
  font-weight: 600;
  text-align: center;

  border-bottom: 0.1vh solid #aaa;
`;

const Input = styled.input`
  all: unset;

  background-color: #f6f6f6;

  padding-left: 3vh;
  padding-right: 3vh;

  width: 70vh;
  height: 6vh;

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;

  :nth-child(2) {
    margin-bottom: 3vh;
  }

  :nth-child(1) {
    width: 60vh;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Button = styled.button`
  all: unset;

  background-color: #f6f6f6;

  width: 76vh;
  height: 6vh;

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }

  :focus {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

interface SaFormProps {
  animation: string;
  duration: string;
  warning: string;
  setWarning: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
}

const SaForm = ({
  animation,
  duration,
  warning,
  setWarning,
  navigate,
}: SaFormProps) => {
  const warningRef = useRef<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    warningRef.current = warning;
  }, [warning]);

  useEffect(() => {
    titleRef.current?.focus();

    const close = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (warningRef.current !== "") setWarning("");
        else if (
          titleRef.current ||
          answerRef.current === document.activeElement
        )
          makeQuestion();
      }
      if (e.key === "Escape") {
        if (warningRef.current !== "") setWarning("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const makeQuestion = () => {
    if (titleRef.current && titleRef.current.value === "") {
      setWarning(TitleNotExistException);
    } else if (answerRef.current && answerRef.current.value.length <= 0) {
      setWarning(AnswerNotExistException);
    } else if (titleRef.current && answerRef.current) {
      const now = Date.now();
      localStorage.setItem(
        "SA" + now,
        JSON.stringify([titleRef.current.value, answerRef.current.value])
      );
      if (localStorage.getItem("SA")) {
        const SA = JSON.parse(localStorage.getItem("SA") || "");
        localStorage.setItem("SA", JSON.stringify([now, ...SA]));
      } else localStorage.setItem("SA", JSON.stringify([now]));

      alert(
        SucceededMessage[0] +
          `"${titleRef.current.value}"` +
          SucceededMessage[1]
      );
      alert(SucceededMessage[2]);
      navigate("/make", { replace: true });
    }
  };

  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <Leave to="/make">← Go back</Leave>
      <InputWrapper>
        <InputName>Question Name</InputName>
        <Input tabIndex={1} ref={titleRef} maxLength={100} />
      </InputWrapper>
      <InputWrapper>
        <InputName>Correct Answer</InputName>
        <Input tabIndex={2} ref={answerRef} />
      </InputWrapper>
      <Button tabIndex={3} onClick={() => makeQuestion()}>
        Make One!
      </Button>
    </Background>
  );
};

export default SaForm;