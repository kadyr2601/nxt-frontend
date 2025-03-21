import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
    return <div className={cn("w-full mx-auto px-5 sm:px-6 lg:px-8 max-w-[1600px]", className)} {...props} />
}

