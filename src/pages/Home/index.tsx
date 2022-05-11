import Banner from "../../components/Banner";
import Phrase from "../../components/Phrase";
import { HowToUseSubPhrase, WhatIsQuestionMakerSubPhrase } from "./constant";

const Home = () => {
  return (
    <>
      <Banner />
      <Phrase
        animation="fade-left"
        duration="1000"
        mainphrase={["What is Question Maker?"]}
        subphrase={WhatIsQuestionMakerSubPhrase}
      />
      <Phrase
        animation="fade-right"
        duration="1500"
        mainphrase={["How to use?"]}
        subphrase={HowToUseSubPhrase}
      />
    </>
  );
};

export default Home;
