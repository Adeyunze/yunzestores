import React from 'react'
import Header from '../Header';
import Trending from '../TrendingSection';
import Advert from '../Advert';
import Featured from '../Featured';

const Home = () => {
    return (
        <>
            <Header/>
            <Trending/>
            <Advert/>
            <Featured/>
        </>
    )
}

export default Home
