import React from 'react';
import ResourceModel from '../../../model/resource/ResourceModel';
import './LinkItem.css';

interface ILinkItemProps {
  model: ResourceModel;
}

const LinkItemComp: React.FC<ILinkItemProps> = () => {
  const currDate = new Date().toISOString().split('T')[0];

  return (
    <li className="link-item">
      <img className="link-item-img" src="Earth.svg" alt="" height="64px" width="64px" />
      <span className="link-item-container">
        <div className="link-item-label">지구를 지켜라이야이하</div>
        <hr className="link-item-border" />
        <div className="link-item-date">{currDate}</div>
      </span>
    </li>
  );
};

export default LinkItemComp;
