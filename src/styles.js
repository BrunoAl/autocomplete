import { css } from 'styled-components';

export const comboboxStyles = css`
  display: flex;
  justify-content: center;

  .autocomplete {
    &__input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      border: 0;
      font-size: var(--font-size-md);
      color: var(--gray-1);
      background: transparent;
      font-size: var(--font-size-md);
      height: 1.6rem;
      padding: 0;
      outline: none;
    }

    &__label {
      color: var(--gray-1);
      font-size: var(--font-size-sm);
      font-weight: 600;
      margin-bottom: var(--spacing-ratio-sm);
    }

    &__label,
    &__input {
      margin-left: var(--spacing-ratio-lg);
    }

    &__input-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: var(--spacing-ratio-lg);
      background-color: var(--gray-4);
      width: 25rem;
      height: 6.6rem;
      border-radius: 40px;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const menuStyles = css`
  border-top: 0;
  list-style: 'none';
  padding: 0;
  background-color: var(--gray-4);
  border-radius: 30px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  margin-top: var(--spacing-ratio-md);
  padding: var(--spacing-ratio-md) 0;
  max-height: 25rem;
  overflow: hidden;
  overflow-y: scroll;

  :empty {
    display: none;
  }

  li {
    list-style: none;
    padding: var(--spacing-ratio-sm);
    font-size: var(--font-size-lg);
    padding-left: var(--spacing-ratio-lg);
    color: var(--gray-1);
    cursor: pointer;
    :focus,
    :hover,
    :active {
      background-color: var(--gray-3);
    }
  }

  li[aria-selected='true'] {
    background-color: var(--gray-3);
  }
`;
