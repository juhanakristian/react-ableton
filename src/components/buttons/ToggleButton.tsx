/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

function activeColor(variant: string) {
  switch (variant) {
    case "yellow":
      return "#FCA827";
    case "blue":
      return "#396BFA";
    case "red":
      return "#FB513E";
    default:
      return "#000000";
  }
}

interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: boolean;
  children?: React.ReactNode;
  variant?: "yellow" | "blue" | "red";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledToggleButton = styled.button<
  ToggleButtonProps & { active: string }
>`
  padding: 3px 3px;
  background-color: ${(props) => (props.state ? props.active : "#aeaeae")};
  color: #000000;
  border: 1px solid #000000;
  font-size: 0.8em;
  cursor: pointer;
  height: 25px;

  &:disabled {
    background-color: #7a7a7a;
    cursor: not-allowed;
  }

  &:focus {
    border: 2px solid #000000;
  }
`;

function ToggleButton(
  props: ToggleButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledToggleButton
      ref={ref}
      {...props}
      active={activeColor(props.variant ?? "yellow")}
    >
      {props.children}
    </StyledToggleButton>
  );
}

export default React.forwardRef(ToggleButton);
