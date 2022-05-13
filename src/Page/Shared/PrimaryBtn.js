import React from 'react';

const PrimaryBtn = ({type,children}) => {
    return (
        <button type={type || "button"} class=" px-9 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            {children}
        </button>
    );
};

export default PrimaryBtn;