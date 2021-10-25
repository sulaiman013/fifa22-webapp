import React from 'react';
import './Home.css';
import playersData from '../../Data.json'
import SearchBar from '../Searchbar/Searchbar';
const Home = () => {
    return (
        <div className = "home">
            <SearchBar data={playersData} />
        </div>
    );
};

export default Home;