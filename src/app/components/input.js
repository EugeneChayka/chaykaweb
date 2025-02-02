import React from 'react';

const Input = ({ onChange, onBlur, bgColor, textColor, placeholder, isActive, position, type }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105 ${bgColor} ${textColor} ${position} ${
                isActive ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isActive}
        />
    );
};

export default Input;