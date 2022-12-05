import { ReactNode } from 'react';

type ButtonProps = {
  children: string;
  variant: 'primary' | 'secondary';
  type: string;
  onClick?: () => void;
  onKeyDown?: () => void;
};

type SelectButtonProps = {
  children: ReactNode;
  value?: string;
  onChange?: () => void;
};

function Button({ children, type, variant, ...additionalProps }: ButtonProps) {
  return (
    <button
      className={`w-full md:w-auto mb-5 md:mb-0 inline-block h-auto py-[8px] px-[20px] border-none rounded font-medium text-base capitalize ${
        {
          primary: 'bg-[#64ffda] text-[#0a192f]',
          secondary: 'bg-[#8892b0] text-[#ccd6f6]',
        }[variant]
      }`}
      type={type === 'button' ? 'button' : 'submit'}
      {...additionalProps}>
      {children}
    </button>
  );
}

function SelectButton({ children, ...additionalProps }: SelectButtonProps) {
  return (
    <select
      className="w-full mb-6 md:mb-0 inline-block h-auto py-[8px] px-[20px] border-none rounded font-medium text-base capitalize md:w-[150px] bg-[#8892b0] text-[#ccd6f6]"
      {...additionalProps}>
      {children}
    </select>
  );
}

export { Button, SelectButton };
