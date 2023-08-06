/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

export type InstrumentPanelProps = {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

const StyledPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Sans-Serif;
  min-width: 300px;

  border-radius: 8px;
`;

const StyledPanelTitleBar = styled.div<{ focused: boolean }>`
  display: flex;
  align-items: center;
  padding: 3px 8px;
  background-color: ${(props) => (props.focused ? "#9CB0BE" : "#A0A0A0")};
  color: #000000;
  font-size: 0.8em;
  font-weight: 600;
  height: 17px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 4px solid #9cb0be;
  border-bottom: none;
`;

const StyledPanelContent = styled.div`
  padding: 8px 8px;
  background-color: #848484;
  color: #000000;
  font-size: 0.8em;
  cursor: pointer;
  min-height: 50px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 4px solid #9cb0be;
  border-top: none;

  &:focus {
    border: 2px solid #000000;
  }
`;

function InstrumentPanel(props: InstrumentPanelProps) {
  const { title } = props;
  return (
    <StyledPanelContainer>
      <StyledPanelTitleBar focused={true}>{title}</StyledPanelTitleBar>
      <StyledPanelContent>{props.children}</StyledPanelContent>
    </StyledPanelContainer>
  );
}

export default React.forwardRef(InstrumentPanel);
