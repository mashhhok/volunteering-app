import { CopySVG } from "@/shared/svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CopySVG> = {
  title: "SVG/CopySVG",
  component: CopySVG,
  // argTypes: {
  //   fill: {
  //     type: "string",
  //   },
  //   width: {
  //     type: "string",
  //   },
  //   height: {
  //     type: "string",
  //   },
  //   bg: {
  //     type: "string",
  //   },
  //   style: {},
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
