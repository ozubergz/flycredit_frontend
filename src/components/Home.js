import React from 'react';
import NavBar from './NavBar';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="home-bg-1">
                <div className="bg-1-parallax">

                    <div className="title-wrapper">
                        <div className="page-title-wrapper">
                            <h1 className="page-title">Fly Credit</h1>
                        </div>
                        <div className="page-desc-wrapper">
                            <h4 className="page-desc">Build Your Business</h4>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{height: '1000px'}}></div>
        </div>
    );
}

export default Home;