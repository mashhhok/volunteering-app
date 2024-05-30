import { Warning } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Warning> = {
  title: 'UI/Warning',
  component: Warning,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
    title: "The title",
    subtitle: 'Subtitle',
  }
};