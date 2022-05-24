import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

import Banner from "../../../../components/Banner";
import FcForm from "../../../../components/share/Form/FormFlashcard";
import WarningModal from "../../../../components/share/Modal/WarningModal";

interface FcProps {
  navigate: NavigateFunction;
}

const FlashCardQuestion = ({ navigate }: FcProps) => {
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {warning !== "" && (
        <WarningModal warning={warning} setWarning={setWarning} />
      )}
      <Banner />
      <FcForm
        animation="fade-up"
        duration="1000"
        warning={warning}
        setWarning={setWarning}
        navigate={navigate}
      />
    </>
  );
};

export default FlashCardQuestion;
