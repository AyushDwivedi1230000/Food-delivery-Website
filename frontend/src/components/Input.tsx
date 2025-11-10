import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-slate-300 transition-colors hover:text-orange-bright">{label}</label>}
      <div className="relative">
        <input
          className={`w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-luxury focus:ring-2 focus:ring-orange-luxury/50 focus:shadow-glow-sm transition-all duration-300 hover:border-slate-600 ${className}`}
          {...props}
        />
        {icon && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-orange-luxury">{icon}</div>}
      </div>
      {error && <p className="text-sm text-red-500 animate-slide-up">{error}</p>}
    </div>
  );
};

export default Input;
