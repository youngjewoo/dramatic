import React from 'react';
import ContentComp from './content/ContentComp';
import HeaderComp from '../header/HeaderComp';
import './Page.css';

const PageComp: React.FC = () => (
  <div className="page">
    <HeaderComp src="Paper.svg" label="Document" fontColor="black" w="25px" h="25px" />
    <ContentComp />
  </div>
);

export default PageComp;
