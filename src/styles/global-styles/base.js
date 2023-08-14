import { css } from 'styled-components';

import mixins from '../mixins';
import media from '../media';

const base = css`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html,
    body {
        width: 100%;
        max-width: 100%;
    }

    html {
        box-sizing: border-box;
        touch-action: manipulation;

        font-size: 62.5%;

        ${'' /* 1rem = 9px */}
        ${media.bp800`
            font-size: 56.25%; 
        `}
    }

    body {
        font-family: var(--fonts-primary);
        font-size: var(--font-size-md);
        font-weight: 400;
        background: var(--color-background-primary-1);
        color: var(--color-text-primary-1);
        line-height: var(--base-line-height);
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        ${'' /* transition: var(--transition); */}
        overflow-x: hidden;
    }

    ${mixins.customScrollbar({
        color: 'var(--color-scrollbar)',
        activeColor: 'var(--color-scrollbar-active)',
        width: '10px',
    })}

    #root {
        ${mixins.flexColumnCenter}
        min-height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
        margin: 0 0 1.6rem 0;
    }

    h1 {
        font-size: var(--font-size-title);
        line-height: 1.2;
    }
    h2 {
        font-size: var(--font-size-h2);
        line-height: 1.3;
    }
    h3 {
        font-size: var(--font-size-h3);
        line-height: 1.4;
    }
    h4 {
        font-size: var(--font-size-5xl);
    }
    h5 {
        font-size: var(--font-size-3xl);
    }
    h6 {
        font-size: var(--font-size-2xl);
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    img[alt=''],
    img:not([alt]) {
        filter: blur(5px);
    }

    svg {
        display: inline-block;
        width: 100%;
        vertical-align: middle;
        height: 100%;

        &:before {
            font-variant: normal;
            font-style: normal;
            text-transform: none;
            font-weight: normal;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }

    [role='button'],
    button,
    a,
    input,
    select,
    textarea {
        border-radius: 0;
        outline: none;
        border: 0;
        transition: var(--transition);

        &:focus,
        &:active {
            outline: none;
        }

        &:disabled {
            opacity: 0.7;
            cursor: default;
        }
    }

    [role='button'],
    button {
        ${mixins.clickable}
        position: relative;
        justify-content: center;
        vertical-align: middle;
        white-space: nowrap;
        align-items: center;
        background: none;
        display: inline-flex;
        overflow: hidden;
        appearance: none;
        width: min-content;
        appearance: none;
    }

    a {
        position: relative;
        display: inline-block;
        font-weight: 400;
        color: var(--color-text-link);
        text-decoration-skip-ink: auto;
        text-decoration: none;
    }

    input,
    textarea {
        &::placeholder {
            opacity: 0.5;
            font-style: italic;
        }

        &:focus,
        &:active {
            &::placeholder {
                opacity: 0.4;
            }
        }
    }

    p {
        margin: 0 0 1.6rem 0;

        & > a {
            ${mixins.primaryLink};
        }

        & > code {
            font-size: var(--font-size-xs);
            color: var(--color-code-text);
            background-color: var(--color-code-background);
            padding: 0.3em 0.5em;
            border-radius: var(--border-radius);
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    code {
        font-family: var(--fonts-mono);
        font-size: var(--font-size-md);
    }

    .gatsby-image-outer-wrapper {
        height: 100%;
    }

    .header-autolink {
        display: none;
    }
`;

export default base;
