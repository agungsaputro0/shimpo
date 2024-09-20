import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName?: string;
  inputPlaceholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputName, inputPlaceholder, ...rest } = props;

  return (
    <input
      {...rest}
      name={inputName}
      id={inputName}
      className="text-sm border-b-[1px] outline-0 w-full py-2 px-3 text-white placeholder:opacity-90 bg-transparent"
      placeholder={inputPlaceholder}
      ref={ref}
    />
  );
});

export default Input;