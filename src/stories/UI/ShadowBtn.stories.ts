import { ShadowBtn } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ShadowBtn> = {
  title: "UI/ShadowBtn",
  component: ShadowBtn,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "String",
  },
};
