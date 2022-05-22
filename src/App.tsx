import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Home from "./pages/Home";
import Make from "./pages/Make";
import MultipleChoiceQuestion from "./pages/MC";
import ShortAnswerQuestion from "./pages/SA";
import GlobalStyle from "./styles";

const Wrapper = styled.div`
  min-height: 88vh;
  padding-bottom: 6vh;
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
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
