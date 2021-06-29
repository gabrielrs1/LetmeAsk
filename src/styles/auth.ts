import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;

        background: #835afd;
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 88px;
    
        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px 'Poppins', sans-serif;
            line-height: 42px;
            margin-top: 36px;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;
        }
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        .button-style {
            position: absolute;
            top: 20px;
            right: 20px;
            border: 0;
            padding: 10px 20px;
        }
    }

    .black {
        background: #737380; 
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;  

        > img {
            align-self: center;
        }

        .text-info {
            display: none;
        }

        h2 {
            font-size: 24px;
            margin: 64px 0 24px;
            font-family: 'Poppins', sans-serif;
        }

        form {
            input {
                height: 50px;
                border-radius: 8px;
                padding: 0 16px;
                background: #fff;
                border: 1px solid #a8a8b3;
            }

            button {
                margin-top: 16px;
            }

            button, input {
                width: 100%;
            }
        }

        p {
            font-size: 14px;
            color: #737380;
            margin-top: 16px;

            a {
                color: #e559f9;
            }
        }
    }

    .create-room {
        margin-top: 64px;
        height: 58px;
        border-radius: 8px;
        font-weight: 500;
        background: #ea4335;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        transition: 0.2s;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    .separator {
        font-size: 14px;
        color: #a8a8b3;
        
        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-right: 16px;
        }

        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-left: 16px;
        }
    }

    @media(max-width: 875px) {
        aside {
            display: none;
        }

        main {
            padding: 0 15px;
        }

        .main-content {
            max-width: 400px;

            .text-info {
                display: block;

                font-size: 18px;
            }
        }
    }
`