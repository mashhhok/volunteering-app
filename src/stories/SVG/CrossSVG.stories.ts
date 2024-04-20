import { CrossSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CrossSVG> = {
  title: 'SVG/CrossSVG',
  component: CrossSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};