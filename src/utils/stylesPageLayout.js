import { css } from "styled-components";

export const SECTION_SPACING = "60px";
export const SECTION_SPACING_TABLET = "78px";
export const SECTION_SPACING_MOBILE = "40px";

/**
 * minimum width for each supported device
 */
export const DEVICE_MINWIDTH = {
  MOBILE: 425, // < MOBILE  is mobile_s (use only when it has 4 design views)
  TABLET: 768, // < TABLET  is mobile
  DESKTOP: 1128, // < DESKTOP  = tablet,  >= DESKTOP is Desktop
};

/**
 * media query for used in styled-component based on DEVICE_MINWIDTH configs
 */
export const MEDIA = {
  MOBILE: (...args) => {
    return css`
      @media (max-width: ${DEVICE_MINWIDTH.TABLET - 0.001}px) {
        ${css(...args)}
      }
    `;
  },
  TABLET: (...args) => {
    return css`
      @media (min-width: ${DEVICE_MINWIDTH.TABLET}px) and (max-width: ${DEVICE_MINWIDTH.DESKTOP -
        0.001}px) {
        ${css(...args)}
      }
    `;
  },
  DESKTOP: (...args) => {
    return css`
      @media (min-width: ${DEVICE_MINWIDTH.DESKTOP}px) {
        ${css(...args)}
      }
    `;
  },
  NON_DESKTOP: (...args) => {
    return css`
      @media (max-width: ${DEVICE_MINWIDTH.DESKTOP - 0.001}px) {
        ${css(...args)}
      }
    `;
  },
  NON_MOBILE: (...args) => {
    return css`
      @media (min-width: ${DEVICE_MINWIDTH.TABLET}px) {
        ${css(...args)}
      }
    `;
  },
  SMALLEST: (...args) => {
    return css`
      @media (max-width: 450px) {
        ${css(...args)}
      }
    `;
  },
};

/**
 * specific padding that used in page based on device
 */
export const NON_DESKTOP_PADDING = "5%";
export const DESKTOP_PADDING = "11%";
