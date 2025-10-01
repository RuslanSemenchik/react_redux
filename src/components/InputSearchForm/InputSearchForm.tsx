import {  InputComponent } from "./styles";

import { type InputProps } from "./types";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  disabled = false,
  error = undefined,
  value,
  onChange,
}: InputProps) {
  return (
 
      <InputComponent
        disabled={disabled}
        $error={error}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    
 
  );
}

export default Input;