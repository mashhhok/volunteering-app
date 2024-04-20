import { BgImg } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BgImg> = {
  title: 'UI/BgImg',
  component: BgImg,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {
  args: {
    title: "The title",
    subtitle: 'Subtitle',
  }
  
};