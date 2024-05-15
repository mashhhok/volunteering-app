import { colors } from "@/shared/enums";
import { LinearDivider } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinearDivider> = {
  title: "UI/LinearDivider",
  component: LinearDivider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    h: "2px",
    w: "500px",
    color: colors.violet,
    deg: 0,
  },
};
