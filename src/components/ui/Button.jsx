const variantStyles = {
  primary: "border border-black bg-black text-white hover:bg-neutral-800",
  secondary:
    "border border-neutral-400 bg-transparent text-neutral-900 hover:bg-neutral-100",
};

const Button = ({
  children,
  href,
  external = false,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = [
    "inline-flex min-h-12 box-border items-center justify-center gap-2",
    "px-5 py-3",
    "font-geist-sans text-base font-medium leading-6",
    "transition-all duration-150 active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant] ?? variantStyles.primary,
    className,
  ].join(" ");

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
