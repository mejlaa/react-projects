import React, { useState } from "react";
import RegistrationFormInput from "./RegistrationFormInput";

const RegistrationForm = () => {
  const [regValue, setRegValue] = useState("");

  return (
    <div>
      <RegistrationFormInput />
    </div>
  );
};

export default RegistrationForm;
