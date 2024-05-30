import { LocationSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LocationSVG> = {
  title: 'SVG/LocationSVG',
  component: LocationSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};