import React from 'react';

const INfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side h-32 bg-base-100 shadow-xl sm:flex sm:flex-row ${bgClass}`}>
                <figure className='p-5'>
                    <img src={img} alt="Album" />

                    </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default INfoCard;