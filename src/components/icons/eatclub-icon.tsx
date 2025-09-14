import React from 'react'
import { iconProps } from '../../types/icons';

const EatClubIcon = ({ size="24", colour="currentColor"}: iconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={colour} className="size-6">
      <path fillRule="evenodd" d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z" clipRule="evenodd" />
    </svg>
  );
};

export default EatClubIcon;
