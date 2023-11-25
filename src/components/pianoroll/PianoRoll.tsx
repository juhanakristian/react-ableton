import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 1000px;
  display: flex;
`;

const PianoRollOctaves = styled.div`
  height: 100%;
  background-color: #a0a0a0;
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(48, 1fr);
  grid-auto-flow: column;
  height: 100%;
  width: 100%;
`;

const GridNote = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-top: none;
  background-color: #ccc;
  height: 20px;
  width: 70px;
  :hover {
    background-color: #aaa;
  }
  :nth-child(12n + 2),
  :nth-child(12n + 4),
  :nth-child(12n + 6),
  :nth-child(12n + 9),
  :nth-child(12n + 11) {
    background-color: #aaa;
  }
`;

const PianoKey = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid black;
  border-top: none;
  border-bottom: 1px solid black;
  height: 20px;
  width: 30px;
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
  :last-child {
    border-bottom: none;
  }
`;

const OctaveContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 120px;
  border-bottom: 1px solid black;
`;

const KeysContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const OctaveTitle = styled.span`
  font-family: sans-serif;
  position: absolute;
  bottom: 4px;
  left: 4px;
  font-size: 14px;
`;

type OctaveProps = {
  root: string;
};
function Octave({ root }: OctaveProps) {
  return (
    <OctaveContainer>
      <OctaveTitle>{root}</OctaveTitle>
      <KeysContainer>
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
        <PianoKey />
      </KeysContainer>
    </OctaveContainer>
  );
}

export type TimeSignature = {
  counts: 2 | 4 | 3 | 6;
  measure: 4 | 8;
};

export type PianoRollProps = {
  timeSignature: TimeSignature;
};
export default function PianoRoll({ timeSignature }: PianoRollProps) {
  const notes = Array.from({ length: 48 }, (_, i) => i);
  const beats = Array.from({ length: 4 }, (_, i) => i);
  const bars = Array.from({ length: 4 }, (_, i) => i);

  return (
    <Container>
      <ScrollContainer>
        <PianoRollOctaves>
          <Octave root="C6" />
          <Octave root="C5" />
          <Octave root="C4" />
          <Octave root="C3" />
        </PianoRollOctaves>
        <GridContainer>
          {bars.map(() => beats.map(() => notes.map((note) => <GridNote key={note} />)))}
        </GridContainer>
      </ScrollContainer>
    </Container>
  );
}
