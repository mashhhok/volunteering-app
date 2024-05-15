import { ShadowBox } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShadowBox> = {
  title: 'UI/ShadowBox',
  component: ShadowBox,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
    title: "The title",
    subtitle: 'Subtitle',
  }
  
};