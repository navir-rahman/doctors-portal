import React from 'react';

const Testmonial = ({ tsm }) => {
    const { img, name, location, review, } = tsm;

    return (
        <div>
            <div class="card w-auto lg:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{review}</p>
                    <div class="flex items-center">
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl">{name}</h4>
                            <p>{location}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;