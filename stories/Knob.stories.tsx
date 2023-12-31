import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Knob, { KnobProps } from "../src/components/sliders/Knob";

const ControlledKnob = (props: KnobProps) => {
  const [value, setValue] = React.useState(props.value);
  return <Knob {...props} value={value} onChange={(v: number) => setValue(v)} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Knob",
  component: Knob,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  render: ControlledKnob,
} satisfies Meta<typeof Knob>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Initial: Story = {
  args: { value: 0.5, title: "Title" },
};

export const Range: Story = {
  args: { value: 50, title: "Range", range: [0, 100] },
};

export const Formatting: Story = {
  args: { value: 50, title: "Range", range: [0, 100], formatter: (v) => `${v.toFixed(0)} ms` },
};
