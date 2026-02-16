import React from 'react';

interface SectionBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  dark?: boolean;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ icon: Icon, label, dark = false }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-full pr-2.5 shadow-sm w-fit overflow-hidden ${
        dark ? 'bg-dark-100' : 'bg-white'
      }`}
    >
      <div
        className={`flex items-center justify-center p-1.75 border-r ${
          dark ? 'border-dark-200' : 'border-base-200'
        }`}
      >
        <Icon className={`w-3.5 h-3.5 ${dark ? 'text-white' : 'text-base-900'}`} />
      </div>
      <span className={`text-xs whitespace-nowrap ${dark ? 'text-white' : 'text-base-900'}`}>
        {label}
      </span>
    </div>
  );
};

export default SectionBadge;
