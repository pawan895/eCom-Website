import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const {id, title} = products[0];

    return (
        <div className='four colum wide'>
        <div className='ui link cards'>


        </div>
            
        </div>
    );
};

export default ProductComponent;