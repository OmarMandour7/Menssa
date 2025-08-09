import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
const HomePage = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer title=" Top Cources" btntitle="More" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer title="New Lessons" btntitle="More" pathText="/products" />
        </div>
    )
}

export default HomePage
