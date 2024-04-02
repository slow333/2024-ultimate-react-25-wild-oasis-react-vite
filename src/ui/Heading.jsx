import styled, {css} from "styled-components";

const types = {
  h1: css`
     font-size: 3rem;
     font-weight: 600;
     color: var(--color-grey-900);
     opacity: 0.8;
     text-align: center;
  `,
  h2: css`
     font-size: 2rem;
     font-weight: 300;
     color: var(--color-brand-800);
  `,
  h3: css`
     font-size: 2rem;
     font-weight: 500;
     color: var(--color-grey-600);
  `
}

const Heading = styled.h1`
  ${props => types[props.as]}
   line-height: 0.2;
  text-decoration: underline 0.2em var(--color-brand-200);
  text-underline-offset: 0.3em;
  text-decoration-color: transparent;
  transition: 1s;
  &:hover {
    text-decoration-color: grey;
  }
`
export default Heading;