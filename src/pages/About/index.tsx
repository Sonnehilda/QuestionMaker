import Banner from "../../components/Banner";
import Phrase from "../../components/Phrase";
import {
  ContactMainPhrase,
  ContactSubPhrase,
  WhyMakingQuestionMakerMainPhrase,
  WhyMakingQuestionMakerSubPhrase,
} from "./constant";

const About = () => {
  return (
    <>
      <Banner />
      <Phrase
        animation="fade-left"
        duration="1000"
        mainphrase={WhyMakingQuestionMakerMainPhrase}
        subphrase={WhyMakingQuestionMakerSubPhrase}
      />
      <Phrase
        animation="fade-left"
        duration="1000"
        mainphrase={ContactMainPhrase}
        subphrase={ContactSubPhrase}
      />
    </>
  );
};

export default About;
