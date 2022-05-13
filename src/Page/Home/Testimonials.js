import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Testmonial from './Testmonial';
const Testimonials = () => {
    const testimonial=[
        {_id:"1", img:people1, name:"Winson Harry", location:"callifornia", review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"},
        {_id:"2", img:people2, name:"Winson Harry", location:"callifornia", review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"},
        {_id:"3", img:people3, name:"Winson Harry", location:"callifornia", review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"},
    ]
    return (
        <section className='my-[130px]'>
            <div className='flex justify-between mb-20'>
                <div className=''>
                    <h3 className="text-xl text-secondary font-bold">  Testimonial </h3>
                    <h2 className="text-3xl"> What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    testimonial.map(tsm=><Testmonial tsm={tsm} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;