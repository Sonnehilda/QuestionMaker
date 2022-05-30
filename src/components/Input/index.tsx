import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import stringSimilarity from "string-similarity";

interface FieldWrapperProps {
  word: string;
}

const FieldWrapper = styled.div<FieldWrapperProps>`
  width: 76vh;
  min-height: 6vh;

  @media screen and (max-device-width: 640px) {
    width: 80vw;
  }

  display: flex;
  ${(props) =>
    props.word.length > 15 ? "overflow: auto;" : "justify-content: center;"}
  align-items: center;

  @media screen and (max-device-width: 640px) {
    ${(props) =>
      props.word.length > 9 ? "overflow: auto;" : "justify-content: center;"}
  }
`;

interface FieldProps {
  status: boolean;
}

const Field = styled.input<FieldProps>`
  all: unset;

  margin-left: 0.5vh;
  margin-right: 0.5vh;
  margin-bottom: 1vh;

  width: 4vh;
  height: 4vh;

  font-size: 3vh;
  text-align: center;

  border-bottom: 0.1vh solid #aaa;
  box-sizing: border-box;

  ${(props) => (props.status === true ? "color: #aaffaa;" : "color: #000;")}
`;

interface InputProps {
  word: string;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({ word, status, setStatus }: InputProps) => {
  const inputRef = useRef<any>([]);

  useEffect(() => {
    if (status === false) {
      inputRef.current[0].focus();
    }
  }, [status]);

  const onKeyDown = (e: any) => {
    const id: string = e.target.id;
    const key: string = e.key.toUpperCase();
    const currentRef: number = parseInt(id);

    let temp: string = "";

    if (currentRef > 0) {
      if (key === "BACKSPACE" || key === "ARROWLEFT") {
        if (key === "ARROWLEFT") e.preventDefault();
        const prevRef: string = (currentRef - 1).toString();
        if (inputRef.current[id].value === "") {
          if (key !== "ARROWLEFT") inputRef.current[id].value = "";
          inputRef.current[prevRef].focus();
        } else {
          if (key !== "ARROWLEFT") inputRef.current[id].value = "";
          inputRef.current[currentRef].focus();
        }
      }
    }

    if (currentRef + 1 <= word.length) {
      if (key.length === 1 || key === "ARROWRIGHT") {
        e.preventDefault();
        const nextRef: string = (currentRef + 1).toString();
        if (key !== "ARROWRIGHT")
          if (inputRef.current[id].value === "") {
            inputRef.current[id].value = key;
          } else if (
            currentRef < word.length &&
            currentRef + 1 !== word.length
          ) {
            inputRef.current[nextRef].value = key;
          }
        if (currentRef + 1 !== word.length) {
          if (inputRef.current[id].value === "") {
            inputRef.current[nextRef].focus();
          } else if (currentRef < word.length) {
            inputRef.current[nextRef].focus();
          }
        }
      }
    }

    word.split("").forEach((i, index) => {
      if (inputRef.current[index].value !== "")
        if (temp === "") temp = inputRef.current[index].value;
        else temp = temp + inputRef.current[index].value;
    });

    const similarity: number = stringSimilarity.compareTwoStrings(
      word.toUpperCase(),
      temp.toUpperCase()
    );

    if (similarity === 1) {
      setStatus(true);
    }
  };

  const numberMaxLength = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (e)
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
      }
  };

  return (
    <>
      <FieldWrapper word={word}>
        {word.split("").map((i, index) => {
          return (
            <Field
              id={index.toString()}
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              maxLength={1}
              onKeyDown={onKeyDown}
              autoComplete="off"
              status={status}
              disabled={status}
              onChange={numberMaxLength}
            />
          );
        })}
      </FieldWrapper>
    </>
  );
};

export default Input;
