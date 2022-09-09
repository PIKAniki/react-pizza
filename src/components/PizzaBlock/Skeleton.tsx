import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="280" rx="10" ry="10" width="280" height="20" />
      <rect x="0" y="318" rx="10" ry="10" width="280" height="79" />
      <rect x="0" y="425" rx="20" ry="20" width="90" height="27" />
      <rect x="125" y="420" rx="20" ry="20" width="155" height="37" />
    </ContentLoader>
  );
};

export default Skeleton;
