import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const ScrollContainer = styled.div`
  max-height: 300px;
  overflow-x: scroll;
  overflow-y: scroll;
  height: 100%;
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

const GridContainer = styled.div<{ columns: number; rows: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-auto-flow: column;
`;

const BarContainer = styled.div`
  :nth-child(odd) {
    opacity: 0.7;
  }
`;

const GridNote = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  border-top: none;
  background-color: #a0a0a0;
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
    background-color: #848484;
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
  flex-direction: column;
`;

const OctaveTitle = styled.span`
  font-family: sans-serif;
  position: absolute;
  bottom: 4px;
  left: 4px;
  font-size: 14px;
`;

const OctaveDivider = styled.div`
  border-bottom: 1px solid black;
  width: 100px;
`;

const Note = styled.div<{ length: number; start: number }>`
  background-color: #fb513e;
  width: ${(props) => props.length}px;
  height: 20px;
`;

type OctaveProps = {
  root: string;
};
function Octave({ root }: OctaveProps) {
  return (
    <OctaveContainer>
      <OctaveTitle>{root}</OctaveTitle>
      <OctaveDivider />
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
  length: number;
};
export default function PianoRoll(
  { timeSignature, length }: PianoRollProps = {
    timeSignature: { counts: 4, measure: 4 },
    length: 8,
  },
) {
  const octaves = [8, 7, 6, 5, 4, 3, 2, 1, 0];
  const notes = Array.from({ length: octaves.length * 12 }, (_, i) => i);
  const beats = Array.from({ length: timeSignature.counts }, (_, i) => i);
  const bars = Array.from({ length: length }, (_, i) => i);

  return (
    <Container>
      <ScrollContainer>
        <PianoRollOctaves>
          {octaves.map((o) => (
            <Octave key={o} root={`C${o}`} />
          ))}
        </PianoRollOctaves>
        {bars.map((i) => (
          <BarContainer key={i}>
            <GridContainer rows={octaves.length * 12} columns={timeSignature.counts}>
              {beats.map(() => notes.map((note) => <GridNote key={note} />))}
            </GridContainer>
          </BarContainer>
        ))}
      </ScrollContainer>
    </Container>
  );
}
