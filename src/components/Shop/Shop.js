import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart =[...cart, product]
        setCart(newCart);

    }
    
    return (
        <div className='grid grid-cols-5 gap-1'>
            {/* shop contianer */}
            <div className='ml-10 mt-10 mr-10 col-span-4 grid grid-cols-3 gap-6'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product} 
                        addToCart={addToCart}/>)
                }
            </div>
            {/* Cart container*/}
            <div className='pt-5 bg-orange-300'>
                <h3 className='text-center'>Order Summary</h3>
                <Cart cart={cart}/>
            </div>
        </div>
    )
}

export { Shop };