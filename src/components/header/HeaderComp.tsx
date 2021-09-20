import React from 'react';
import './Header.css';

interface IHeaderProp {
  src: string;
  label: string;
  fontColor: string;
  w?: string;
  h?: string;
}

const HeaderComp: React.FC<IHeaderProp> = ({ src, label, fontColor, w, h }) => (
  <div className="header">
    <img src={src} alt="" height={h} width={w} />
    <span className="header-label" style={{ color: fontColor }}>
      {label}
    </span>
  </div>
);

HeaderComp.defaultProps = {
  w: '32px',
  h: '32px',
};

export default HeaderComp;
