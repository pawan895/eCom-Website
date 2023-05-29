import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state)=>state);

    return (
        <div>
           <ProductComponent />
        </div>
    );
};

export default ProductListing;