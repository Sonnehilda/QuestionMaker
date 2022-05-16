import { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Option from "../Option";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [options, setOptions] = useState<string[]>([]);

  const createOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && !options.includes(inputRef.current.value)) {
      setOptions([...options, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <Leave to="/make">← Go back</Leave>
      <InputWrapper>
        <InputName>Question Name</InputName>
        <Input />
      </InputWrapper>
      <InputWrapper>
        <InputName>Add Option</InputName>
        <ButtonWrapper onSubmit={(e) => createOption(e)}>
          <Input ref={inputRef} maxLength={100} />
          <AddButton>Add</AddButton>
        </ButtonWrapper>
      </InputWrapper>
      <InputWrapper>
        <InputName>Options</InputName>
        {options.map((p, i) => (
          <Option
            key={i}
            options={options}
            setOptions={setOptions}
            index={i + 1}
            option={p}
          />
        ))}
      </InputWrapper>
      <Button>Make One!</Button>
    </Background>
  );
};

export default McForm;