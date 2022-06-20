import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={509}
    viewBox="0 0 280 509"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="283" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="134" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Sceleton;
