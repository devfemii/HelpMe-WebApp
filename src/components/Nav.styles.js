import styled from "styled-components";
import { breakpoints, sizes } from "../styles/theme";

export const MainNav = styled.div`
    margin: 0 auto;
    max-width: ${sizes.wrapperWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    span{
        display: flex;
        align-self: center;
        gap: 6px;
        img{
            width: 40px;
            height: 40px;
        }
        p{
            color: var(--primary-primary-600, #100A42);
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
        }
    }
    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
        li{
            list-style: none;
            font-family: Work Sans, sans-serif;
            font-weight: 500;
            font-size: 16px;
        }
        ${breakpoints.md}{
            display: none;
        }
    }
    h3{
        color: var(--primary-main, #120B48);
        text-align: center;
        font-family: Sora;
        font-size: 16px;
        font-weight: 600;
    }
    ${breakpoints.md}{
        padding: 20px;
    }
`