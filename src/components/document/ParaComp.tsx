import React, { useEffect, useRef } from 'react';
import useAppState from '../../hooks/useAppState';
import ParagraphModel from '../../model/document/ParagraphModel';
import RunComp from './RunComp';

interface IParagraphProps {
  model: ParagraphModel;
}

const ParaComp: React.FC<IParagraphProps> = ({ model }) => {
  const target = useRef(null);
  const appState = useAppState();

  /* 콜백 정의 */
  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // do something
        appState.addVisible(model);
      } else {
        appState.removeVisible(model);
      }
    });
  };

  /* 옵저버 등록 */
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0 });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, []);

  return (
    <p ref={target}>
      {model.runs.map((runModel, idx) => (
        <RunComp model={runModel} key={idx.toString()} />
      ))}
    </p>
  );
};

export default ParaComp;
