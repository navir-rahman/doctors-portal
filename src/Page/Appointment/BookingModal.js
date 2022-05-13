import React from 'react';

const BookingModal = ({ treatment, date, setTreatment}) => {
    const { name, slots } = treatment;

    const handlebooking=(e)=>{
        e.preventDefault();
        const slot= e.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>

            <input type="checkbox" id="BookingModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="BookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 class="font-bold text-lg">Booking for {name}</h3>
                    <form onSubmit={handlebooking}>

                        <input type="text" disabled value={date} class="input input-bordered input-primary w-full my-2" />

                        <select name='slot' class="select select-primary w-full my-2 select-bordered">
                            {
                                slots.map(slot=> <option>{ slot }</option>)
                            }
                            

                        </select>

                        <input name='name' type="text" placeholder="Full Name" class="input input-bordered input-primary w-full my-2" />
                        <input name='phone' type="tel" placeholder="Phone Number" class="input input-bordered input-primary w-full my-2" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                        <input name='mail' type="email" placeholder="Email" class="input input-bordered input-primary w-full my-2" />
                        <input type="submit" placeholder="Type here" class="btn btn-accent w-full my-2" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;