import styled from "styled-components";

type ColorProps = {
    color: string;
}

export const ButtonStyle = styled.button<ColorProps>`
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.color === 'black' ? '#6649bb' : '#835afd'};
    color: #fff;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    img {
        margin-right: 8px;
    }

    &.outlined {
        background: ${props => props.color === 'black' ? '#f1f1f1' : '#fff'};
        border: 1px solid #835afd;
        color: #835afd;
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`