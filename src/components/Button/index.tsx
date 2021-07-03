import { ButtonHTMLAttributes } from "react"

import { ButtonStyle } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
    color: string;
}

export function Button({ isOutlined = false, color, ...props }: ButtonProps) {
    return (
        <ButtonStyle
         className={`button ${isOutlined ? 'outlined' : ""}`}
         color={color}
         {...props} />
    )
}