import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  EDUCATION_OPTIONS,
  GRADUATION_OPTIONS,
  HIGH_MAJOR_OPTIONS,
  REGION_OPTIONS,
} from '../../common/Options';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';
import { useEduForm, useFinalEdu } from '../../recoil/edu/hooks';
import AddButton from '../../components/Button/AddButton';

const EduUniversityForm = () => {
  const [universityInfo, setUniversityInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    passDate: '',
  });
  const [isError, setIsError] = useState({
    school: false,
  });
  const [isTransfer, setIsTransfer] = useState<boolean>(false);

  // 추가전공
  const [extraMajorInfo, setExtraMajorInfo] = useState({
    active: false,
    extraMajor: '',
    extraMajorType: '',
  });

  // 학점
  const [gradeInfo, setGradeInfo] = useState({
    active: false,
    grade: '',
    standardGrade: '',
  });

  // 지역
  const [regionInfo, setRegionInfo] = useState({
    active: false,
    region: '',
  });

  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUniversityInfo({ ...universityInfo, graduate: e.target.value });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionInfo({ ...regionInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUniversityInfo({ ...universityInfo, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };

  const handleClickAdd = (type: 'major' | 'grade' | 'region') => {
    switch (type) {
      case 'major':
        setExtraMajorInfo((prev) => ({
          ...extraMajorInfo,
          active: !prev.active,
        }));
        break;
      case 'grade':
        setGradeInfo((prev) => ({
          ...gradeInfo,
          active: !prev.active,
        }));
        break;
      case 'region':
        setRegionInfo((prev) => ({
          ...regionInfo,
          active: !prev.active,
        }));
        break;
    }
  };

  const handleSubmit = () => {
    const submitInfo = {
      ...universityInfo,
      extraMajorInfo,
      gradeInfo,
      regionInfo,
    };
    setIsError({
      school: universityInfo.school === '',
    });
    console.log(submitInfo);
    // closeEduForm();
  };

  return (
    <Wrapper hidden={finalEdu !== 'university'}>
      <div className="form-div">
        <div className="form-row">
          <SelectInput
            options={EDUCATION_OPTIONS}
            onChange={handleSelectFinalEdu}
            value={finalEdu}
          />
          <SelectInput
            className="input_s"
            options={REGION_OPTIONS}
            onChange={handleSelectRegion}
          />
          <Input
            name="school"
            placeholder="학교명"
            onChange={onChange}
            invalid={isError.school}
          />
          <CheckboxInput
            content="편입"
            isChecked={isTransfer}
            setIsChecked={setIsTransfer}
          />
        </div>
        <div className="form-row">
          <Input />
          <SelectInput
            className="input_s"
            options={GRADUATION_OPTIONS}
            onChange={handleSelectGraduation}
          />
          <Input
            className="input_s"
            name="enterDate"
            placeholder="입학년월"
            type="text"
            onChange={onChange}
          />
          <Input
            className="input_s"
            name="graduateDate"
            placeholder="졸업년월"
            type="text"
            onChange={onChange}
          />
          <SelectInput
            className="input_s"
            options={REGION_OPTIONS}
            onChange={handleSelectRegion}
          />
        </div>
        {(extraMajorInfo.active || gradeInfo.active) && (
          <div className="form-row">
            {extraMajorInfo.active && (
              <React.Fragment>
                <Input placeholder="추가전공" />
                <SelectInput className="input_s" options={HIGH_MAJOR_OPTIONS} />
              </React.Fragment>
            )}
            {gradeInfo.active && (
              <React.Fragment>
                <Input className="input_s" placeholder="학점" />
                <SelectInput className="input_s" options={HIGH_MAJOR_OPTIONS} />
              </React.Fragment>
            )}
          </div>
        )}
        {regionInfo.active && (
          <div className="form-row">
            <SelectInput className="input_s" options={REGION_OPTIONS} />
          </div>
        )}
        <div className="form-row">
          <AddButton
            content="추가전공"
            isActive={extraMajorInfo.active}
            onClick={() => handleClickAdd('major')}
          />
          <AddButton
            content="학점"
            isActive={gradeInfo.active}
            onClick={() => handleClickAdd('grade')}
          />
          <AddButton
            content="지역"
            isActive={regionInfo.active}
            onClick={() => handleClickAdd('region')}
          />
        </div>
        <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduUniversityForm;
