import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

import Banner from "../../components/Banner";
import SaForm from "../../components/SaForm";
import WarningModal from "../../components/WarningModal";

interface SaProps {
  navigate: NavigateFunction;
}

const ShortAnswerQuestion = ({ navigate }: SaProps) => {
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {warning !== "" && (
        <WarningModal warning={warning} setWarning={setWarning} />
      )}
      <Banner />
      <SaForm
        animation="fade-up"
        duration="1000"
        warning={warning}
        setWarning={setWarning}
        navigate={navigate}
      />
    </>
  );
};

export default ShortAnswerQuestion;
