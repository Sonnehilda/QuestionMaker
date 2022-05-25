import { useEffect, useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  padding-bottom: 2vh;
  margin-top: 2vh;

  width: 76vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2vh;
  text-align: center;

  border-bottom: 0.1vh solid #000;

  :nth-child(2) {
    margin-top: 0.5vh;
  }
  :last-child {
    margin-bottom: 1.5vh;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 0.5s ease-out;
`;

const Phrase = styled.div`
  width: 73vh;

  font-size: 2vh;
  word-break: break-all;
`;

interface AnswerProps {
  isAnswer: boolean;
}

const Answer = styled.div<AnswerProps>`
  position: absolute;

  padding: 0.25vh;
  padding-top: 0;
  transform: translateX(29.75vh) translateY(0.15vh);

  width: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5vh;

  border-radius: 0.5vh;
  transition: filter 0.25s;
  cursor: pointer;

  ${(props) =>
    props.isAnswer
      ? `background-color: #ddffdd; color: #00ff00;`
      : `background-color: #ffdddd; color: #ff0000;`}

  :hover {
    filter: brightness(90%);
  }
`;

const Delete = styled.div`
  width: 3vh;

  color: #ff0000;
  font-size: 1.5vh;
  font-weight: 600;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(75%);
  }
`;

interface OptionsProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  index: number;
  option: string;
  setWarning: React.Dispatch<React.SetStateAction<string>>;
}

const Options = ({
  options,
  setOptions,
  index,
  option,
  setWarning,
}: OptionsProps) => {
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const deleteOption = () => {
    setOptions(
      options.filter((s) => {
        return s !== option;
      })
    );
    setWarning("");
  };

  const answerOption = () => {
    if (options[index] && options[index].includes("@ANSWER")) {
      options[index] = options[index].replaceAll("@ANSWER", "");
      setIsAnswer(false);
    } else {
      options[index] = `@ANSWER${options[index]}`;
      setIsAnswer(true);
    }
  };

  useEffect(() => {
    if (option.includes("@ANSWER")) setIsAnswer(true);
    else setIsAnswer(false);
  }, [options]);

  return (
    <Background>
      <Phrase>
        {index + 1}. {option.replace("@ANSWER", "")}
      </Phrase>
      <Answer onClick={() => answerOption()} isAnswer={isAnswer}>
        {isAnswer ? "Answer" : "Not Answer"}
      </Answer>
      <Delete onClick={() => deleteOption()}>✕</Delete>
    </Background>
  );
};

export default Options;
