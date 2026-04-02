import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex relative cursor-pointer items-center font-medium justify-center gap-2 whitespace-nowrap ease-out transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 border border-primary/50 text-white hover:bg-primary/20 hover:border-primary/80 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] rounded-lg font-sans tracking-wide",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-destructive rounded-lg",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 rounded-lg",
        secondary:
          "bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-lg",
        ghost: "hover:bg-white/5 text-white/70 hover:text-white border-transparent rounded-lg",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-12 px-7 text-sm",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
}

export { Button, buttonVariants };
