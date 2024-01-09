import { ExamsResponse } from '@services/Exams/types';
import useGetExams from '@services/Exams/useGetExams';
import { useEffect, useState } from 'react';

export function useExams() {
  const { data, isFetched } = useGetExams();
  const [exams, setExams] = useState<ExamsResponse>(data ?? []);
  const [collpaseCurrent, setCollapseCurrent] = useState<string>();

  useEffect(() => {
    setExams(data ?? []);
  }, [isFetched]);

  const handleCollapseEvents = (exam: string) => {
    setCollapseCurrent(exam == collpaseCurrent ? '' : exam);
  };

  return {
    exams,
    handleCollapseEvents,
    collpaseCurrent,
  };
}
