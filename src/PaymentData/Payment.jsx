import React from 'react';
import '../StyleCss/style.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheackOutFrom from './CheackOutFrom';

const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GET_WAY_KEY)
const Payment = () => {
    return (
        <div>
            <section>
                <h2 className='text-xl font-familly text-center font-bold'>Please do this payment</h2>
            </section>

            <div>
                <Elements stripe={stripePromise}>
                <CheackOutFrom></CheackOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;