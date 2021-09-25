import React from 'react';
import useAppState from '../../../hooks/useAppState';
import BreakLineModel from '../../../model/document/BreakLineModel';
import ImageModel from '../../../model/document/ImageModel';
import LinkModel from '../../../model/document/LinkModel';
import ParagraphModel from '../../../model/document/ParagraphModel';
import ParaComp from '../../document/ParaComp';

import './Content.css';

const ContentComp: React.FC = () => {
  const appState = useAppState();
  const doc = appState.getDocument().getContents();
  const titleStyle: React.CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  };
  return (
    <div className="content">
      <img src="Penguin.png" alt="" height="72px" width="72px" />
      <p style={titleStyle}>개발자 도구로 보는 CRP</p>
      {doc.map((model) => {
        if (model instanceof ParagraphModel) {
          return <ParaComp model={model} />;
        }
        if (model instanceof ImageModel) {
          const imgStyle: React.CSSProperties = {
            display: 'block',
            height: model.getHeight(),
            // margin: 'auto',
            width: model.getWidth(),
          };
          return <img style={imgStyle} src={model.getUrl()} alt="" />;
        }
        if (model instanceof BreakLineModel) {
          return <br />;
        }
        if (model instanceof LinkModel) {
          return <a href={model.getUrl()}>{model.getLabel()}</a>;
        }
        return <></>;
      })}
    </div>
  );
};

export default ContentComp;
