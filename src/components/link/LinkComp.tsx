import React from 'react';
import HeaderComp from '../header/HeaderComp';
import './Link.css';
import LinkListComp from './list/LinkListComp';

const LinkComp: React.FC = () => (
  <div className="link">
    <HeaderComp src="Earth.svg" label="Links" fontColor="snow" />
    <LinkListComp title="Section" />
    <LinkListComp title="All" />
  </div>
);
export default LinkComp;
