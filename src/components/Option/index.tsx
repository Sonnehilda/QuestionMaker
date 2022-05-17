import styled from "styled-components";

const Background = styled.div`
  margin-top: 1.5vh;

  width: 76vh;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2vh;
  text-align: center;

  border-bottom: 0.1vh solid #000;

  :nth-child(2) {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 1.5vh;
  }
`;

const Phrase = styled.div`
  width: 73vh;

  font-size: 2vh;
  word-break: break-all;
`;

const Delete = styled.div`
  width: 3vh;

  color: red;
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
  const deleteOption = () => {
    setOptions(
      options.filter((s) => {
        return s !== option;
      })
    );
    setWarning("");
  };

  return (
    <Background>
      <Phrase>
        {index}. {option}
      </Phrase>
      <Delete onClick={() => deleteOption()}>✕</Delete>
    </Background>
  );
};

export default Options;
