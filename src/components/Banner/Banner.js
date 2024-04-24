import React from 'react';

const Banner = ({ imageUrl }) => {
  const bannerStyle = {
    display: 'block',
    width: '100%',
    height: '294px',
    cursor: 'pointer',
    top: '30px',
  };

  return (
      <img src={imageUrl} alt="Banner" style={bannerStyle} />
  );
};

export default Banner;