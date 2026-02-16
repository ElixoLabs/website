import React from 'react';

interface IconBoxProps {
  icon: React.ComponentType<{ className?: string }>;
  size?: 'sm' | 'md';
}

const IconBox: React.FC<IconBoxProps> = ({ icon: Icon, size = 'sm' }) => {
  const boxSize = size === 'sm' ? 'w-6 h-6' : 'w-7 h-7';
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className={`${boxSize} rounded-lg bg-linear-to-b from-primary-light to-primary-dim p-px shrink-0`}>
      <div className="w-full h-full rounded-[7px] bg-primary flex items-center justify-center">
        <Icon className={`${iconSize} text-white`} />
      </div>
    </div>
  );
};

export default IconBox;
