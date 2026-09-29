// components/Button.jsx
const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
};

const Button = ({
  children,
  href,
  external = false,
  onClick,
  type = "button",
  size = "md",
  className = "",
  ...props
}) => {
  const classes = `inline-flex items-center justify-center rounded-full bg-black text-white font-mono tracking-tight border border-white/40 ring-1 ring-inset ring-offset-2 ring-offset-black ring-white/70 hover:bg-[#313131] transition-colors duration-200 cursor-pointer ${sizeStyles[size]} ${className}`;

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
