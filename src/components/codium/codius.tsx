import React from 'react';

interface IFrameProps {
  src: string;
  title?: string;
  width?: string;
  height?: string;
}

const IFrameComponent: React.FC<IFrameProps> = ({ src, title = 'IFrame', width = '100%', height = '500px' }) => {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      style={{ border: 'none' }}
    ></iframe>
  );
};

const Codium: React.FC = () => {
  return (
    <div>
      {/* <h1>Webpage View in IFrame</h1> */}
      <IFrameComponent src="https://codeium.com/profile/praful-kumar-90574" />
    </div>
  );
};

export default Codium;
