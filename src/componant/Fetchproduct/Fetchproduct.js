import React, { useEffect, useState } from 'react';
import Cardproduct from '../Cardproduct/Cardproduct';

const Fetchproduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map(product => <Cardproduct title={product.title} price={product.price} desc={product.description} image={product.image}></Cardproduct>)
            }
        </div>
    );
};

export default Fetchproduct;