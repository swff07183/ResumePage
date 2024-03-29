import { useEffect } from 'react';
import { useExtraState } from '../stores/hooks';
import { useSkillQuery } from './skill';
import { useExperienceQuery } from './experience';
import { useAwardQuery } from './award';
import { useCareerContentQuery } from './careerContent';
import { useSelfIntroductionQuery } from './selfIntroduction';

export const useInitialExtrastate = () => {
  const { openExtraList } = useExtraState();

  const { data: skills } = useSkillQuery();
  useEffect(() => {
    if (skills && skills?.length > 0) openExtraList('skill');
  }, [skills, openExtraList]);

  const { data: experiences } = useExperienceQuery();
  useEffect(() => {
    if (experiences && experiences?.length > 0) openExtraList('experience');
  }, [experiences, openExtraList]);

  const { data: awards } = useAwardQuery();
  useEffect(() => {
    if (awards && awards.length > 0) openExtraList('award');
  }, [awards, openExtraList]);

  const { data: careerContent } = useCareerContentQuery();
  useEffect(() => {
    if (careerContent) openExtraList('careerContent');
  }, [careerContent, openExtraList]);

  const { data: selfIntroduction } = useSelfIntroductionQuery();
  useEffect(() => {
    if (selfIntroduction) openExtraList('selfIntroduction');
  }, [selfIntroduction, openExtraList]);
};
