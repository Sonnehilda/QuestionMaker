import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Phrase from "../../components/Phrase";
import {
  FlashcardMainPhrase,
  FlashcardSubPhrase,
  MultipleChoiceQuestionMainPhrase,
  MultipleChoiceQuestionSubPhrase,
  ShortAnswerQuestionMainPhrase,
  ShortAnswerQuestionSubPhrase,
  TrueOrFalseQuestionMainPhrase,
  TrueOrFalseQuestionSubPhrase,
} from "./constant";

const Make = () => {
  return (
    <>
      <Banner />
      <Menu animation="fade-up" duration="1000" />

      <Phrase
        mainphrase={MultipleChoiceQuestionMainPhrase}
        subphrase={MultipleChoiceQuestionSubPhrase}
      />
      <Phrase
        mainphrase={ShortAnswerQuestionMainPhrase}
        subphrase={ShortAnswerQuestionSubPhrase}
      />
      <Phrase
        mainphrase={TrueOrFalseQuestionMainPhrase}
        subphrase={TrueOrFalseQuestionSubPhrase}
      />
      <Phrase mainphrase={FlashcardMainPhrase} subphrase={FlashcardSubPhrase} />
    </>
  );
};

export default Make;
