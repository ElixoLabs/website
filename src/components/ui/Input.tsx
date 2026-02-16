'use client';
import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: IconType;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="text-sm font-medium text-dark-200 flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-dark-200" />}
        {label} {props.required && <span className="text-primary">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-2.5 bg-white border border-base-400 text-dark-200 text-sm
          placeholder:text-base-500 
          focus:outline-none focus:border-dark-200 focus:ring-1 focus:ring-dark-200/10
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500' : 'hover:border-base-500'}
        `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
