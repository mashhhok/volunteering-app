import { RightArrowSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RightArrowSVG> = {
  title: 'SVG/RightArrowSVG',
  component: RightArrowSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};