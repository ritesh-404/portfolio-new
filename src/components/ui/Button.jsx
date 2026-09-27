const Button = ({
  children,
  variant = "primary",
  badge = "P",
  showBadge = true,

  // Custom padding
  padding = null,
  badgePadding = "px-4 py-2",

  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium text-[16px] " +
    "transition-colors duration-150 focus:outline-none cursor-pointer font-inter text-nowrap";

  const variants = {
    primary:
      "bg-[#654EFD] text-white hover:bg-indigo-700 active:bg-indigo-800 " +
      "ring-2 ring-offset-2 ring-indigo-500",

    secondary:
      "bg-gray-100 text-black hover:bg-gray-200 " +
      "ring-2 ring-offset-2 ring-gray-300",
  };

  const defaultPadding = {
    primary: "pl-4 pr-1.5 py-1.5",
    secondary: "px-4 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${base}
        ${variants[variant]}
        ${padding ?? defaultPadding[variant]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {variant === "primary" && showBadge && badge && (
        <span
          className={`
            flex items-center justify-center
            rounded-md
            bg-[#8E8CFD]
            text-[14px]
            leading-none
            ${badgePadding}
          `}
        >
          {badge}
        </span>
      )}
    </button>
  );
};

export default Button;
