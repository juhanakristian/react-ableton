/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "dark" | "light";
}

const StyledRoundedButton = styled.button<ButtonProps>`
  padding: 3px 8px;
  background-color: ${(props) => (props.variant !== "light" ? "#aeaeae" : "#D7D7D7")};
  color: #000000;
  border: 1px solid #000000;
  border-radius: 50px;
  font-size: 0.8em;
  cursor: pointer;

  &:active {
    background-color: #fca827;
  }

  &:disabled {
    background-color: #7a7a7a;
    cursor: not-allowed;
  }
`;

function RoundedButton(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  return (
    <StyledRoundedButton ref={ref} {...props}>
      {props.children}
    </StyledRoundedButton>
  );
}

export default React.forwardRef(RoundedButton);
