import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Input from './index';

export default {
  title: 'Atom/Input',
  decorators: [withKnobs],
  component: Input
} as Meta

export const Default: React.VFC<{}> = () => {
  const [value, setValue] = useState<string | number>('');

  return (
    <Input
      type={select('type', { text: 'text', number: 'number', url: 'url', email: 'email', password: 'password'}, 'text')}
      name={text('name', 'name')}
      value={value}
      placeholder={text('placeholder', 'placeholder')}
      required={boolean('required', false)}
      onChange={event => setValue(event.target.value)}
    />
  );
}
