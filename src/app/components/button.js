    import React from 'react';

    const Button = ({ onClick, bgColor, textColor, text, isActive, position }) => {
        return (
            <button
                onClick={onClick}
                className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-105 ${bgColor} ${textColor} ${position} ${
                    isActive ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isActive}
            >
                {text}
            </button>
        );
    };

    export default Button;