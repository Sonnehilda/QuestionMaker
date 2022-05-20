import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Home from "./pages/Home";
import Make from "./pages/Make";
import MakeMultipleChoiceQuestion from "./pages/MC";
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
            element={<MakeMultipleChoiceQuestion navigate={navigate} />}
          />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
