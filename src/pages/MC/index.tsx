import { useState } from "react";

import Banner from "../../components/Banner";
import McForm from "../../components/McForm";
import WarningModal from "../../components/WarningModal";

const MakeMultipleChoiceQuestion = () => {
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {warning !== "" && (
        <WarningModal warning={warning} setWarning={setWarning} />
      )}
      <Banner />
      <McForm animation="fade-up" duration="1000" setWarning={setWarning} />
    </>
  );
};

export default MakeMultipleChoiceQuestion;
