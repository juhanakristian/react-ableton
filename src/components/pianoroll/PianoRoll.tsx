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

const KeysContainer = styled.div`
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
  background-color: white;
  border: 1px solid black;
  border-top: none;
  border-bottom: 1px solid black;
  height: 20px;
  width: 50px;
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
  position: relative;
  display: flex;
  flex-direction: column;
`;

function Octave() {
  return (
    <OctaveContainer>
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
    </OctaveContainer>
  );
  return (
    <OctaveContainer>
      <PianoKey />
      <BlackKey />
      <PianoKey />
      <BlackKey />
      <PianoKey />
      <BlackKey />
      <PianoKey />
      <PianoKey />
      <BlackKey />
      <PianoKey />
      <BlackKey />
      <PianoKey />
    </OctaveContainer>
  );
}

export type PianoRollProps = {};

export default function PianoRoll({}: PianoRollProps) {
  const notes = Array.from({ length: 48 }, (_, i) => i);
  const beats = Array.from({ length: 4 }, (_, i) => i);
  const bars = Array.from({ length: 4 }, (_, i) => i);
  return (
    <Container>
      <ScrollContainer>
        <KeysContainer>
          <Octave />
          <Octave />
          <Octave />
          <Octave />
        </KeysContainer>
        <GridContainer>
          {bars.map((bar) => beats.map((beat) => notes.map((note) => <GridNote key={note} />)))}
        </GridContainer>
      </ScrollContainer>
    </Container>
  );
}
