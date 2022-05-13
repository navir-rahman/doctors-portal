import React, { useState } from 'react';
import AvailableAppoinments from './AvailableAppoinments';
import MakeAppointment from './MakeAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <MakeAppointment date={date} setDate={setDate}></MakeAppointment>
            <AvailableAppoinments date={date} />
        </div>
    );
};

export default Appointment;