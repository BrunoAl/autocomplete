import React from 'react';
import Downshift from 'downshift';
import { terms } from './assets/terms';
import { comboboxStyles, menuStyles } from './styles';
import 'styled-components/macro';

export default function App() {
  return (
    <div css={comboboxStyles}>
      <Downshift className="autocomplete">
        {({ getInputProps, getItemProps, getMenuProps, getLabelProps, inputValue, isOpen }) => (
          <div>
            <div className="autocomplete__input-area">
              <label htmlFor="autocomplete" {...getLabelProps()} className="autocomplete__label">
                Enter a fruit
              </label>
              <input
                id="autocomplete"
                {...getInputProps()}
                className="autocomplete__input"
                placeholder="Select a fruit"
              />
            </div>
            <ul {...getMenuProps()} css={menuStyles}>
              {isOpen &&
                inputValue &&
                [...new Set(terms)]
                  .filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
                  .map((term, index) => (
                    <li
                      key={term}
                      {...getItemProps({
                        item: term,
                        index,
                      })}
                    >
                      {term}
                    </li>
                  ))}
            </ul>
          </div>
        )}
      </Downshift>
    </div>
  );
}
