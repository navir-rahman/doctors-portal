import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
const Contact = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='py-16'>
            <div className='max-w-[450px] m-auto text-center'>
                <h3 className='text-xl text-secondary '>Contact Us</h3>
                <h2 className='text-3xl text-white mb-3'>Stay connected with us</h2>

                <div class="form-control">

                    <input type="text" placeholder="Full Name" class="input input-bordered mb-3" />
                    <input type="email" placeholder="Email Address" class="input input-bordered mb-3" />
                    <textarea class="textarea textarea-bordered mb-9" placeholder="Bio"></textarea>
                    <div>
                        <PrimaryBtn type={"submit"}> Submit</PrimaryBtn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;