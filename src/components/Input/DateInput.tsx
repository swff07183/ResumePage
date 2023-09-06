import React, {
  InputHTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as Right } from '../../assets/svg/arrow-right.svg';
import { ReactComponent as Left } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as Calendar } from '../../assets/svg/calendar_logo.svg';

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

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  setDate?: any;
  invalid?: boolean;
}

const DateInput = (props: DateInputProps) => {
  const {
    className = 'input_m',
    placeholder,
    disabled,
    invalid,
    setDate,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(8);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const uid = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disabled) {
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
    }
  }, [disabled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;
    let newYear = 0;
    let newMonth = 0;

    let newValue = '';

    if (e.target.value.length === 4) {
      newYear = Number(e.target.value.substring(0, 4));
      newYear = newYear < 1900 ? 1900 : newYear;
      setYear(newYear);
      newValue += newYear;
    } else {
      newValue += e.target.value.substring(0, 4);
    }

    if (e.target.value.length === 6) {
      newMonth = Number(e.target.value.substring(4, 6));
      newMonth = newMonth < 1 ? 1 : newMonth > 12 ? 12 : newMonth;
      setMonth(newMonth);
      newValue += newMonth.toString().padStart(2, '0');
    } else {
      setMonth(0);
      newValue += e.target.value.substring(4, 6);
    }
    setInputValue(newValue);
    if (newValue.length === 6) setDate(newValue);
    else setDate('');
  };

  const handleMonthBtnClick = (mon: string) => {
    setMonth(Number(mon));
    setShowCalendar(false);
    setInputValue(`${year}${mon}`);
    setDate(`${year}${mon}`);
  };

  return (
    <Wrapper className={`${className} ${invalid ? 'invalid' : ''}`} ref={ref}>
      <Calendar className="calendar-logo" />
      <label
        className={showCalendar || inputValue ? 'focused' : ''}
        htmlFor={`input-date-${uid}`}
      >
        {placeholder}
      </label>
      <input
        {...rest}
        ref={inputRef}
        disabled={disabled}
        id={`input-date-${uid}`}
        // value={`${year}${month.toString().padStart(2, '0')}`}
        value={inputValue}
        onChange={handleInputChange}
        maxLength={6}
      />
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
                onClick={() => handleMonthBtnClick(mon)}
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
  & .focused {
    top: 0;
    left: 12px;
    transform: scale(90%) translateY(-50%);
    background-color: #ffffff;
    padding: 6px;
  }
  & label {
    cursor: unset;
    position: absolute;
    top: 50%;
    left: 34px;
    transform: translateY(-50%);
    font-size: 14px;
    transition: all 300ms ease;
  }
  & .calendar-logo {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    top: 12px;
    & path {
      stroke: #8491a7;
      stroke-width: 1px;
    }
  }
  & input {
    width: 100%;
    padding: 0 12px 0 36px;
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
    font-size: 14px;
  }
  & .active {
    background-color: #2d65f2;
    color: #ffffff;
    font-weight: bold;
  }
  & .non-active:hover {
    background-color: #f7fafe;
  }
`;

export default DateInput;
