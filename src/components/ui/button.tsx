import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-gradient-to-br from-[#a67c2e] via-[#e0c27a] to-[#a67c2e] bg-[length:200%_auto] text-black hover:bg-right hover:-translate-y-0.5 shadow-lg shadow-black",
      outline: "border border-[#e0c27a]/20 bg-transparent text-[#e0c27a] hover:bg-[#e0c27a]/5 hover:border-[#e0c27a]/40",
      ghost: "hover:bg-[#e0c27a]/10 hover:text-[#e0c27a]",
      link: "text-[#e0c27a] underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-12 px-8 py-3",
      sm: "h-9 rounded-md px-4",
      lg: "h-14 rounded-md px-10",
      icon: "h-10 w-10 rounded-full",
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
