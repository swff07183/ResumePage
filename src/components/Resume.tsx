import { styled } from 'styled-components';

interface ResumeDivProps {
  title: string;
  isRequired?: boolean;
  isFormOpen?: boolean;
  children?: React.ReactNode;
  handleAddButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Resume = (props: ResumeDivProps) => {
  const { title, isRequired, isFormOpen, children, handleAddButtonClick } =
    props;
  return (
    <Wrapper>
      <div className="resume-title-div">
        <div className="resume-title">
          <h2>{title}</h2>
          {isRequired && <span>필수</span>}
        </div>
        {!isFormOpen && (
          <button
            className="resume-create-button"
            onClick={handleAddButtonClick}
          >
            + 추가
          </button>
        )}
      </div>
      <div className="resume-content-div">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 930px;
  & .resume-title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .resume-title {
    padding: 0 16px;
    display: flex;
    align-items: center;
    & > span {
      color: red;
      font-weight: bold;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  & .resume-create-button {
    height: 40px;
    padding: 12px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    &:hover {
      background-color: #e8e8e8;
      cursor: pointer;
    }
  }
  & .resume-content-div {
  }
`;
