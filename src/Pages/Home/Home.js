import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';
import Contact from './Contact'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;