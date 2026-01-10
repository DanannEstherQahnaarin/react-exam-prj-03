import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Buttons';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    color: 'warning',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    color: 'primary',
  },
};

export const CustomColors: Story = {
  args: {
    label: 'Custom Colors Button',
    backgroundColor: '#9b59b6',
    fontColor: '#ffffff',
  },
};
