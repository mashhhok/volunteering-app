import { BackBtn } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackBtn> = {
  title: 'UI/BackBtn',
  component: BackBtn,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
    children: 'Back'
  }
  
};