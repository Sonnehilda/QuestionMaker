import styled from "styled-components";
import moment from "moment";
import { ReactNode } from "react";

const Background = styled.div`
  background-color: #f6f6f6;

  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  padding-bottom: 1.5vh;
  margin-bottom: 1.5vh;

  width: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 0.1vh solid #000;
`;

const Name = styled.div`
  width: 20vh;

  font-size: 2vh;
  text-align: center;

  :nth-child(2) {
    width: 50vh;
  }
`;

const QuestionWrapper = styled.div`
  margin-bottom: 1.5vh;

  width: 90vh;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;

  :last-child {
    margin-bottom: 0;
  }
`;

const Question = styled.div`
  width: 20vh;

  font-size: 2vh;
  text-align: center;

  :nth-child(2) {
    width: 50vh;
  }
`;

const List = () => {
  const Total: string[] = JSON.parse(localStorage.getItem("Total") || "[]");
  const getTotalPage: number = Total.length;

  const loadData = (index: number) => {
    if (Total[index]) {
      let type: string = Total[index].includes("MC")
        ? "Multiple Choice"
        : Total[index].includes("SA")
        ? "Short Answer"
        : Total[index].includes("TF")
        ? "True or False"
        : "Flashcard";
      let date: string | number = parseInt(Total[index].slice(2));
      let question: string[] = JSON.parse(
        localStorage.getItem(Total[index]) || ""
      );

      return (
        <>
          <Question>{type}</Question>
          <Question>{question[0]}</Question>
          <Question>{moment(date).format("MM-DD-YYYY")}</Question>
        </>
      );
    }

    return <Question>question not found</Question>;
  };

  return (
    <Background>
      <NameWrapper>
        <Name>Question Type</Name>
        <Name>Question Name</Name>
        <Name>Creation Date</Name>
      </NameWrapper>
      <QuestionWrapper>{loadData(0)}</QuestionWrapper>
    </Background>
  );
};

export default List;
