import React from 'react';
import ResourceModel from '../../../model/resource/ResourceModel';
import './LinkItem.css';

interface ILinkItemProps {
  model: ResourceModel;
}

const LinkItemComp: React.FC<ILinkItemProps> = ({ model }) => {
  const currDate = new Date().toISOString().split('T')[0];
  const modelDate = model.getDate();
  const timeStamp = currDate === modelDate ? new Date().toISOString().split('T')[1].split('.')[0] : modelDate;

  return (
    <li className="link-item">
      <img className="link-item-img" src="Earth.svg" alt="" height="64px" width="64px" />
      <span className="link-item-container">
        <div className="link-item-label">지구를 지켜라이야이하</div>
        <div className="link-item-border" />
        <div className="link-item-date">{timeStamp}</div>
      </span>
    </li>
  );
};

export default LinkItemComp;
