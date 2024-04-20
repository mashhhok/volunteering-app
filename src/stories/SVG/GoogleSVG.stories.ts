import { GoogleSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GoogleSVG> = {
  title: 'SVG/GoogleSVG',
  component: GoogleSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};