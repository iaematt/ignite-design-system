import { Meta, StoryObj } from '@storybook/react';

import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Type your message',
    rows: 4,
  },
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {};
