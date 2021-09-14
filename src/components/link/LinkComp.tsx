import React from 'react';
import HeaderComp from '../header/HeaderComp';
import './Link.css';
import LinkListComp from './list/LinkListComp';

const LinkComp: React.FC = () => (
  <div className="link">
    <HeaderComp src="Earth.svg" label="Links" fontColor="snow" />
    <LinkListComp bColor="rgb(226, 223, 223)" title="Section" />
    <LinkListComp bColor="rgb(43, 47, 78)" title="All" />
  </div>
);
export default LinkComp;
