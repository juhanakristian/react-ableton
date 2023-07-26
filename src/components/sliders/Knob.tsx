/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { arcPath } from "./util";

interface KnobProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  disabled?: boolean;
}

function Knob(props: KnobProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const arc = arcPath(25, 25, 20, 130, 410);
  const valueArc = arcPath(25, 25, 20, 130, 130 + (410 - 130) * props.value);
  return (
    <>
      <svg width={60} height={60}>
        <path
          d={arc}
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          stroke="#181818"
        />
        <path
          d={valueArc}
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          stroke="#54CFE8"
        />
      </svg>
      <input hidden ref={ref} {...props} value={props.value} type="range">
        {props.children}
      </input>
    </>
  );
}

export default React.forwardRef(Knob);
