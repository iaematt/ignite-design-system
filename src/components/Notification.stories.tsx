import { Meta, StoryObj } from '@storybook/react';

import { Notification, NotificationProps } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  args: {
    type: 'info',
    children: 'Here is something that you might like to know.',
  },
  argTypes: {
    type: {
      options: ['danger', 'info', 'success'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<NotificationProps>;

export const Default: StoryObj<NotificationProps> = {};

export const Danger: StoryObj<NotificationProps> = {
  args: {
    type: 'danger',
    children: "Your account has been deleted and can't be restored.",
  },
};

export const Success: StoryObj<NotificationProps> = {
  args: {
    type: 'success',
    children: 'Your account has been successfully created.',
  },
};
