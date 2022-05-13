import React from 'react';

const Banner = ({img_size, img, title, text, reverse}) => {
    return (
        <div className='my-9 lg:my-24'>
            <div class="hero  lg:min-h-[50vh]">
                <div class={`hero-content flex-col lg:flex-row${reverse}`}>
                    <img src={img} alt={img} class={` max-w-s ${img_size} rounded-lg shadow-2xl`} />
                    <div>
                        <h1 class="text-5xl font-bold">{title}</h1>
                        <p class="py-6">{text}</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;