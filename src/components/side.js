import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '@styles';

const SideContainer = styled.div`
    width: 4rem;
    position: fixed;
    bottom: 0;
    left: ${props => (props.orientation === 'left' ? '30px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '30px')};
    z-index: var(--z-index-side);
    color: var(--color-text-primary-2);

    ${media.bp1280`
        left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
        right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
    `};

    ${media.bp1040`
        display: none;
    `};

    &.fade-in {
        animation: 0.8s fadeIn;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    &.fade-out {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.8s var(--ease), visibility 0.8s var(--ease);
    }
`;

const Side = ({ children, isHome, orientation }) => {


    return (
        isHome && (
            <SideContainer
                orientation={orientation}>
                {children}
            </SideContainer>
        )
    );
};

Side.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string,
    isHome: PropTypes.bool,
};

Side.defaultProps = {
    orientation: 'right',
    isHome: false,
};

export default Side;
