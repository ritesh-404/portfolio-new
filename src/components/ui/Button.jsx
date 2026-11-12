// components/Button.jsx
const sizeStyles = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2.5 text-sm",
};

const variantStyles = {
  primary: "border border-black bg-black text-white hover:bg-neutral-800",
  secondary: "border border-neutral-400 bg-transparent text-neutral-900 hover:bg-neutral-100",
};

const Button = ({
  children,
  href,
  external = false,
  onClick,
  type = "button",
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = `inline-flex box-border cursor-pointer items-center justify-center gap-2 font-geist-sans font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant] ?? variantStyles.primary} ${sizeStyles[size] ?? sizeStyles.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
