export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-[20px] font-medium text-base hover:rounded-none cursor-pointer border transition-all duration-300 ease-in-out h-10";

  const variantStyles = {
    primary: "bg-black text-white border-transparent",
    secondary: "bg-transparent text-black border-border",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}