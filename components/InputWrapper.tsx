import React from 'react';

type Props = {
  label: React.ReactNode;
  error: React.ReactNode;
  children: React.ReactNode;
};

const InputWrapper = (props: Props) => {
  return (
    <div className='flex flex-col gap-2 flex-1'>
      {props.error && <span>{props.error}</span>}
      <label>{props.label}</label>
      {props.children}
    </div>
  );
};

export default InputWrapper;
