import React from 'react';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import Banner from '../components/Banner/Banner';
import Products from '../components/Banner/products'
import useDocTitle from '../hooks/useDocTitle';

const Home = () => {
    useDocTitle();
    return (
        <main>
            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Featured Products" />
                    <FeaturedSlider />
                </div>
            </section>
            <section className='section_empty'></section>

            <section id="banner">
                <Banner imageUrl="/images/products/Clothing/H.png" />
            </section>
            <section id="products" className='section'>
                <Products category='0' />
            </section>

            <section className='section_empty'></section>

            <section id="banner">
                <Banner imageUrl="/images/products/Food/H.png" />
            </section>
            <section id="products" className='section'>
                <Products category='1' />
            </section>

            <section className='section_empty'></section>

            <section id="banner">
                <Banner imageUrl="/images/products/Headphones/H.png" />
            </section>
            <section id="products" className='section'>
                <Products category='2' />
            </section>

            <section className='section_empty'></section>

            <section id="banner">
                <Banner imageUrl="/images/products/Laptops/H.png" />
            </section>
            <section id="products" className='section'>
                <Products category='3' />
            </section>

            <section className='section_empty'></section>

            <section id="banner">
                <Banner imageUrl="/images/products/Mobiles/H.png" />
            </section>
            <section id="products" className='section'>
                <Products category='4' />
            </section>

            <section className='section_empty'></section>

        </main>
    );
};
export default Home;