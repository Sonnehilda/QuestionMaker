import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../Input";

const Background = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding-top: 3vh;
  padding-bottom: 3vh;

  background-color: #fff;

  width: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  z-index: 2;
`;

const Leave = styled.div`
  margin-right: 70.5vh;

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

  font-size: 3vh;
  font-weight: 600;
  text-align: center;

  border-bottom: 0.1vh solid #aaa;
`;

interface SaViewProps {
  questionName: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const SaView = ({ questionName, setViewState }: SaViewProps) => {
  const [status, setStatus] = useState<boolean>(false);

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
      <Leave onClick={() => setViewState("")}>← Close</Leave>
      <Wrapper>
        <Title>{question[0]}</Title>
      </Wrapper>
      <Wrapper>
        <Input word={question[1]} status={status} setStatus={setStatus} />
      </Wrapper>
    </Background>
  );
};

export default SaView;
