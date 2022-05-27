import { useState } from "react";
import Banner from "../../components/Banner";
import List from "../../components/List";
import McView from "../../components/share/View/ViewMultipleChoice";
import SaView from "../../components/share/View/ViewShortAnswer";

const SavedQuestion = () => {
  const [viewState, setViewState] = useState<string>("");

  return (
    <>
      {viewState.includes("MC") && (
        <McView setViewState={setViewState} questionName={viewState} />
      )}
      {viewState.includes("SA") && (
        <SaView setViewState={setViewState} questionName={viewState} />
      )}
      <Banner />
      <List animation="fade-up" duration="1000" setViewState={setViewState} />
    </>
  );
};

export default SavedQuestion;
