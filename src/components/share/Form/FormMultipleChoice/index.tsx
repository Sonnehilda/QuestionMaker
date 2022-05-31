import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, NavigateFunction } from "react-router-dom";
import Options from "../../../Option";
import {
  AnswerNotExistException,
  OptionAlreadyExistException,
  OptionNotExistException,
  OptionNotFulfilledException,
} from "./constant";
import { SucceededMessage, TitleNotExistException } from "../genericWarning";

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

const LeaveWrapper = styled.div`
  width: 76vh;
  @media screen and (max-device-width: 640px) {
    width: 90vw;
  }
`;

const Leave = styled(Link)`
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

  @media screen and (max-device-width: 640px) {
    width: 90vw;
  }

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

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

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

  @media screen and (max-device-width: 640px) {
    :nth-child(1) {
      width: 63vw;
    }
  }
`;

const ButtonWrapper = styled.form`
  margin-bottom: 3vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddButton = styled.button`
  all: unset;

  background-color: #f6f6f6;

  width: 10vh;
  height: 6vh;

  @media screen and (max-device-width: 640px) {
    width: 16.5vw;
  }

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-left: none;
  border-top-right-radius: 0.5vh;
  border-bottom-right-radius: 0.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

const Button = styled.button`
  all: unset;

  background-color: #f6f6f6;

  width: 76vh;
  height: 6vh;

  @media screen and (max-device-width: 640px) {
    width: 90vw;
  }

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

interface McFormProps {
  animation: string;
  duration: string;
  warning: string;
  setWarning: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
}

const McForm = ({
  animation,
  duration,
  warning,
  setWarning,
  navigate,
}: McFormProps) => {
  const warningRef = useRef<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLInputElement>(null);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    warningRef.current = warning;
  }, [warning]);

  useEffect(() => {
    titleRef.current?.focus();

    const close = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (warningRef.current !== "") setWarning("");
        else if (titleRef.current === document.activeElement) makeQuestion();
      }
      if (e.key === "Escape") {
        if (warningRef.current !== "") setWarning("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      optionRef.current &&
      !options.includes(optionRef.current.value) &&
      optionRef.current.value.length > 0
    ) {
      setOptions([...options, optionRef.current.value]);
      optionRef.current.value = "";
      setWarning("");
    } else if (optionRef.current && optionRef.current.value.length <= 0) {
      setWarning(OptionNotExistException);
    } else if (optionRef.current && options.includes(optionRef.current.value)) {
      setWarning(OptionAlreadyExistException);
    }
    optionRef.current?.focus();
  };

  const makeQuestion = () => {
    if (titleRef.current && titleRef.current.value === "") {
      setWarning(TitleNotExistException);
    } else if (options.length < 2) {
      setWarning(OptionNotFulfilledException);
    } else if (titleRef.current) {
      const filtered: string[] = options.filter((v) => {
        return v.includes("@ANSWER");
      });
      if (filtered.length <= 0) {
        setWarning(AnswerNotExistException);
        return;
      }

      const now = Date.now();
      localStorage.setItem(
        "MC" + now,
        JSON.stringify([titleRef.current.value, ...options])
      );
      if (localStorage.getItem("MC")) {
        const MC = JSON.parse(localStorage.getItem("MC") || "");
        localStorage.setItem("MC", JSON.stringify([now, ...MC]));
      } else {
        localStorage.setItem("MC", JSON.stringify([now]));
      }
      if (localStorage.getItem("Total")) {
        const Total = JSON.parse(localStorage.getItem("Total") || "");
        localStorage.setItem("Total", JSON.stringify(["MC" + now, ...Total]));
      } else localStorage.setItem("Total", JSON.stringify(["MC" + now]));
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
      <LeaveWrapper>
        <Leave to="/make">← Go back</Leave>
      </LeaveWrapper>
      <InputWrapper>
        <InputName>Question Name</InputName>
        <Input tabIndex={1} ref={titleRef} maxLength={100} />
      </InputWrapper>
      <InputWrapper>
        <InputName>Add Option</InputName>
        <ButtonWrapper onSubmit={(e) => createOption(e)}>
          <Input tabIndex={2} ref={optionRef} maxLength={50} />
          <AddButton tabIndex={-1}>Add</AddButton>
        </ButtonWrapper>
      </InputWrapper>
      <InputWrapper>
        <InputName>Options</InputName>
        {options.map((p, i) => (
          <Options
            key={i}
            options={options}
            setOptions={setOptions}
            index={i}
            option={p}
            setWarning={setWarning}
          />
        ))}
      </InputWrapper>
      <Button tabIndex={3} onClick={() => makeQuestion()}>
        Make One!
      </Button>
    </Background>
  );
};

export default McForm;
