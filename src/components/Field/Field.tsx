import React, { FC } from 'react';
import { TextInput } from 'react-native';

type FieldT = {
  onChange: (val: string)=> void,
  value: string,
  placeholder: string,
  isSecure?: boolean
}

const Field:FC<FieldT> = (props) => {
  const {onChange, value, placeholder, isSecure} = props;

  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize={'none'}
    />
  )
}

export default Field