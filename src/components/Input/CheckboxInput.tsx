import React, { useId, useState } from 'react';
import styled from 'styled-components';

interface CheckboxInputProps {
  content: string;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxInput = (props: CheckboxInputProps) => {
  const { content, isChecked, setIsChecked } = props;

  // const [isChecked, setIsChecked] = useState<boolean>(false);

  const uid = useId();
  return (
    <Wrapper>
      <input
        type="checkbox"
        id={`checkbox-${uid}`}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label className={isChecked ? 'checked' : ''} htmlFor={`checkbox-${uid}`}>
        {content}
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & input {
    display: none;
  }
  &:hover {
    & label::before {
      background: #8491a733;
    }
    & .checked::before {
      background: #2d65f2dd;
    }
  }
  & label {
    cursor: pointer;
    color: #475067;
    position: relative;
    display: flex;
    align-items: center;
  }
  & label::before {
    display: inline-block;
    margin-right: 8px;
    width: 22px;
    height: 22px;
    border: 1px solid #8491a7;
    border-radius: 4px;
    vertical-align: top;
    background: #fff;
    content: '';
  }
  & .checked::before {
    border-color: #2d65f2;
    background: #2d65f2;
  }
  & .checked::after {
    top: 7px;
    left: 6px;
    width: 10px;
    height: 5px;
    position: absolute;
    display: inline-block;
    border-color: #ffffff;
    border-bottom: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-radius: 1px;
    transform: rotate(-45deg);
    content: '';
  }
`;

export default CheckboxInput;
