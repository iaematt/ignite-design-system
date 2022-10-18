import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Button component',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
    outline: true,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    outline: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
    outline: false,
    disabled: true,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <a href="https://google.com" target="_blank">
        Link example
      </a>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      table: {
        disable: true,
      },
    },
  },
};
