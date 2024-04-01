import type { Meta, StoryObj } from "@storybook/react";
import Keyboard from "../src/components/keyboard/Keyboard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Keyboard",
  component: Keyboard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark: Story = {
  args: { timeSignature: { counts: 4, measure: 4 }, length: 2 },
};

export const Light: Story = {
  args: { timeSignature: { counts: 4, measure: 4 }, length: 2 },
};
