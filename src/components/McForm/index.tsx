import styled from "styled-components";
import { Link } from "react-router-dom";

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
  position: absolute;
  top: 1.5vh;
  left: 16vh;

  color: #666;
  font-size: 1.5vh;

  cursor: pointer;

  :link {
    color: #666;
  }
  :visited {
    color: #666;
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

const ButtonWrapper = styled.div`
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

interface McFormProps {
  animation: string;
  duration: string;
}

const McForm = ({ animation, duration }: McFormProps) => {
  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <Leave to="/make">← Go back</Leave>
      <InputWrapper>
        <InputName>Question Name</InputName>
        <Input />
      </InputWrapper>
      <InputWrapper>
        <InputName>Add Option</InputName>
        <ButtonWrapper>
          <Input />
          <AddButton>Add</AddButton>
        </ButtonWrapper>
      </InputWrapper>
      <InputWrapper>
        <InputName>Options</InputName>
      </InputWrapper>
      <Button>Make One!</Button>
    </Background>
  );
};

export default McForm;
