import React from 'react';
import ParagraphModel from '../../model/document/ParagraphModel';
import RunComp from './RunComp';

interface IParagraphProps {
  model: ParagraphModel;
}

const ParaComp: React.FC<IParagraphProps> = ({ model }) => (
  <p>
    {model.runs.map((runModel) => (
      <RunComp model={runModel} />
    ))}
  </p>
);

export default ParaComp;
