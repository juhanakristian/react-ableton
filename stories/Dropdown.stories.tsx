import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Dropdown, { DropdownItem } from "../src/components/dropdown/Dropdown";

type ControlledDropdownProps = {
  values: { value: string; label: string }[];
  value: string;
};

const ControlledDropdown = (props: ControlledDropdownProps) => {
  const [value, setValue] = React.useState(props.value);
  const label = props.values.find((v) => v.value === value)?.label;
  return (
    <Dropdown {...props} label={label} value={value} onChange={(v) => setValue(v)}>
      {props.values.map((v) => (
        <DropdownItem key={v.value} value={v.value}>
          {v.label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: ControlledDropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Initial: Story = {
  args: {
    value: "1",
    values: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
    ],
  },
};
