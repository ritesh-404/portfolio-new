import { ArrowIcon } from "../icons";

const variants = {
  primary: {
    base: "bg-green-500 text-neutral-950 border-2 border-transparent hover:bg-green-600",
    padding: "pl-6 pr-4 py-2",
    defaultIcon: ArrowIcon,
    iconPosition: "right",
    shiftIcon: true,
  },
  secondary: {
    base: "bg-neutral-900 text-neutral-50 border-2 border-transparent hover:border-neutral-700",
    padding: "pl-6 pr-4 py-2",
    defaultIcon: ArrowIcon,
    iconPosition: "right",
    shiftIcon: true,
  },
  tertiary: {
    base: "bg-neutral-200 text-neutral-950 border-2 border-transparent hover:border-green-900",
    padding: "px-4 py-2",
    defaultIcon: null,
    iconPosition: "left",
    shiftIcon: false,
  },
};

export default function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  type = "button",
  ...props
}) {
  const config = variants[variant];
  const Icon = icon || config.defaultIcon;

  return (
    <button
      type={type}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-body
        text-sm
        font-medium
        transition-all
        duration-200
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${config.padding}
        ${config.base}
        ${className}
      `}
      {...props}
    >
      {config.iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}

      <span>{children}</span>

      {config.iconPosition === "right" && Icon && (
        <span
          className={`
            inline-flex
            transition-transform
            duration-200
            ${config.shiftIcon ? "group-hover:translate-x-1" : ""}
          `}
        >
          <Icon className="w-5 h-5" />
        </span>
      )}
    </button>
  );
}
