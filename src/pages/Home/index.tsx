import Banner from "../../components/Banner";
import Phrase from "../../components/Phrase";
import {
  HowToUseMainPhrase,
  HowToUseSubPhrase,
  WhatIsQuestionMakerMainPhrase,
  WhatIsQuestionMakerSubPhrase,
} from "./constant";

const Home = () => {
  return (
    <>
      <Banner />
      <Phrase
        animation="fade-left"
        duration="1000"
        mainphrase={WhatIsQuestionMakerMainPhrase}
        subphrase={WhatIsQuestionMakerSubPhrase}
      />
      <Phrase
        animation="fade-right"
        duration="1500"
        mainphrase={HowToUseMainPhrase}
        subphrase={HowToUseSubPhrase}
      />
    </>
  );
};

export default Home;
