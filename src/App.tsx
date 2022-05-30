import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import FlashCardQuestion from "./pages/share/Make/MakeFlashcard";
import Home from "./pages/Home";
import Make from "./pages/Make";
import MultipleChoiceQuestion from "./pages/share/Make/MakeMultipleChoice";
import ShortAnswerQuestion from "./pages/share/Make/MakeShortAnswer";
import TrueFalseQuestion from "./pages/share/Make/MakeTrueFalse";
import GlobalStyle from "./styles";
import SavedQuestion from "./pages/Saved";
import About from "./pages/About";

const Wrapper = styled.div`
  min-height: 88vh;
`;

function App() {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make" element={<Make />} />
          <Route
            path="/make/mc"
            element={<MultipleChoiceQuestion navigate={navigate} />}
          />
          <Route
            path="/make/sa"
            element={<ShortAnswerQuestion navigate={navigate} />}
          />
          <Route
            path="/make/tf"
            element={<TrueFalseQuestion navigate={navigate} />}
          />
          <Route
            path="/make/fc"
            element={<FlashCardQuestion navigate={navigate} />}
          />
          <Route path="/review" element={<SavedQuestion />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
