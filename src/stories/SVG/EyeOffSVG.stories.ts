import { EyeOffSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EyeOffSVG> = {
  title: 'SVG/EyeOffSVG',
  component: EyeOffSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};