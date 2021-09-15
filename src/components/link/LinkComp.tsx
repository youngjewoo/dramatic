import React from 'react';
import AppStateModel from '../../model/app/AppStateModel';
import HeaderComp from '../header/HeaderComp';
import './Link.css';
import LinkListComp from './list/LinkListComp';

const LinkComp: React.FC = () => (
  <div className="link">
    <HeaderComp src="Earth.svg" label="Links" fontColor="snow" />
    <LinkListComp title="Section" resMap={AppStateModel.getSectionModel()} />
    <LinkListComp title="All" resMap={AppStateModel.getResources()} />
  </div>
);
export default LinkComp;
