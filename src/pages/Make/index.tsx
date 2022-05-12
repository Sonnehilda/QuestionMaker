import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Phrase from "../../components/Phrase";
import {
  FlashcardSubPhrase,
  MultipleChoiceQuestionSubPhrase,
  ShortAnswerQuestionSubPhrase,
  TrueOrFalseQuestionSubPhrase,
} from "./constant";

const Make = () => {
  return (
    <>
      <Banner />
      <Menu animation="fade-up" duration="1000" />

      <Phrase
        mainphrase={["Multiple Choice Question"]}
        subphrase={MultipleChoiceQuestionSubPhrase}
      />
      <Phrase
        mainphrase={["Short Answer Question"]}
        subphrase={ShortAnswerQuestionSubPhrase}
      />
      <Phrase
        mainphrase={["True or False Question"]}
        subphrase={TrueOrFalseQuestionSubPhrase}
      />
      <Phrase mainphrase={["Flashcard"]} subphrase={FlashcardSubPhrase} />
    </>
  );
};

export default Make;
