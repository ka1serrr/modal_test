import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~shared";

export const btnVariants = cva(
  "rounded-md border border-white text-white transition-all hover:-translate-y-1 duration-150  min-w-[150px] p-3 ease-in disabled:hover:translate-y-0 disabled:bg-gray-600",
  {
    variants: {
      color: {
        danger: ["bg-red-500", "font-semibold"],
        accept: ["bg-green-500", "font-medium"],
      },
    },
    defaultVariants: {
      color: "accept",
    },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof btnVariants>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, color, children } = props;
  return (
    <button className={cn(btnVariants({ color, className }))} {...props} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
