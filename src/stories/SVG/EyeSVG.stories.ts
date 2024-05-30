import { EyeSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EyeSVG> = {
  title: 'SVG/EyeSVG',
  component: EyeSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};