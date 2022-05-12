import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Index";
import Header from "./components/Header";
import Home from "./pages/Home";
import Make from "./pages/Make";
import GlobalStyle from "./styles";

const Wrapper = styled.div`
  min-height: 88vh;
  padding-bottom: 6vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make" element={<Make />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
