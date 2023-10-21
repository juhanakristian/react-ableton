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
  grid-template-rows: repeat(100, 1fr);
  height: 100%;
  width: 100%;
`;

// top with prop
const BlackKey = styled.div`
  background-color: black;
  border: 1px solid black;
  height: 20px;
  width: 50px;
  &:hover {
    background-color: #333;
  }
`;

const WhiteKey = styled.div`
  background-color: white;
  border: 1px solid black;
  border-top: none;
  height: 20px;
  width: 50px;
  &:hover {
    background-color: #ccc;
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
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
      <BlackKey />
      <WhiteKey />
    </OctaveContainer>
  );
}

export type PianoRollProps = {};

export default function PianoRoll({}: PianoRollProps) {
  return (
    <Container>
      <ScrollContainer>
        <KeysContainer>
          <Octave />
          <Octave />
          <Octave />
          <Octave />
        </KeysContainer>
      </ScrollContainer>
    </Container>
  );
}
