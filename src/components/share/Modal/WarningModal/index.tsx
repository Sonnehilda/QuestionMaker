import styled from "styled-components";

const Background = styled.div`
  background-color: #f6f6f6;

  position: fixed;

  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);

  width: 30vh;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 1.5vh;
  z-index: 3;
`;

const Close = styled.div`
  position: absolute;

  margin-left: 27vh;
  margin-bottom: 17.5vh;

  color: #000;
  font-size: 1.5vh;
  font-weight: 600;

  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Message = styled.div`
  font-size: 2vh;
  font-weight: 400;
`;

const Button = styled.button`
  all: unset;

  background-color: #f6f6f6;

  width: 20vh;
  height: 4vh;

  font-size: 2vh;
  text-align: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(95%) drop-shadow(0 0 0.25vh #ddd);
  }
`;

interface ModalProps {
  warning: string;
  setWarning: React.Dispatch<React.SetStateAction<string>>;
}

const WarningModal = ({ warning, setWarning }: ModalProps) => {
  return (
    <Background>
      <Close onClick={() => setWarning("")}>✕</Close>
      <Wrapper>
        <Message>{warning}</Message>
        <Button onClick={() => setWarning("")}>OK</Button>
      </Wrapper>
    </Background>
  );
};

export default WarningModal;
