/* eslint-disable quotes */
import { colorsProps } from "../types/colorTheme";

export const COLORS: colorsProps = {
    primary: {
        main: "#2260FF",
        dark: "#00278C",
        light: "#7714169e",
        100: "#ECF1FF",//placeholder bg
        200:"#809CFF",//placeholder color
        300: "#CAD6FF",
    },
    success: {
        high: "#027A48",
        main: "#12B76A",
        dark: "",
        light: "#31C07D",
    },
    error: {
        high: "#B54708",
        main: "#F04438",
        dark: "",
        light: "#F2594E",
        50: "#FEF6F5",
    },
    warning: {
        high: "#B42318",
        main: "#F79009",
        dark: "",
        light: "#F89C24",
    },
    greyscale: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
    },
    common: {
        white: "#FFFFFF",
        naviconbg: "#fdf7ef",
        transparent: "transparent",
        black: "#000000",
        backdrop: "#1c1926ed",
        modal: "#1c1926ad",
    }
}