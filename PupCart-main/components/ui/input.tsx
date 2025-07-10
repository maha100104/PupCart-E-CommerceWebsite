import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:border-primary hover:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  className
)}

        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
// import * as React from "react"
// import { cn } from "@/lib/utils"

// const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background",
//           "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
//           "placeholder:text-muted-foreground",
//           // Add hover, focus, and invalid border ring effects with primary color
//           "hover:border-primary",
//           "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
//           "invalid:border-primary invalid:focus-visible:ring-primary",
//           "disabled:cursor-not-allowed disabled:opacity-50",
//           "md:text-sm",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )

// Input.displayName = "Input"

// export { Input }
