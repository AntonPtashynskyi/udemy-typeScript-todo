import { createGlobalStyle } from "styled-components";
import OpenSansLight from "./OpenSans-Light.ttf";
import OpenSansBold from "./OpenSans-Bold.ttf";
import UnboundedLight from "./Unbounded-Light.ttf";

export const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'Open Sans', sans-serif;
        src: url(${OpenSansLight}) format("ttf"),
    }

    @font-face {
        font-family: 'Open Sans Bold', sans-serif;
        src: url(${OpenSansBold}) format("ttf")
    }

    @font-face {
        font-family: 'Unbounded', cursive;
        src: url(${UnboundedLight}) format("ttf")
    }
`;
