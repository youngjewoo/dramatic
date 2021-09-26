import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import ResourceModel from '../../../model/resource/ResourceModel';
import './LinkItem.css';

interface ILinkItemProps {
  model: ResourceModel;
}

const LinkItemComp: React.FC<ILinkItemProps> = observer(({ model }) => {
  const currDate = moment().format();
  const modelDate = model.getDate();
  const timeStamp =
    currDate === modelDate
      ? moment().format().split('T')[1].split('+')[0]
      : modelDate.split('T')[0];
  return (
    <li>
      <a className="link-item" href={model.getUrl()} target="_blank" rel="noopener noreferrer">
        <img className="link-item-img" src={model.getImg()} alt="" />
        <span className="link-item-container">
          <div className="link-item-label">{model.getTitle()}</div>
          <div className="link-item-border" />
          <div className="link-item-date">{timeStamp}</div>
        </span>
      </a>
    </li>
  );
});

export default LinkItemComp;
