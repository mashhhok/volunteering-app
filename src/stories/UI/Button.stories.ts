import { colors } from '@/shared/enums';
import { BlurButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlurButton> = {
  title: 'UI/BlurButton',
  component: BlurButton,
};
    
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    color: colors.violet,
    children: 'Children',
  }
  
};