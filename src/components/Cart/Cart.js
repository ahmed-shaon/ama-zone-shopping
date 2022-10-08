import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Utilities from '../../utilities/Utilities';

const Cart = ({cart}) => {
    let price=0;
    let total=0;
    for(const item of cart){
        price=price+item.price;
    }
    let tax = (price*.10);
    let charge = 5;
    if(price){
        total = (price + tax + charge);
    }
    
    // console.log(price);
    console.log(typeof total)
    return (
        <div>
            <div className='mt-10 mb-10  px-6'>
                <p className='mt-2'><small>Selected Item:{cart.length}</small></p>
                <p className='mt-2'><small>Total Price: ${price}</small></p>
                <p className='mt-2'><small>Total Shipping Charge: ${charge}</small></p>
                <p className='mt-2'><small>Tax: ${tax}</small></p>
                <p className='mt-2'>Grand Total: ${total}</p>
            </div>
            <button className='bg-red-600 w-10/12 ml-5 text-white rounded-sm py-2 hover:bg-red-700 flex justify-center'>
                <p className='mr-2'>Clear Cart</p>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='bg-amber-600 w-10/12 ml-5 text-white rounded-sm py-2 hover:bg-amber-700 flex justify-center'>
                <p className='mr-2'>Review Order</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;