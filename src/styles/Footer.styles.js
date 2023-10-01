import styled from "styled-components";
import { breakpoints, sizes } from "./theme";

export const FooterWrap = styled.div`
    margin: 0 auto;
    max-width: ${sizes.wrapperWidth};
    padding: 60px 40px 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    span{
        display: flex;
        align-items: center;
        gap: 6px;
        img{
            width: 40px;
            height: 40px;
        }
        p{
            color: var(--primary-primary-600, #FFF);
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
        }
    }
    .footItem{
        display: block;
        text-align: left;
            h4{
                color: #FFF;
                font-family: Sora;
                font-size: 16px;
                font-weight: 600;
                margin: 0;
            }
            a{
                display: block;
                color: #FFF;
                font-family: Work Sans;
                font-size: 16px;
                font-weight: 400;
                text-decoration: none;
                margin: 1.5rem 0;
            }
        }
        ${breakpoints.md}{
            padding: 40px 20px 0 20px;
            flex-direction: column;
            gap: 2rem;
        }
`