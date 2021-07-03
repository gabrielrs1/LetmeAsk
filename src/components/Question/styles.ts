import styled from "styled-components";

type ColorProps = {
    color: string;
}

export const QuestionStyle = styled.div<ColorProps>`
    background: ${props => props.color === 'black' ? '#f1f1f1' : '#fefefe'};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.84);
    padding: 24px;

    & + .question {
        margin-top: 8px;
    }

    
    &.highlighted {
        background: #f4f0ff;
        border: 1px solid #835afd;
        
        footer .user-info span {
            color: #29292e;
        }
    } 
    
    &.answered {
        background: #dbdcdd;
    }

    p {
        color: #29292e;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

        transition: filter 0.2s;

        .user-info {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            span {
                margin-left: 8px;
                color: #737380;
                font-size: 14px;
            }
        }

        > div {
            display: flex;
            gap: 16px;
        }

        button {
            border: 0;
            background: transparent;
            cursor: pointer;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: #737380;
                gap: 8px;

                &.liked {
                    color: #835afd;

                    svg path {
                        stroke: #835afd;
                    }
                }
            }

            &:hover {
                filter: brightness(0.7);
            }
        }
    }
`
