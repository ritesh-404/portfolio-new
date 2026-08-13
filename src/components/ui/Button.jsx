import { motion } from "motion/react";

export default function Button({
  children,
  variant = "primary", // 'primary' | 'secondary'
  icon: Icon, // Lucide icon or custom SVG component
  iconPosition = "right", // 'left' | 'right'
  className = "",
  onClick,
  type = "button",
  animate = false,
  ...props
}) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 ease-in-out outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-black ring-transparent cursor-pointer";

  const variantStyles = {
    primary: "bg-[#00c853] text-black border-transparent hover:ring-[#00c853]",
    secondary:
      "bg-[#18181b] text-white border-transparent hover:ring-neutral-700",
  };

  // const iconTransformStyles =
  //   iconPosition === "right"
  //     ? "transition-transform duration-300 ease-in-out group-hover:translate-x-1"
  //     : "transition-transform duration-300 ease-in-out group-hover:-translate-x-1";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
    >
      {/* Render icon on the left if specified */}
      {Icon && iconPosition === "left" && (
        <span>
          <Icon />
        </span>
      )}

      {/* Button text / label */}
      <span>{children}</span>

      {/* Render icon on the right if specified */}
      {Icon && iconPosition === "right" && (
        <span>
          <Icon />
        </span>
      )}
    </motion.button>
  );
}
