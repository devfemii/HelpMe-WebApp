import styled from "styled-components";
import { breakpoints, sizes } from "./theme";

export const VideoWrap = styled.div`
    max-width: ${sizes.wrapperWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: left;
    .leftWrap{
        width: calc(100%/2);
        padding-right: 6rem;
        border: 1px solid #939393;
        border-top: 0;
        border-left: 0;
        border-bottom: 0;
        h2{
            color: #141414;
            font-family: Sora;
            font-size: 2.4rem;
            font-weight: 700;
        }
    }
    .rightWrap{
        width: calc(100%/2);
        padding-left: 1.5rem;
        img{
            max-width: 100%;
            max-height: 400px;
        }
        /* .frameWrap{
            border: 1px solid #413C6D;

        } */
    }
    .holdInput{
        width: calc(100% - 20px);
        margin: 10px 0;
        margin: 0;
        position: relative;
        input{
            border-radius: 16px;
            border: 0.5px solid var(--primary-primary-50, #E7E7ED);
            background: rgba(182, 179, 198, 0.20);
            padding: 10px 20px;
            height: 35px;
            width: 100%;
        }
        input::placeholder{
                color: rgba(67, 67, 67, 0.80);
                font-family: Work Sans;
                font-size: 18px;
                font-weight: 400;
            }
        .btn{
            position: absolute;
            right: -25px;
            top: 10px;
            display: flex;
            padding: 10px 18px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            color: #FFF;
            font-weight: 500;
            border: 0;
            border-radius: 8px;
            background: var(--primary-primary-300, #605C84);
        }
        .btnOut{
            background: transparent;
            color: #120B48;
            border: 1px solid #120B48;
            padding: 10px 15px;
            top: 8.5px;
            right: -30px;
            img{
                width: 18px;
                height: 18px;
            }
        }
    }
    ${breakpoints.lg}{
        flex-direction: column;

        .leftWrap{
            width: 100%;
            box-sizing: border-box;
            padding-right: 10px;
            border: 0;
            h2{
                font-size: 1.5rem;
            }
        }
        .rightWrap{
            width: 100%;
            padding: 0;
            padding-top: 30px;
        }
    }
`
export const VideoName = styled.div`
    margin-bottom: 30px;
    p{
        color: #727272;
        font-family: Sora;
        font-size: 1rem;
        font-weight: 500;
        margin: 0;
    }
    h3{
        color: var(--primary-primary-900, #08051E);
        font-family: Sora;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    span{
        display: flex;
        align-items: center;
        gap: 1rem;
        h5{
            color: var(--primary-primary-400, #413C6D);/
            font-family: Sora;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
            padding: .5rem 0;
        }
        img{
            width: 30px;
            height: 30px;
        }
    }
    .holdInput{
        input{
            background: #FAFAFA;
            border: 0.5px solid #929292;
        }
    }
    .btnWrap{
        display: flex;
        align-items: center;
        gap: 8px;
        .btnOut{
            background: transparent;
            color: #120B48;
            border: 1px solid #120B48;
            padding: 10px 15px;
            top: 8.5px;
            right: -30px;
            border-radius: 6px;
            padding: 10px 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            img{
                width: 18px;
                height: 18px;
        }
    }
    }
`

export const VideoName2 = styled(VideoName)`
    margin: 30px 0 30px 0;
    h3{
        font-size: 20px;
    }
`

export const VideoFoot = styled.div`
    margin: 20px auto;
    padding: 20px;
    background: rgba(231, 231, 237, 0.20);
    .foot{
        margin: 0 auto;
        max-width: 650px;
        h4{
            color: #141414;
            text-align: center;
            font-family: Sora;
            font-size: 24px;
            font-weight: 600;
        }
        .btn{
            padding: 16px 30px;
            gap: 8px;
            color: #FFF;
            font-weight: 500;
            font-size: 1rem;
            border: 0;
            border-radius: 8px;
            background: var(--primary-main, #120B48);
        }
        p{
            margin-top: 25px;
            color: #7E7E7E;
            text-align: center;
            font-family: Sora;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            span{
                color: #120B48;
                text-decoration: underline;
            }
        }
    }
`