import styled, {css} from "styled-components";

/*const textAlign = css`
   text-align: center;
${10 > 5 && "background-color: green"}
`*/

const types = {
  h1: css`
     font-size: 3rem;
     font-weight: 600;
     color: var(--color-grey-900);
     //background-color: var(--color-brand-50);
     opacity: 0.5;
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
   line-height: 1.5;
`
export default Heading;