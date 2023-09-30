/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

const StyledDropdown = styled.select``;

const StyledDropdownItem = styled.div``;

type DropdownProps = {
  children?: React.ReactNode;
};

type DropdownItemProps = {
  children?: React.ReactNode;
};

export function DropdownItem({ children }: DropdownItemProps) {
  return <StyledDropdownItem>{children}</StyledDropdownItem>;
}

export default function Dropdown({ children }: DropdownProps) {
  return <StyledDropdown>{children}</StyledDropdown>;
}
