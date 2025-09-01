interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

function Button(ButtonProps: ButtonProps) {
  return (
    <button
      className={
        "text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] font-medium rounded-lg py-2 px-3 text-sm cursor-pointer flex items-center gap-2 " +
        ButtonProps.className
      }
    >
      {ButtonProps.children || ""}
    </button>
  );
}

export default Button;
