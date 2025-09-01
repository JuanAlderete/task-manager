interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

function Button({
  className = "",
  onClick,
  children,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] font-medium rounded-lg py-2 px-3 text-sm cursor-pointer flex items-center gap-2 " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
