import React from 'react';

const Service = (props) => {
    const {img, title, text}= props.service;

    return (
        <div>
            <div class="card w-auto lg:w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} className='h-[100px]' alt={img} class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{title}</h2>
                    <p>{text}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;