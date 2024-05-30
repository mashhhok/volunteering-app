import { RgbaBgLayout } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RgbaBgLayout> = {
  title: "UI/RgbaBgLayout",
  component: RgbaBgLayout,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "children",
  },
};
