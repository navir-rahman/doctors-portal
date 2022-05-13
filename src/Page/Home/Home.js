import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import chair from '../../assets/images/chair.png';
import treatment from '../../assets/images/treatment.png';
import Appointment from './Appointment';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='px-12'>
            <div className='mb-[130px]'>
                <Banner img_size='lg:max-w-xl' reverse={"-reverse"} img={chair} title='Your New Smile Starts Here' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"></Banner>
                <Info></Info>
            </div>
            <div className='mb-[130px]'>

            <Services />
            <Banner img_size='lg:max-w-md' reverse={" "} img={treatment} title='Exceptional Dental Care, on Your Terms' text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page"></Banner>
            </div>
        
            <Appointment ></Appointment>
            <Testimonials></Testimonials>
            <Contact />
        </div>
    );
};

export default Home;