import { useEffect, useRef } from "react";
import styled from "styled-components";
import { CodeNotExistException } from "./constant";

const Background = styled.div`
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding-top: 3vh;
  padding-bottom: 3vh;

  background-color: #fff;

  width: 85vh;

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

const CloseWrapper = styled.div`
  width: 76vh;
  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  display: flex;
  justify-content: right;
`;

const Close = styled.div`
  position: absolute;

  display: inline-flex;
  align-items: center;

  color: #000;
  font-size: 1.5vh;
  font-weight: 600;

  cursor: pointer;
`;

const Wrapper = styled.form`
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

const Textarea = styled.textarea`
  all: unset;

  background-color: #f6f6f6;

  padding: 1.5vh;

  width: 73vh;
  height: 21vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  font-size: 2vh;
  overflow-x: hidden;
  overflow-y: auto;

  border-radius: 0.5vh;
`;

const Button = styled.button`
  all: unset;

  background-color: #f6f6f6;

  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;

  width: 76vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: background-color 0.25s, filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

const SubTitle = styled.div`
  font-size: 2vh;
`;

interface ImportModalProps {
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const ImportModal = ({ setViewState }: ImportModalProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const importStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current)
      if (inputRef.current.value === "") {
        alert(CodeNotExistException);
      } else {
        localStorage.clear();

        const targetStorage: string[] = JSON.parse(inputRef.current.value);

        const totalStorage: string[] = [];
        const mcStorage: string[] = [];
        const saStorage: string[] = [];
        const tfStorage: string[] = [];
        const fcStorage: string[] = [];
        let id: string;

        // eslint-disable-next-line array-callback-return
        targetStorage.map((v, i) => {
          if (i % 2) {
            localStorage.setItem(id, v);
            if (id.includes("MC")) mcStorage.push(id.replace("MC", ""));
            else if (id.includes("SA")) saStorage.push(id.replace("SA", ""));
            else if (id.includes("TF")) tfStorage.push(id.replace("TF", ""));
            else if (id.includes("FC")) fcStorage.push(id.replace("FC", ""));
          } else {
            totalStorage.push(v);
            id = v;
          }
        });

        localStorage.setItem("Total", JSON.stringify(totalStorage));
        localStorage.setItem("MC", JSON.stringify(mcStorage));
        localStorage.setItem("SA", JSON.stringify(saStorage));
        localStorage.setItem("TF", JSON.stringify(tfStorage));
        localStorage.setItem("FC", JSON.stringify(fcStorage));

        alert("Successfully fetched " + totalStorage.length + " question(s).");
      }
  };

  return (
    <Background>
      <CloseWrapper>
        <Close onClick={() => setViewState("")}>✕</Close>
      </CloseWrapper>
      <Title>Import Question</Title>
      <Wrapper onSubmit={(e) => importStorage(e)}>
        <Textarea ref={inputRef} placeholder="Paste a Question Code Here!" />
        <Button>Import</Button>
      </Wrapper>
      <SubTitle>Once you import, all the questions will be discarded.</SubTitle>
    </Background>
  );
};

export default ImportModal;
