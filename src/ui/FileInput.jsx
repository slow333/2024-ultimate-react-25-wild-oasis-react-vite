import styled from "styled-components";

const FileInput = styled.input.attrs({type: 'file'})`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-400);
  padding: 0.5rem 2rem;
  box-shadow: var(--shadow-md);
  
  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.4rem 1rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-grey-500);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
