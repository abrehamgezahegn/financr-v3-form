import React from "react";
import { useForm, Controller } from "react-hook-form";
import FieldGenerator from "../FieldGenerator";
import { Container } from "./styles";
import { schema } from "./schema";

type Inputs = {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  state: string;
};

type Props = {
  stepTwo: Inputs;
  onSubmit: (data: Inputs) => void;
  onBack: () => void;
};
const StepTwo = ({ stepTwo, onSubmit, onBack }: Props) => {
  const { register, errors, handleSubmit, setValue } = useForm<Inputs>({
    defaultValues: stepTwo,
  });

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("address change", e.target.value);
    console.log("something changed");
    const value = e.target.value;
    if (value === "ST") setValue("state", "ST");
  };

  return (
    <Container>
      <FieldGenerator
        schema={schema}
        errors={errors}
        register={register}
        state={stepTwo}
        fieldProps={{
          address: {
            onChange: onAddressChange,
          },
        }}
      />
      <button onClick={onBack}>Back</button>{" "}
      <button onClick={handleSubmit(onSubmit)}> Submit </button>
    </Container>
  );
};

export default StepTwo;
