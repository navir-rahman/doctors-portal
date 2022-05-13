import React from 'react';
import Service from './Service';
import Floride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import whitning from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        { _id: "1", img:Floride, title: "Fluoride Treatment", text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { _id: "2", img:Cavity, title: "Cavity Filling", text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { _id: "3", img:whitning, title: "Teeth Whitening", text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
    ]
    return (
        <div>

            <div className='text-center mb-[70px]'>

                <h3 className='text-xl text-secondary text-bold'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;