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
                            <h1 className="page-title">Fly Credit</h1>
                        </div>
                        <div className="page-desc-wrapper">
                            <h4 className="page-desc">Build Your Business</h4>
                            <h4 className="page-desc">Get Finance</h4>
                            <h4 className="page-desc">Get Credit</h4>
                        </div>
                    </div>
                </div>
                <div className="section-2" style={{height: '1000px'}} >
                    
                </div>
            </div>
        );
    }
}

export default Home;