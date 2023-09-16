/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

export type DevicePanelProps = {
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
  gap: 6px;
  padding: 0px 3px;
  background-color: ${(props) => (props.focused ? "#9CB0BE" : "#A0A0A0")};
  color: #000000;
  font-size: 11px;
  font-weight: 600;
  height: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 4px solid #9cb0be;
`;

const PanelTitleCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fca827;
  border: 0.8px solid #000000;
`;

const StyledPanelContent = styled.div`
  padding: 8px 8px;
  background-color: #a0a0a0;
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

export default function DevicePanel(props: DevicePanelProps) {
  const { title, children } = props;
  return (
    <StyledPanelContainer>
      <StyledPanelTitleBar focused={true}>
        <PanelTitleCircle />
        {title}
      </StyledPanelTitleBar>
      <StyledPanelContent>{children}</StyledPanelContent>
    </StyledPanelContainer>
  );
}
