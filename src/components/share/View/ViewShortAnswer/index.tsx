import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../Input";

interface SaViewProps {
  questionName: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const SaView = ({ questionName, setViewState }: SaViewProps) => {
  const [status, setStatus] = useState<boolean>(false);

  const question: string[] = JSON.parse(
    localStorage.getItem(questionName) || ""
  );

  const deleteQuestion = () => {
    const total: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredTotal = total.filter((v) => {
      return v !== questionName;
    });
    const sa: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const filteredSA = sa.filter((v) => {
      return v !== questionName;
    });
    localStorage.setItem("Total", JSON.stringify(filteredTotal));
    localStorage.setItem("SA", JSON.stringify(filteredSA));
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
        <Input word={question[1]} status={status} setStatus={setStatus} />
      </Wrapper>
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

export default SaView;
