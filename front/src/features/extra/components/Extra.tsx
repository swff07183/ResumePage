import React from 'react';
import { useExtraState } from '../stores/hooks';
import Skill from './Skill';
import Experience from './Experience';
import CareerContent from './CareerContent';
import SelfIntroduction from './SelfIntroduction';
import Preferential from './Preferential';
import Award from './Award';
import { useInitialExtrastate } from '../hooks/extra';

export const Extra = () => {
  const { extraListState } = useExtraState();
  useInitialExtrastate();

  return (
    <>
      {extraListState.skill && <Skill />}
      {extraListState.experience && <Experience />}
      {extraListState.award && <Award />}
      {extraListState.careerContent && <CareerContent />}
      {extraListState.selfIntroduction && <SelfIntroduction />}
      {/* {extraListState.preferential && <Preferential />} */}
    </>
  );
};

export default Extra;
