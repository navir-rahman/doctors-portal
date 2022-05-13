import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppointment from './BookAppointment';
import BookingModal from './BookingModal';

const AvailableAppoinments = ({ date }) => {

    const [Services, setServices] = useState([]);
    const [treatment, setTreatment]= useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    Services.map(service=> <BookAppointment key={service._id} service={service} setTreatment={setTreatment}></BookAppointment>)
}
{
    treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>
}

            </div>
        </div>
    );
};

export default AvailableAppoinments;