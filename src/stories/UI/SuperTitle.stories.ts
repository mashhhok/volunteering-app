import { colors } from "@/shared/enums";
import { SuperTitle } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SuperTitle> = {
  title: "UI/SuperTitle",
  component: SuperTitle,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: 1,
    color: colors.black,
    children: "Super Title",
  },
};
