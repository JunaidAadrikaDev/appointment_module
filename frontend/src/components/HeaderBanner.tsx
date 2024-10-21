// HeaderBanner.tsx
import React from 'react';

interface HeaderBannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div
      className="relative w-full h-[12vh] md:h-[20vh] lg:h-[30vh] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-md sm:text-md md:text-lg lg:text-xl text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;