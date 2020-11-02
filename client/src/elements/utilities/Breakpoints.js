import { css } from "styled-components";

const size = {
    xxs: 360,
    xs: 480,
    s: 768,
    m: 1024,
    l: 1200,
};

/**
 * @desc Places css breakpoints for max height into styled components.
 */
//

export const belowHeight = Object.keys(size).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (max-height: ${size[label]}px) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});

/**
 * @desc Places css breakpoints for max width into styled components.
 */
//

export const below = Object.keys(size).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (max-width: ${size[label]}px) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});
