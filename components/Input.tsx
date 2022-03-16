import React from 'react';
import { useForm, useController, UseControllerProps } from 'react-hook-form';

type Props = {
  value: string | string[];
};

function Input(props: UseControllerProps<Props>) {
  const { field, fieldState } = useController(props);

  return (
    <>
      <input className='p-4 rounded' {...field} />
      {fieldState.error && (
        <p className='text-red-500'>{fieldState.error.message}</p>
      )}
    </>
  );
}

export default Input;
