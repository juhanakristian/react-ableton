import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const PianoKey = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid black;
  border-top: none;
  border-bottom: 1px solid black;
  height: 40px;
  width: 20px;
  &:hover {
    background-color: #ccc;
  }
  :nth-child(12n + 2),
  :nth-child(12n + 4),
  :nth-child(12n + 6),
  :nth-child(12n + 9),
  :nth-child(12n + 11) {
    background-color: #000;
  }
`;

const OctaveContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-end;
  min-width: 120px;
  //border-bottom: 1px solid black;
`;

const KeysContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

type OctaveProps = {
  // Root note of octave as MIDI number
  root: number;
  onKeyDown?: (key: number) => void;
  onKeyUp?: (key: number) => void;
};

function Octave({ root, onKeyUp, onKeyDown }: OctaveProps) {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => root * 12 + k);
  return (
    <OctaveContainer>
      <KeysContainer>
        {keys.map((key) => (
          <PianoKey
            key={key}
            onMouseDown={() => onKeyDown?.(key)}
            onMouseUp={() => onKeyUp?.(key)}
            onMouseLeave={() => onKeyUp?.(key)}
          />
        ))}
      </KeysContainer>
    </OctaveContainer>
  );
}

const KeyboardOctaves = styled.div`
  height: 100%;
  background-color: #a0a0a0;
  display: flex;
  flex-direction: row;
`;

type KeyboardProps = {
  onKeyDown?: (key: number) => void;
  onKeyUp?: (key: number) => void;
};
export default function Keyboard({ onKeyDown, onKeyUp }: KeyboardProps) {
  const octaves = [1, 2, 3, 4];

  return (
    <Container>
      <KeyboardOctaves>
        {octaves.map((o) => (
          <Octave key={o} root={o * 12 + 12} onKeyUp={onKeyUp} onKeyDown={onKeyDown} />
        ))}
      </KeyboardOctaves>
    </Container>
  );
}
