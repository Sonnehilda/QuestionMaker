import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

import Banner from "../../../../components/Banner";
import McForm from "../../../../components/share/Form/FormMultipleChoice";
import WarningModal from "../../../../components/share/Modal/WarningModal";

interface McProps {
  navigate: NavigateFunction;
}

const MultipleChoiceQuestion = ({ navigate }: McProps) => {
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {warning !== "" && (
        <WarningModal warning={warning} setWarning={setWarning} />
      )}
      <Banner />
      <McForm
        animation="fade-up"
        duration="750"
        warning={warning}
        setWarning={setWarning}
        navigate={navigate}
      />
    </>
  );
};

export default MultipleChoiceQuestion;
