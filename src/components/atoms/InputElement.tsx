import React, { forwardRef, InputHTMLAttributes } from 'react';
import Label from './Label';

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  forwhat: string;
  labelMessage: string;
  typeInput: string;
  inputName: string;
  inputPlaceholder: string;
}

// Use forwardRef to handle ref forwarding
const InputElement = forwardRef<HTMLInputElement, InputElementProps>(({
  inputClass,
  forwhat,
  labelMessage,
  typeInput,
  inputName,
  inputPlaceholder,
  ...props
}, ref) => {
  return (
    <div className={inputClass}>
      <Label forwhat={forwhat} labelMessage={labelMessage} />
      <input
        name={inputName}
        id={inputName}
        type={typeInput}
        className="text-sm border-b-[1px] w-full py-2 px-2 text-white placeholder:opacity-90 bg-transparent focus:border-none"
        placeholder={inputPlaceholder}
        ref={ref} 
        {...props} 
      />
    </div>
  );
});


InputElement.displayName = 'InputElement';

export default InputElement;
