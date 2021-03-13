import React, { useState } from 'react';
import { Meta } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import InputSet from './index';
import Input from '../../atoms/Input/index';

export default {
  title: 'Molecule/InputSet',
  decorators: [withKnobs],
  component: InputSet
} as Meta

export const Default: React.VFC<{}> = () => {
  const [value, setValue] = useState<string | number>('');

  return (
    <InputSet title={text('title', 'Eメールアドレス')} helpMessage={text('help', 'ヘルプ用の文言')}>
      <Input
        type={select('type', { text: 'text', number: 'number', url: 'url', email: 'email', password: 'password'}, 'email')}
        name={text('name', 'name')}
        value={value}
        placeholder={text('placeholder', 'placeholder')}
        required={boolean('required', false)}
        onChange={event => setValue(event.target.value)}
      />
    </InputSet>
  );
};
