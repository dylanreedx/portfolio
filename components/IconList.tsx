import React from 'react';
import Icon from './Icon';
export function IconList({}) {
  return (
    <div className='flex lg:flex-col gap-3'>
      <Icon size='6' link='https://github.com/carbondesigned' icon='GitHub' />
      <Icon size='6' link='https://linkedin.com/in/devdylan' icon='LinkedIn' />
      <Icon size='6' link='https://instagram.com/devdylanr' icon='Instagram' />
      <Icon size='6' link='https://twitter.com/devdylanr' icon='Twitter' />
    </div>
  );
}
