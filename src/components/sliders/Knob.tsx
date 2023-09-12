/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { arcPath, arcPoint } from "./util";

const Container = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  box-sizing: border-box;
  outline: none;
`;

const FocusContainer = styled.div`
  position: absolute;
  width: 60px;
  height: 90px;
`;

type FocusCornerProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;

  transform?: string;
};

const FocusCorner = styled.div<FocusCornerProps>`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  width: 6px;
  height: 6px;
  border-left: 1px solid #181818;
  border-top: 1px solid #181818;
`;

const KnobTitle = styled.label`
  font-family: Sans-Serif;
  font-size: 0.7em;
  color: #000000;
`;

const KnobValue = styled.span`
  font-family: Sans-Serif;
  font-size: 0.8em;
  color: #000000;
`;

export type KnobProps = {
  value: number;
  disabled?: boolean;
  title: string | React.ReactNode;
  range?: [number, number];
  formatter?: (value: number) => string;
  onChange?: (value: number) => void;
};

export default function Knob(props: KnobProps) {
  const [focused, setFocused] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  function onMouseDown(event: React.MouseEvent<any>) {
    event.preventDefault();

    const startY = event.clientY;

    function onMouseMove(event: MouseEvent) {
      const [min, max] = props.range || [0, 1];
      const change = ((startY - event.clientY) / 100) * (max - min);
      const value = Math.min(max, Math.max(min, props.value + change));

      if (props.onChange) {
        props.onChange(value);
      }
    }

    function onMouseUp(_event: MouseEvent) {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    containerRef.current?.focus();
  }

  const [min, max] = props.range || [0, 1];
  const position = (props.value - min) / (max - min);

  const cx = 20;
  const cy = 20;
  const r = 15;

  const startAngle = 130;
  const endAngle = 410;
  const gap = 14; // Gap between the two arcs

  const valueArc = arcPath(cx, cy, r, startAngle, startAngle + (endAngle - startAngle) * position);

  const bgArcStart = Math.min(startAngle + (endAngle - startAngle) * position + gap, endAngle);
  const arc = arcPath(cx, cy, r, bgArcStart, endAngle);

  const valuePoint = arcPoint(cx, cy, r, startAngle + (endAngle - startAngle) * position);

  const formattedValue = props.formatter ? props.formatter(props.value) : props.value.toFixed(2);

  return (
    <Container
      focused={focused}
      ref={containerRef}
      tabIndex={-1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {focused && (
        <FocusContainer>
          <FocusCorner left="0px" top="5px" />
          <FocusCorner right="0px" top="5px" transform="rotate(90deg)" />
          <FocusCorner right="0px" bottom="5px" transform="rotate(180deg)" />
          <FocusCorner left="0px" bottom="5px" transform="rotate(-90deg)" />
        </FocusContainer>
      )}
      {typeof props.title === "string" ? <KnobTitle>{props.title}</KnobTitle> : props.title}
      <svg width={40} height={40} onMouseDown={onMouseDown}>
        <path d={arc} fill="none" strokeWidth={3} strokeLinecap="round" stroke="#181818" />
        <path d={valueArc} fill="none" strokeWidth={3} strokeLinecap="round" stroke="#54CFE8" />
        <path
          d={`M ${cx} ${cy} L ${valuePoint.x} ${valuePoint.y}`}
          fill="none"
          strokeWidth={3}
          strokeLinecap="round"
          stroke="#181818"
        />
      </svg>
      <KnobValue>{formattedValue}</KnobValue>
      <input
        hidden
        value={props.value}
        type="range"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => (props.onChange ? props.onChange(parseFloat(e.target.value)) : undefined)}
      ></input>
    </Container>
  );
}
