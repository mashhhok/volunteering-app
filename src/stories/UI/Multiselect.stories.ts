import { MultiselectField } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultiselectField> = {
  title: "UI/MultiselectField",
  component: MultiselectField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "The title",
    bottomSection: "Bottom section",
    data: ["Data 1", "Data 2", "Data 3"],
  },
};
