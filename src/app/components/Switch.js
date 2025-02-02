import React, { useState } from 'react';

const Switch = ({ text, onChange, bgColor, textColor, position }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <div className={`flex items-center ${position}`}>
            <span className={`mr-2 ${textColor}`}>{text}</span>
            <div
                onClick={handleToggle}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                    isChecked ? bgColor : 'bg-gray-300'
                }`}
            >
                <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        isChecked ? 'translate-x-6' : 'translate-x-0'
                    }`}
                />
            </div>
        </div>
    );
};

export default Switch;