import { NextBtn } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NextBtn> = {
  title: "UI/NextBtn",
  component: NextBtn,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    children: 'Children'
  },
};
