import styled from "styled-components"
import { breakpoints } from "./theme"

export const Container = styled.section`
    padding: 20px 40px;
    background: #FFF;
    ${breakpoints.md}{
        padding: 20px;
    }
`