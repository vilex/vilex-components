import { createElement, css } from 'vilex';
export const svg = createElement('svg', { 'aria-hidden': true }, css`
    font-size: 1em;
    width: 1em;
    height: 1em;
    color: currentColor;
    fill: currentColor;
`)