/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1000;
`;

const StyledDropdown = styled.button`
  background-color: #d7d7d7;
  min-width: 100px;
  padding: 2px 5px;
  margin: 0;
  border: 1px solid #000000;
  font-size: 12px;
  text-align: left;
  :after {
    content: "▼";
    position: absolute;
    right: 5px;
    margin-left: 5px;
  }
`;

const StyledDropdownItem = styled.li`
  background-color: #d7d7d7;
  padding: 3px 3px;
  font-size: 12px;
  font-family: sans-serif;
  :hover {
    background-color: #c7c7c7;
  }
`;

const DropdownListContainer = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  top: 3px;
  /* pointer-events: none; */
`;

const DrowdownList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  border: 1px solid #000000;
  right: 0;
  padding: 0;
`;

export type DropdownProps = {
  children?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

export type DropdownItemProps = {
  value: string;
  children?: React.ReactNode;
};

export function DropdownItem({ children }: DropdownItemProps) {
  return <StyledDropdownItem>{children}</StyledDropdownItem>;
}

export default function Dropdown({ children, value, label, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(value: string) {
    console.log("handleItemClick", value);
    setIsOpen(false);
    onChange(value);
  }

  // Attach handleItemClick to each child
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.createElement(
        "div",
        {
          onClick: () =>
            handleItemClick((child as React.ReactElement<DropdownItemProps>).props.value),
        },
        React.cloneElement(child as React.ReactElement<DropdownItemProps>, {}),
      );
    }
    return child;
  });

  return (
    <DropdownContainer>
      <StyledDropdown onClick={handleClick}>{label}</StyledDropdown>
      <DropdownListContainer>
        {isOpen && <DrowdownList>{childrenWithProps}</DrowdownList>}
      </DropdownListContainer>
    </DropdownContainer>
  );
}
