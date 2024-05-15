import { LeftArrowSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LeftArrowSVG> = {
  title: 'SVG/LeftArrowSVG',
  component: LeftArrowSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};