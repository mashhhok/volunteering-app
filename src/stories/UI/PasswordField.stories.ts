import { PasswordField } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PasswordField> = {
  title: "UI/PasswordField",
  component: PasswordField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rightSectionError: "Right error",
    leftSectionError: "Left error",
    rules: {
      maxWidth: 100,
      minWidth: 2,
      isEmail: false,
      noSpacing: false,
      specialChars: "",
      onlyEnglish: true,
      debounceTimeout: 100,
      withDebounce: true,
    },
  },
};
