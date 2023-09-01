import React, { useState } from 'react';
import styled from 'styled-components';
import { optionType } from '../../common/Options';

interface SelectInputProps {
  className?: string;
  options: optionType[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const SelectInput = (props: SelectInputProps) => {
  const { className = 'input_m', options, value, onChange, ...rest } = props;

  return (
    <Wrapper className={className}>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value || ''} key={`option-${option.value}`}>
            {option.content}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & select {
    width: 100%;
    height: 100%;
    padding: 0 28px 0 12px;
    border: 1px solid #8491a7;
    border-radius: 4px;
    box-sizing: border-box;
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%);
    background-position: calc(100% - 15px) calc(50%),
      calc(100% - 10px) calc(50%);
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat;
  }
`;

export default SelectInput;
