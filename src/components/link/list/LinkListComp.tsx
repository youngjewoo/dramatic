import { observer } from 'mobx-react-lite';
import React from 'react';
import ResourceModel from '../../../model/resource/ResourceModel';
import LinkItemComp from '../item/LinkItemComp';

import './LinkList.css';

interface ILinkListProp {
  title: string;
  resModels: Array<ResourceModel>;
}

const LinkListComp: React.FC<ILinkListProp> = observer(({ title, resModels }) => (
  <div className="link-list">
    <label className="link-list-title" htmlFor="link-list">
      {title}
    </label>
    <div className="link-list-container">
      <ul className="link-list-ul">
        {resModels.length !== 0 &&
          [...resModels.values()].map((res) => <LinkItemComp model={res} key={res.getUrl()} />)}
      </ul>
    </div>
  </div>
));

export default LinkListComp;
