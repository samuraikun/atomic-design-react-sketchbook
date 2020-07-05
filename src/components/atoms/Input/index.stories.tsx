import React, { useState } from 'react';
import Input from './index';

export default {
  title: 'Atom/Input',
  component: Input
}

export const Default = () => {
  const [value, setValue] = useState<string | number>('');

  return (
    <Input
      type='text'
      name='name'
      value={value}
      placeholder='placeholder'
      onChange={event => setValue(event.target.value)}
    />
  );
}
