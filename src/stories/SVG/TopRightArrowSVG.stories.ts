import { TopRightArrowSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopRightArrowSVG> = {
  title: 'SVG/TopRightArrowSVG',
  component: TopRightArrowSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};