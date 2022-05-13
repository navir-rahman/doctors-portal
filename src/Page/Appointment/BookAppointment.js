import React from 'react';

const BookAppointment = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className='m-auto'>
            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="card-body items-center text-center">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>No slot Available. try another date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'soace'} Available</p>

                    <div class="card-actions">
                        <label for="BookingModal" class="btn btn-secondary" disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}>Buy Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;