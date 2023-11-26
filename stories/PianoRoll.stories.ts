import type { Meta, StoryObj } from "@storybook/react";
import PianoRoll from "../src/components/pianoroll/PianoRoll";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/PianoRoll",
  component: PianoRoll,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PianoRoll>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark: Story = {
  args: { timeSignature: { counts: 4, measure: 4 }, length: 8 },
};

export const Light: Story = {
  args: { timeSignature: { counts: 4, measure: 4 }, length: 8 },
};
