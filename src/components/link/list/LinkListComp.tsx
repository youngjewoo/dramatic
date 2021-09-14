import React from 'react';
import './LinkList.css';

interface ILinkListProp {
  title: string;
}

const LinkListComp: React.FC<ILinkListProp> = ({ title }) => (
  <div className="link-list">
    <label className="link-list-title" htmlFor="link-list">
      {title}
    </label>
    <div className="link-list-container">
      {/* <div className="link-list-container" style={{ backgroundColor: bColor }}> */}
      {/* <ul>
        {[].length !== 0 && [].map(resource => {
          return <LinkItem key={resource.url} />;
        })}
      </ul> */}
    </div>
  </div>
);

export default LinkListComp;
