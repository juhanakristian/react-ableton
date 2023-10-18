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

// top with prop
const BlackKey = styled.div`
  background-color: black;
  border: 1px solid black;
  height: 20px;
  width: 50px;
`;

const WhiteKey = styled.div`
  background-color: white;
  border: 1px solid black;
  border-top: none;
  height: 20px;
  width: 50px;
  :first-of-type {
    border-top: 1px solid black;
  }
`;

const OctaveContainer = styled.div`
  position: relative;
`;

const KeysContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Octave() {
  return (
    <OctaveContainer>
      <KeysContainer>
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
      </KeysContainer>
    </OctaveContainer>
  );
}

export type PianoRollProps = {};

export default function PianoRoll({}: PianoRollProps) {
  return (
    <Container>
      <ScrollContainer>
        <Octave />
        <Octave />
        <Octave />
        <Octave />
      </ScrollContainer>
    </Container>
  );
}
