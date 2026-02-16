'use client';
import React, { useState, useRef, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  required,
  placeholder = 'Select an option',
  className = '',
  name = '',
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`} ref={containerRef}>
      <label className="text-sm font-medium text-dark-200 flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-dark-200" />}
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-2.5 bg-white border border-base-400 text-left text-sm
            flex items-center justify-between
            focus:outline-none focus:border-dark-200 focus:ring-1 focus:ring-dark-200/10
            transition-all duration-200
            ${isOpen ? 'border-dark-200' : 'hover:border-base-500'}
          `}
        >
          <span className={!selectedOption || !selectedOption.value ? 'text-base-500' : 'text-dark-200'}>
            {selectedOption && selectedOption.value ? selectedOption.label : placeholder}
          </span>
          <BsChevronDown
            className={`w-3.5 h-3.5 text-dark-200 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white border border-base-400 shadow-lg max-h-60 overflow-y-auto">
            {options.map((option, index) => {
              if (!option.value) return null;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left px-4 py-2.5 text-sm border-b border-base-300 last:border-b-0
                    transition-colors duration-150
                    ${option.value === value 
                      ? 'bg-base-100 text-dark-200 font-medium' 
                      : 'text-base-900 hover:bg-base-50'}
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default Select;
