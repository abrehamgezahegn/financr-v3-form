import { initialState, StepOneInputs, StepTwoInputs } from "./LoanRequest";

export type Action =
  | {
      type: "STEP_FORWARD";
      payload: StepOneInputs | StepTwoInputs;
    }
  | {
      type: "STEP_BACKWARD";
    }
  | {
      type: "SET_LOADING";
      payload: boolean;
    };

export const formReducer = (state = initialState, action: Action) => {
  if (action.type === "STEP_FORWARD") {
    return {
      ...state,
      step: state.step + 1,
      steps: { ...state.steps, [state.step - 1]: action.payload },
    };
  } else if (action.type === "STEP_BACKWARD") {
    return { ...state, step: state.step - 1 };
  } else if (action.type === "SET_LOADING") {
    return { ...state, loading: action.payload };
  }
  return state;
};
