import { observer } from 'mobx-react-lite';
import React from 'react';
import ResourceModel from '../../../model/resource/ResourceModel';
import LinkItemComp from '../item/LinkItemComp';
import './LinkList.css';

interface ILinkListProp {
  title: string;
  resMap: Map<string, ResourceModel>;
}

const LinkListComp: React.FC<ILinkListProp> = observer(({ title, resMap }) => (
  <div className="link-list">
    <label className="link-list-title" htmlFor="link-list">
      {title}
    </label>
    <div className="link-list-container">
      <ul className="link-list-ul">
        {resMap.size !== 0 &&
          [...resMap.values()].map((res) => <LinkItemComp model={res} key={res.getUrl()} />)}
      </ul>
    </div>
  </div>
));

export default LinkListComp;
