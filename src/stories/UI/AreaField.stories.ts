import { AreaField } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AreaField> = {
  title: "UI/AreaField",
  component: AreaField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "The title",
    maxLen: 500
  },
};
