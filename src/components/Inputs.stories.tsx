import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText, EamilText } from './Inputs';

const meta = {
  title: 'Components/Inputs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  render: () => <InputText />,
};

export const EmailInput: Story = {
  render: () => <EamilText />,
};
