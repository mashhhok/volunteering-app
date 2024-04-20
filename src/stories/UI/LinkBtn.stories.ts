import { colors } from "@/shared/enums";
import { LinkBtn } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkBtn> = {
  title: "UI/LinkBtn",
  component: LinkBtn,
  
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "/about",
    children: "about",
    props: {color: colors.black},
    activeProps: {color: colors.violet},
  },
};
