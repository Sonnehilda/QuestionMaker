import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Switch from "../../../Switch";

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

  const deleteQuestion = () => {
    const total: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredTotal = total.filter((v) => {
      return v !== questionName;
    });
    const tf: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredTF = tf.filter((v) => {
      return v !== questionName;
    });
    localStorage.setItem("Total", JSON.stringify(filteredTotal));
    localStorage.setItem("TF", JSON.stringify(filteredTF));
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
    <Background>
      <SubWrapper>
        <Leave onClick={() => setViewState("")}>← Close</Leave>
        <Delete onClick={() => deleteQuestion()}>✕ Delete</Delete>
      </SubWrapper>
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

const SubWrapper = styled.div`
  width: 76vh;
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
  word-break: break-all;

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

export default TfView;
