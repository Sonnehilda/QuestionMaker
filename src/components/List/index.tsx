import styled from "styled-components";
import moment from "moment";
import { useRef, useState } from "react";

const Background = styled.div`
  background-color: #f6f6f6;

  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-top: 6vh;

  height: 52vh;

  @media screen and (max-device-width: 640px) {
    height: 52.5vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  padding-bottom: 1.5vh;
  margin-bottom: 1.5vh;

  width: 90vh;
  height: 2.5vh;

  @media screen and (max-device-width: 640px) {
    padding-bottom: 3vh;

    width: 90vw;
  }

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

  @media screen and (max-device-width: 640px) {
    width: 20vw;

    :nth-child(2) {
      width: 50vw;
    }
  }
`;

const Space = styled.div`
  height: 37vh;

  @media screen and (max-device-width: 640px) {
    height: 34.5vh;
  }
`;

const PageWrapper = styled.div`
  margin-top: 1.5vh;

  width: 20vh;
  height: 2.5vh;

  @media screen and (max-device-width: 640px) {
    margin-top: 4.5vh;

    height: 1vh;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 2vh;
`;

const Page = styled.div`
  color: #a1a1a1;
  font-size: 2vh;

  cursor: pointer;
  transition: color 0.25s;

  :hover {
    color: #000;
  }
`;

const QuestionWrapper = styled.div`
  margin-bottom: 1.5vh;

  width: 90vh;
  height: 6vh;

  @media screen and (max-device-width: 640px) {
    width: 90vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #000;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: backdrop-filter 0.25s;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    backdrop-filter: brightness(95%);
  }
`;

interface QuestionProps {
  type?: string;
}

const Question = styled.div<QuestionProps>`
  width: 20vh;

  font-size: 2vh;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :nth-child(2) {
    width: 50vh;
  }

  :first-child::before {
    ${(props) => props.type && `content: "${props.type}"`};
  }

  @media screen and (max-device-width: 640px) {
    width: 20vw;

    :nth-child(2) {
      width: 50vw;
    }

    :first-child::before {
      ${(props) =>
        props.type === "Multiple Choice"
          ? `content: "MC";`
          : props.type === "Short Answer"
          ? `content: "SA";`
          : props.type === "True or False"
          ? `content: "TF";`
          : props.type === "Flashcard" && `content: "FC";`}
    }
  }
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;

  margin-top: 1.5vh;
  padding-bottom: 0.5vh;

  width: 25vh;
  height: 3vh;

  font-size: 2vh;
  text-align: center;

  border-bottom: 0.1vh solid #000;
`;

interface ListProps {
  animation: string;
  duration: string;
  setViewState: React.Dispatch<React.SetStateAction<string>>;
}

const List = ({ animation, duration, setViewState }: ListProps) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const Total: string[] = JSON.parse(localStorage.getItem("Total") || "[]");
  const getTotalPage: number = Total.length;

  const pageNext = () => {
    if (page * 5 < getTotalPage) setPage(page + 1);
  };

  const pagePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const searchData = (search: string) => {
    const searchedData: string[] = [];
    // eslint-disable-next-line array-callback-return
    Total.map((v) => {
      if (
        JSON.parse(localStorage.getItem(v) || "[]")[0]
          .toLowerCase()
          .includes(search.toLowerCase())
      )
        searchedData.push(v);
    });
    return searchedData;
  };

  const loadData = (index: number) => {
    let type: string;
    let date: string | number;
    let question: string[];

    if (search === "") {
      type = Total[index].includes("MC")
        ? "Multiple Choice"
        : Total[index].includes("SA")
        ? "Short Answer"
        : Total[index].includes("TF")
        ? "True or False"
        : "Flashcard";
      date = parseInt(Total[index].slice(2));
      question = JSON.parse(localStorage.getItem(Total[index]) || "");
    } else {
      const searchedData: string[] = searchData(search);
      type = searchedData[index].includes("MC")
        ? "Multiple Choice"
        : searchedData[index].includes("SA")
        ? "Short Answer"
        : searchedData[index].includes("TF")
        ? "True or False"
        : "Flashcard";
      date = parseInt(searchedData[index].slice(2));
      question = JSON.parse(localStorage.getItem(searchedData[index]) || "");
    }

    return (
      <>
        <Question type={type}></Question>
        <Question>{question[0]}</Question>
        <Question>{moment(date).format("MM-DD-YYYY")}</Question>
      </>
    );
  };

  const renderData = () => {
    let totalPage: number;
    let questions: string[];

    if (search === "") {
      questions = Total;
      totalPage = getTotalPage;
    } else {
      questions = searchData(search);
      totalPage = questions.length;
    }

    if (totalPage > 0) {
      let Data: JSX.Element[] = [];
      for (let i: number = (page - 1) * 5; i < totalPage && i < page * 5; i++) {
        Data = [
          ...Data,
          <QuestionWrapper
            onClick={() => setViewState(questions[i])}
            key={questions[i]}
          >
            {loadData(i)}
          </QuestionWrapper>,
        ];
      }
      return Data;
    } else return <Question>Question Not Found</Question>;
  };

  return (
    <Background data-aos={animation} data-aos-duration={duration}>
      <NameWrapper>
        <Name>Question Type</Name>
        <Name>Question Name</Name>
        <Name>Creation Date</Name>
      </NameWrapper>
      <Space>{renderData()}</Space>
      <PageWrapper>
        <Page onClick={() => pagePrev()}>◀</Page>
        {page}
        <Page onClick={() => pageNext()}>▶</Page>
      </PageWrapper>
      <InputWrapper
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (inputRef.current) setSearch(inputRef.current.value);
        }}
      >
        <Input placeholder="Search Question By Name" ref={inputRef} />
      </InputWrapper>
    </Background>
  );
};

export default List;
