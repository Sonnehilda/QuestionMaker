import Banner from "../../components/Banner";
import QuestionMenu from "../../components/QuestionMenu";
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
import ActionMenu from "../../components/ActionMenu";
import ImportModal from "../../components/share/Modal/ImportModal";
import ExportModal from "../../components/share/Modal/ExportModal";
import { useEffect, useState } from "react";

const Make = () => {
  const [viewState, setViewState] = useState<string>("");

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setViewState("");
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {viewState === "Import" && <ImportModal setViewState={setViewState} />}
      {viewState === "Export" && <ExportModal setViewState={setViewState} />}
      <Banner />
      <QuestionMenu animation="fade-up" duration="1000" />
      <ActionMenu
        animation="fade-up"
        duration="1500"
        setViewState={setViewState}
      />

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
