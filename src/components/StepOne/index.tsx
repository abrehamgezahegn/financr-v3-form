import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { schema } from "./schema";
import FieldGenerator from "../FieldGenerator";

type Inputs = {
  loanType: string;
  loanAmount: string;
  loanRequester: string;
  additionalInfo: string;
};

type Props = {
  stepOne: Inputs;
  onSubmit: (data: Inputs) => void;
};

const sleep = (delay: number) => {
  const time = new Date().getTime() + delay;
  while (new Date().getTime() < time);
};

const StepOne = ({ stepOne, onSubmit }: Props) => {
  const { register, errors, handleSubmit, setValue, control } = useForm<Inputs>(
    {
      defaultValues: stepOne,
    }
  );

  const [loanAmount, setLoanAmount] = useState("");
  const getUser = () => {
    // do backend

    // sleep(100);

    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json();

    let user = { name: "" };
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        user = data[0];
      });

    return user;
  };
  const [user, setUser] = useState(getUser);

  const onLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace("$", "");
    const num = JSON.stringify(parseInt(value));
    // console.log("numm is ", num);

    console.log("vlalue is ", value);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });

    console.log(formatter.format(parseInt(value)));

    // if (num === "null") {
    //   return;
    // }
    setLoanAmount(formatter.format(parseInt(value)));
    // console.log("loan ammoutn", value);
  };

  return (
    <Container>
      <FieldGenerator
        schema={schema}
        errors={errors}
        register={register}
        state={stepOne}
        control={control}
        fieldProps={{
          loanAmount: {
            onChange: onLoanAmountChange,
            value: loanAmount,
          },
        }}
      />
      <h1>{user.name}</h1>

      <button onClick={handleSubmit(onSubmit)}> Save and Continue </button>
    </Container>
  );
};

export default StepOne;
