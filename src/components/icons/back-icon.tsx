import React from 'react'
import { iconProps } from '../../types/icons';

const BackIcon = ({ size="24", colour="currentColor"}: iconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colour} className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.5 9.5-3 3m0 0 3 3m-3-3h7.5M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Z" />
    </svg>
  );
};

export default BackIcon;
