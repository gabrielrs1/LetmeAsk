import styled from "styled-components";

type ColorProps = {
    color: string;
}

export const RoomCodeStyle = styled.button<ColorProps>`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background: #fff;
    border: 1px solid #835afd;
    cursor: pointer;
    
    display: flex;

    background: ${props => props.color === 'black' ? '#f1f1f1' : ''};

    div {
        height: 40px;
        background: ${props => props.color === 'black' ? '#6649bb' : '#836afd'};
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 230px;
        font-size: 14px;
        font-weight: 500;
    }
`