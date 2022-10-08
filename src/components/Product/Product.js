import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCart }) => {
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='mb-4 border-2 border-slate-400 rounded-lg relative'>
            <img className='w-100 rounded-lg p-2' src={img} alt="Product" />
            <div className='mt-1.5 mx-1.5 mb-12'>
                <p className='break-normal text-lg font-medium'>{name}</p>
                <p className='mb-5'>Price: ${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
            </div>
            <button className='flex items-center justify-center bg-orange-300 w-full absolute bottom-0 rounded-b-lg py-2 hover:bg-orange-400' onClick={ () => addToCart(product)}>
                <p className='mr-2'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;