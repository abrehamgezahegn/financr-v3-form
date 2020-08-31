import React, { useReducer } from "react";
import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import { formReducer } from "./reducer";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

export type StepOneInputs = {
  loanType: string;
  loanAmount: string;
  loanRequester: string;
  additionalInfo: string;
};

export type StepTwoInputs = {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  state: string;
};

type State = {
  step: number;
  loading: boolean;
  steps: { 0: StepOneInputs; 1: StepTwoInputs };
};

export const initialState: State = {
  step: 1,
  loading: false,
  steps: {
    0: {
      loanType: "carLoan",
      loanAmount: "100000",
      loanRequester: "mySelf",
      additionalInfo: "wooo hooo",
    },
    1: {
      firstName: "",
      lastName: "",
      gender: "",
      address: "",
      state: "VIC",
    },
  },
};

const sleep = (delay: number) => {
  const time = new Date().getTime() + delay;
  while (new Date().getTime() < time);
};

const LoanRequest = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onNext = (data: StepOneInputs | StepTwoInputs) => {
    // console.log("data", data);

    console.log("submit to backend");
    sleep(2000);

    dispatch({ type: "STEP_FORWARD", payload: data });
  };

  const onBack = () => {
    dispatch({ type: "STEP_BACKWARD" });
  };

  return (
    <div>
      <h1>Loan request</h1>
      {state.step === 1 && (
        <StepOne stepOne={state.steps[0]} onSubmit={onNext} />
      )}
      {state.step === 2 && (
        <StepTwo stepTwo={state.steps[1]} onSubmit={onNext} onBack={onBack} />
      )}
    </div>
  );
};

export default LoanRequest;
