import { Table } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    elements: [
      ["1", "2", "3", "m"],
      ["4", "5", "6", "m"],
      ["7", "8", "9", "m"],
    ],
  },
};
