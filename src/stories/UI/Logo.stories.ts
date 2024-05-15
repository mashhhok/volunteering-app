import { Logo } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  title: "UI/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
