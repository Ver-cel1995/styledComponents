import { createGlobalStyle } from "styled-components";
import { mytheme } from "./theme/Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    p {
        line-height: 20px;
    }

    body {
        background-color: ${mytheme.colors.grey.dark}
    }
`