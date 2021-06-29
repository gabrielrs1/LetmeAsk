import { createContext, ReactNode, useState } from "react";

type ContextProps = {
    color: string;
    handleChangeColor: () => void;
}

type StylePageContextProviderProps = {
    children: ReactNode;
}

export const StylePageContext = createContext({} as ContextProps)

export function StylePageContextProvider(props: StylePageContextProviderProps) {
    const [color, setColor] = useState('light')

    function handleChangeColor() {
        if(color === 'light') {
            return setColor('black')
        } else {
            return setColor('light')
        }
    }

    return (
        <StylePageContext.Provider value={{ color, handleChangeColor }}>
            {props.children}
        </StylePageContext.Provider>
    )
}