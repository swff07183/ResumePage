import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Right } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as Left } from '../../assets/svg/arrow-left.svg';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const MONTH_LIST = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const DateInput = (props: DateInputProps) => {
  const { className = 'input_m', ...rest } = props;
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(8);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickCheck = (e: any) => {
      if (
        document.activeElement !== ref.current &&
        !ref.current?.contains(e.target)
      ) {
        setShowCalendar(false);
      } else {
        setShowCalendar(true);
      }
    };
    document.addEventListener('click', clickCheck);

    return () => document.removeEventListener('click', clickCheck);
  }, []);

  return (
    <Wrapper className={className} ref={ref}>
      <input {...rest} />
      {showCalendar && (
        <div className="calendar">
          <div className="calendar-title">
            <button
              className="arrow-button"
              onClick={() => setYear((prev) => prev - 1)}
            >
              <Left />
            </button>
            <div className="year">{`${year}년`}</div>
            <button
              className="arrow-button"
              onClick={() => setYear((prev) => prev + 1)}
            >
              <Right />
            </button>
          </div>
          <div className="calendar-content">
            {MONTH_LIST.map((mon) => (
              <button
                key={`month-btn-${mon}`}
                className={`btn-month ${
                  month === Number(mon) ? 'active' : 'non-active'
                }`}
                value={mon}
                onClick={() => {
                  setMonth(Number(mon));
                  setShowCalendar(false);
                }}
              >{`${Number(mon)}월`}</button>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

interface WrapperProps {
  width?: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border: 1px solid #8491a7;
  border-radius: 4px;
  box-sizing: border-box;
  width: ${({ width }) => `${width}px`};
  & input {
    width: 100%;
    padding: 0 12px;
    height: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
  }
  & .calendar {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 320px;
    height: 290px;
    box-sizing: border-box;
    top: 45px;
    left: 0;
    z-index: 10;
    margin-top: 4px;
    padding: 24px 24px 26px;
    border: 1px solid #d7dce5;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 2px 6px 16px rgba(17, 42, 128, 0.08);
  }
  & .calendar-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .year {
      font-size: 18px;
      font-weight: bold;
    }
  }
  & .arrow-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 8px;
  }
  & .calendar-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
  }
  & .btn-month {
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 4px;
  }
  & .active {
    background-color: #2d65f2;
    color: #ffffff;
    font-weight: 700;
  }
  & .non-active:hover {
    background-color: #f7fafe;
  }
`;

export default DateInput;
