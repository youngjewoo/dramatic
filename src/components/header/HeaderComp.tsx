import React from 'react';
import './Header.css';

interface IHeaderProp {
  src: string;
  label: string;
}

const HeaderComp: React.FC<IHeaderProp> = ({ src, label }) => (
  <div className="header">
    <img src={src} alt="" height="30px" width="30px" />
    <span className="header-label">{label}</span>
  </div>
);

export default HeaderComp;
