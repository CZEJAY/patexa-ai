import React from "react";
import { CardWrapper } from "./auth/CardWrapper";
import { BarLoader } from "react-spinners";

const EmailForm = () => {
  return (
    <CardWrapper
      headerLabel="Email sent"
      backButtonLabel="Login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        <BarLoader />
      </div>
    </CardWrapper>
  );
};

export default EmailForm;
