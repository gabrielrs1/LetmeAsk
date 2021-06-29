import { useContext } from "react"
import { StylePageContext } from "../context/StylePageContext";

export function useStylePage() {
    const value = useContext(StylePageContext)

    return value;
}