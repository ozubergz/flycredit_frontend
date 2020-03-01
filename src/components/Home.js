import React from 'react';
import NavBar from './NavBar';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="home-bg-1">
                <div className="bg-1-parallax"></div>
            </div>
            <div style={{height: '1000px'}}></div>
        </div>
    );
}

export default Home;