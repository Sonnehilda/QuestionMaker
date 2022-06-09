import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

const TextareaWrapper = styled.div`
  cursor: pointer;

  :hover textarea {
    filter: drop-shadow(0 0 0.5vh #aaa) brightness(125%);
  }
`;

const Textarea = styled.textarea`
  all: unset;

  background-color: #f6f6f6;

  padding: 1.5vh;
  margin-bottom: 1.5vh;

  width: 73vh;
  height: 21vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  font-size: 2vh;
  overflow-x: hidden;
  overflow-y: auto;

  border-radius: 0.5vh;
  transition: filter 0.25s;
`;

const SubTitle = styled.div`
  font-size: 2vh;
`;

interface ExportModalProps {
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const ExportModal = ({ setViewState }: ExportModalProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<string>(
    "Click the block above to copy the question code!"
  );

  const exportStorage = () => {
    if (!localStorage.getItem("Total")) {
      return;
    }
    const Total: string[] = JSON.parse(localStorage.getItem("Total") || "");
    const exportedStorage: string[] = [];
    // eslint-disable-next-line array-callback-return
    Total.map((v) => {
      exportedStorage.push(v);
      exportedStorage.push(localStorage.getItem(v) || "undefined");
    });
    if (inputRef.current)
      inputRef.current.value = JSON.stringify(exportedStorage);
  };

  const copyExportedStorage = () => {
    if (inputRef.current) {
      if (inputRef.current.value !== "") {
        navigator.clipboard.writeText(inputRef.current.value);
        setStatus("Copied To Clipboard!");
      } else {
        setStatus("Copy Failed!");
      }
    }
  };

  useEffect(() => {
    exportStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <CloseWrapper>
        <Close onClick={() => setViewState("")}>✕</Close>
      </CloseWrapper>
      <Title>Export Question</Title>
      <TextareaWrapper onClick={copyExportedStorage}>
        <Textarea ref={inputRef} disabled={true} />
      </TextareaWrapper>
      <SubTitle>{status}</SubTitle>
    </Background>
  );
};

export default ExportModal;
