import React from "react";
import styled from "styled-components";
import { error } from "console";

const Container = styled.div`
  .error-message {
    color: red;
  }
`;

type Props = {
  errors: object;
  name: string;
  className: string;
};

const FormErrorMessage = ({ errors, name, className }: Props) => {
  if ((errors as any)[name]) {
    return (
      <Container className={className}>
        <p className={`error-message ${className}`}>
          {(errors as any)[name].message}
        </p>
      </Container>
    );
  } else {
    return null;
  }
};

export default FormErrorMessage;
