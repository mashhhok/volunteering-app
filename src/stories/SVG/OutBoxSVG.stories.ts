import { OutBoxSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OutBoxSVG> = {
  title: 'SVG/OutBoxSVG',
  component: OutBoxSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};