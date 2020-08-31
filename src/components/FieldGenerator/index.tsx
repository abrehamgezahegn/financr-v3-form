import React from "react";
import { Controller } from "react-hook-form";
import FormErrorMessage from "../FromErrorMessage";

type Props = {
  schema: any;
  state: any;
  register: any;
  errors: any;
  control?: any;
  fieldProps?: any;
};

const FieldGenerator = ({
  schema,
  state,
  register,
  errors,
  fieldProps = {},
  control,
}: Props) => {
  return (
    <div>
      {schema.map((item: any) => {
        if (item.type === "input") {
          if (item.subType === "text")
            return (
              <div className="input-container">
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  id={item.name}
                  name={item.name}
                  ref={register(item.validation)}
                  {...(fieldProps as any)[item.name]}
                />
                <FormErrorMessage
                  errors={errors}
                  name={item.name}
                  className="error"
                />
              </div>
            );

          if (item.subType === "number")
            return (
              <div className="input-container">
                <label htmlFor={item.name}>{item.label}</label>
                <input
                  id={item.name}
                  type="number"
                  name={item.name}
                  ref={register(item.validation)}
                  {...fieldProps[item.name]}
                />
                <FormErrorMessage
                  errors={errors}
                  name={item.name}
                  className="error"
                />{" "}
              </div>
            );
        }
        if (item.type === "radio")
          return (
            <div className="input-container">
              <label htmlFor={item.name}>{item.label}</label>
              {item?.options?.map((option: any) => (
                <div>
                  <input
                    type="radio"
                    id={option.label}
                    name={item.name}
                    value={option.value}
                    ref={register(item.validation)}
                    {...(fieldProps as any)[item.name]}
                  />
                  <label htmlFor={option.label}>{option.label}</label>
                </div>
              ))}
              <FormErrorMessage
                errors={errors}
                name={item.name}
                className="error"
              />{" "}
            </div>
          );

        if (item.type === "select") {
          return (
            <div className="input-container">
              <label htmlFor={item.name}>{item.label}</label>
              <select
                id={item.name}
                name={item.name}
                ref={register(item.validation)}
                {...(fieldProps as any)[item.name]}
              >
                {item.options?.map((option: any) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          );
        }
        if (item.type === "textArea") {
          return (
            <div className="input-container">
              <label htmlFor={item.name}>{item.label}</label>
              <textarea
                id={item.name}
                name={item.name}
                ref={register(item.validation)}
                {...(fieldProps as any)[item.name]}
              />
              <FormErrorMessage
                errors={errors}
                name={item.name}
                className="error"
              />{" "}
            </div>
          );
        }
      })}
    </div>
  );
};

export default FieldGenerator;
