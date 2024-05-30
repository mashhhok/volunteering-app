import { LoaderOvalSVG } from '@/shared/svg';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoaderOvalSVG> = {
  title: 'SVG/LoaderOvalSVG',
  component: LoaderOvalSVG,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
  }
};