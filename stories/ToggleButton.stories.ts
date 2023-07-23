import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "../src/components/buttons/ToggleButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/ToggleButton",
  component: ToggleButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Initial: Story = {
  args: { children: "Toggle Button", state: false },
};

export const Yellow: Story = {
  args: { children: "Yellow Toggle Button", state: true },
};

export const Red: Story = {
  args: { children: "Red Toggle Button", state: true, variant: "red" },
};

export const Blue: Story = {
  args: { children: "Blue Toggle Button", state: true, variant: "blue" },
};
