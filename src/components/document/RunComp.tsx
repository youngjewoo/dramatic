import React from 'react';
import RunModel from '../../model/document/RunModel';

interface IRunProps {
  model: RunModel;
}

const RunComp: React.FC<IRunProps> = ({ model }) => {
  const runStyle: React.CSSProperties = {
    color: model.fontColor || 'black',
    fontSize: model.fontSize || '16px',
    fontWeight: model.isBold ? 'bold' : 'normal',
  };
  return <span style={runStyle}>{model.text}</span>;
};

export default RunComp;
