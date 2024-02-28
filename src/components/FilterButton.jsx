// FilterButton.jsx
import React from 'react';

const FilterButton = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className='btn-custom'>
            {text}
        </button>
    );
};

export default FilterButton;
