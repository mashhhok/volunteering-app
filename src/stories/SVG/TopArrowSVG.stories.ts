import { TopArrowSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopArrowSVG> = {
  title: 'SVG/TopArrowSVG',
  component: TopArrowSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};