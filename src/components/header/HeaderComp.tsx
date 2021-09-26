import React from 'react';
import './Header.css';

interface IHeaderProp {
  src: string;
  label: string;
  fontColor: string;
  w?: string;
  h?: string;
}

const HeaderComp: React.FC<IHeaderProp> = ({ src, label, fontColor, w, h }) => {
  const headerStyle: React.CSSProperties =
    label === 'Document'
      ? { backgroundColor: 'rgb(225, 226, 223)', position: 'fixed', padding: '4px' }
      : {};
  // const headerStyle: React.CSSProperties = label === 'Document' ? { position: 'fixed' } : {};
  return (
    <div className="header" style={headerStyle}>
      <img src={src} alt="" height={h} width={w} />
      <span className="header-label" style={{ color: fontColor }}>
        {label}
      </span>
    </div>
  );
};

HeaderComp.defaultProps = {
  w: '32px',
  h: '32px',
};

export default HeaderComp;
