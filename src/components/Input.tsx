import { InputHTMLAttributes, forwardRef, useId } from "react";
type PropTypes = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  helperText?: string;
  borderColor?: string;
  ico?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, PropTypes>(
  ({ name = "", type = "text", label = "", helperText = "",ico, ...rest }, ref) => {
    const inputId = useId();
    const hasError = helperText?.length > 0;
   
    return (
      <div className="flex group flex-col gap-2 text-white text-sm ">
        {label && <label htmlFor={inputId}>{label}</label>}
            <div className={` text-xl border  ${hasError ? 'border border-red-500' :'border-transparent'} focus-within:border-cyan-500  placeholder:text-gray-400 w-full flex gap-2  bg-gray-800 p-3 rounded items-center `}>
          {ico && ico }
          <input
            className="text-sm w-full p-0  appearance-none outline-none bg-transparent border-none focus:ring-0 "
            name={name}
            id={inputId}
            type={type}
            ref={ref}
            {...rest}
          />
        </div>

        {helperText && <p className="text-xs text-red-500">{helperText}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };
