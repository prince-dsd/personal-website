import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

import { Form } from '@components';
import { mixins, media } from '@styles';

const NewsletterExternalContainer = styled.div`
    background-color: var(--color-background-secondary-1);
    padding: 12rem 18rem;
    border-radius: var(--border-radius);

    ${media.bp1280`
        padding: 12rem 14rem;
    `}
    ${media.bp1040`
        padding: 12rem 10rem;
    `}
    ${media.bp800`
        width: 100vw;

    `}
    ${media.bp600`
        padding: 10rem 6rem;
    `}
    ${media.bp440`
        padding: 6rem 4rem;
    `}
    ${media.bp388`
        padding: 6rem 3rem;
    `}

    ${props =>
        props.isPost &&
        css`
            width: 100vw;
            margin-top: 10rem;
            padding: 12rem 0;
        `}
`;

const NewsletterInternalContainer = styled.div`
    ${mixins.containAndCenter}
    max-width: 850px;

    h2 {
        margin-bottom: 3rem;
        font-size: var(--font-size-h3);
    }

    p {
        font-size: var(--font-size-xl);
        font-weight: 500;
        margin-bottom: 3rem;
    }

    form {
        display: flex;
        margin-top: 4rem;

        & > * {
            margin-bottom: 0 !important;
        }

        & > *:first-child {
            width: 60%;
        }

        & > *:not(:last-child) {
            margin-right: 3rem;
        }

        ${media.bp800`
            flex-direction: column;
            & > *:first-child {
                width: 100%;
            }

            & > *:not(:last-child) {
                margin-bottom: 4rem !important;
                margin-right: 0;
            }
          
        `}
    }
`;

const NewsletterForm = ({ isPost }) => {
    const {
        markdownRemark: {
            frontmatter: { title },
            html,
        },
    } = useStaticQuery(graphql`
        {
            markdownRemark(fileAbsolutePath: { regex: "/content/newsletter/" }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `);

    const defaultSubmitText = 'Sign Up!';
    const [submitText, setSubmit] = useState(defaultSubmitText);

    const validation = Yup.object().shape({
        first_name: Yup.string().trim().required('Please enter your first name'),
        email_address: Yup.string()
            .trim()
            .email('Please enter a valid email address')
            .required('Please enter your email')
            .lowercase(),
    });

    return (
        <NewsletterExternalContainer isPost={isPost}>
            <NewsletterInternalContainer>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Form
                    initialValues={{
                        first_name: '',
                        email_address: '',
                    }}
                    validationSchema={validation}
                    onSubmit={async (values, form) => {
                        // Done using Netlify lambda functions
                        try {
                            form.setSubmitting(true);
                            await axios.post(
                                '/.netlify/functions/newsletter-subscribe',
                                JSON.stringify(values),
                            );
                            form.setSubmitting(false);
                            form.resetForm();
                            setSubmit('Thank You!');
                            setTimeout(() => {
                                setSubmit(defaultSubmitText);
                            }, 3000);
                        } catch (err) {
                            setSubmit('Something Went Wrong!');
                            setTimeout(() => {
                                setSubmit(defaultSubmitText);
                            }, 3000);
                            if (process.env.NODE_ENV === 'development') {
                                console.error(err.message);
                            }
                        }
                    }}>
                    {({ isSubmitting }) => (
                        <Form.Element>
                            <Form.Field.Input
                                label="Name"
                                name="first_name"
                                variant="newsletter"
                                height={4}
                                withErrorMsg={false}
                            />
                            <Form.Field.Input
                                label="Email"
                                name="email_address"
                                variant="newsletter"
                                height={4}
                                withErrorMsg={false}
                            />
                            <Form.Buttons
                                submitText={submitText}
                                isSubmitting={isSubmitting}
                                size="big"
                            />
                        </Form.Element>
                    )}
                </Form>
            </NewsletterInternalContainer>
        </NewsletterExternalContainer>
    );
};

NewsletterForm.propTypes = {
    isPost: PropTypes.bool,
};
NewsletterForm.defaultProps = {
    isPost: false,
};

export default NewsletterForm;
