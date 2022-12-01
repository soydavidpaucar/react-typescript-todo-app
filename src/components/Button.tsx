import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

type ButtonProps = {
  children: string;
  variant: 'primary' | 'secondary';
  type: string;
};

type SelectButtonProps = {
  children: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >['children'];
};

function Button({ children, type, variant }: ButtonProps) {
  return (
    <button
      className={`inline-block h-auto py-[8px] px-[20px] border-none rounded font-medium text-base capitalize ${
        {
          primary: 'bg-[#64ffda] text-64ffda[#]',
          secondary: 'bg-[#8892b0] text-[#ccd6f6]',
        }[variant]
      }`}
      type={type === 'button' ? 'button' : 'submit'}>
      {children}
    </button>
  );
}

function SelectButton({ children }: SelectButtonProps) {
  return (
    <select className="inline-block h-auto py-[8px] px-[20px] border-none rounded font-medium text-base capitalize w-[150px] bg-[#8892b0] text-[#ccd6f6]">
      {children}
    </select>
  );
}

export { Button, SelectButton };
