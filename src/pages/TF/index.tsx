import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

import Banner from "../../components/Banner";
import TfForm from "../../components/TfForm";
import WarningModal from "../../components/WarningModal";

interface TfProps {
  navigate: NavigateFunction;
}

const TrueFalseQuestion = ({ navigate }: TfProps) => {
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {warning !== "" && (
        <WarningModal warning={warning} setWarning={setWarning} />
      )}
      <Banner />
      <TfForm
        animation="fade-up"
        duration="1000"
        warning={warning}
        setWarning={setWarning}
        navigate={navigate}
      />
    </>
  );
};

export default TrueFalseQuestion;
