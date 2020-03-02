import React, { Component } from 'react';
import NavBar from './NavBar';


class Home extends Component {

    state = {
        height: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({height: this.section.clientHeight});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let scroll = window.scrollY;
        let height = this.state.height;
        let velocity = 13;
        let position = `${50 + (scroll / height) * velocity}%`;        
        this.section.style.backgroundPosition = `50% ${position}`;
    }
    
    render() {
        console.log(this.state.height)
        return (
            <div>
                <NavBar />
                <div className="section-1" ref={ section => this.section = section }>
                    <div className="title-wrapper">
                        <div className="page-title-wrapper">
                            <h1 className="page-title">Fly.Credit</h1>
                        </div>
                        <div className="page-desc-wrapper">
                            <h4 className="page-desc">Build Your Business</h4>
                        </div>
                    </div>
                </div>

                <div className="container section-2 py-5">
                    <div className="section2-desc-wrapper">
                        <h1>What we do.</h1>
                        <div className="desc-body">
                            <p>We help entrepreneurs obtain the capital and credit they need to fuel
                            their business. We help you walk through all the necessary steps to setup your business
                            credibly to meet credit issuer and lender approval criteria. We help
                            you get business credit for your EIN that’s not linked to your SSN with no 
                            personal credit check. We help you get approved for credit lines and loans
                            to start and grow your company.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-3">
                    
                </div>
            </div>
        );
    }
}

export default Home;