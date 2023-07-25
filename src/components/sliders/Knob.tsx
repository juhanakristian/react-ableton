/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

interface KnobProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  disabled?: boolean;
}

const StyledKnob = styled.input<KnobProps>`
  width: 75px;
  height: 75px;

  padding: 3px 3px;
  background-color: "#aeaeae";
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

const Arc = styled.path`
  stroke: #000000;
  stroke-width: 5;
  fill: none;
`;

function Knob(props: KnobProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <>
      <svg width={60} height={60}>
        <Arc d="M 40 55 a 25 25 0 1 0 -20 0" strokeLinecap="round" />
        <path
          d="M 30 30 L 30 10"
          stroke="black"
          strokeWidth={5}
          strokeLinecap="round"
        />
      </svg>
      <StyledKnob ref={ref} {...props} value={props.value} type="range">
        {props.children}
      </StyledKnob>
    </>
  );
}

export default React.forwardRef(Knob);
