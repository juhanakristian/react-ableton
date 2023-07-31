/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { arcPath } from "./util";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KnobTitle = styled.label`
  font-family: Sans-Serif;
  font-size: 0.8em;
  color: #000000;
`;

const KnobValue = styled.span`
  font-family: Sans-Serif;
  font-size: 0.9em;
  color: #000000;
`;

type KnobProps = {
  value: number;
  disabled?: boolean;
  title: string | React.ReactNode;
  onChange?: (value: number) => void;
};

function Knob(props: KnobProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const [dragStart, setDragStart] = React.useState<[number, number]>([0, 0]);

  const arc = arcPath(25, 25, 20, 130, 410);
  const valueArc = arcPath(25, 25, 20, 130, 130 + (410 - 130) * props.value);

  function onMouseMove(event: MouseEvent) {
    const value = Math.min(1, Math.max(0, props.value + (dragStart[1] - event.clientY) / 100));

    if (props.onChange) {
      props.onChange(value);
    }
  }

  function onMouseUp(event: MouseEvent) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  function onMouseDown(event: React.MouseEvent<any>) {
    event.preventDefault();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    const startX = event.clientX;
    const startY = event.clientY;

    setDragStart([startX, startY]);
  }

  return (
    <Container>
      {typeof props.title === "string" ? <KnobTitle>{props.title}</KnobTitle> : props.title}
      <svg width={50} height={45} onMouseDown={onMouseDown}>
        <path d={arc} fill="none" strokeWidth={5} strokeLinecap="round" stroke="#181818" />
        <path d={valueArc} fill="none" strokeWidth={5} strokeLinecap="round" stroke="#54CFE8" />
      </svg>
      <KnobValue>{props.value.toFixed(2)}</KnobValue>
      <input
        hidden
        ref={ref}
        value={props.value}
        type="range"
        onChange={(e) => (props.onChange ? props.onChange(parseFloat(e.target.value)) : undefined)}
      ></input>
    </Container>
  );
}

export default React.forwardRef(Knob);
