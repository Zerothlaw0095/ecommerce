import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';

const Products = (props) => {
    const id = props.category;
    const productsCategory = [
        ...new Set(productsData.map(item => item.category))
    ];
console.log(productsCategory)
    const filteredProducts = productsData.filter(item => (productsCategory[parseInt(id)] === item.category));
    

    return (
        <>
            <div className="wrapper products_wrapper">
                {
                    filteredProducts.slice(0,3).map(item => (
                        <ProductCard
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                <div className="card products_card browse_card">
                    <Link to="/all-products">
                        Browse All <br /> Products <BsArrowRight />
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Products;