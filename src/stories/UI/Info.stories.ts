import { Info } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Info> = {
  title: 'UI/Info',
  component: Info,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
    title: "The title",
    subtitle: 'Subtitle',
  }
  
};