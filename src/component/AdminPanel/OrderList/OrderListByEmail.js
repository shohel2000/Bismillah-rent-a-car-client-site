import React from 'react';
import OrderTable from './OrderTable';

const OrderListByEmail = ({bookings}) => {
    return (
        <div className="container">
            {
                bookings.length? 
                <OrderTable bookings = {bookings}></OrderTable> 
                :
                <h3 className="text-warning">You Have No Car Booking yet . please booking a Car</h3>
            }
        </div>
    );
};

export default OrderListByEmail;