/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }

  &:disabled {
    background-color: #7a7a7a;
    cursor: not-allowed;
  }
`;

function RoundedButton(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledButton ref={ref} {...props}>
      {props.children}
    </StyledButton>
  );
}

export default React.forwardRef(RoundedButton);
