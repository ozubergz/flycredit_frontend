import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Menu pointing secondary>
                    <Menu.Item position="left">
                        <h1>Logo</h1>
                    </Menu.Item>
                    <Menu.Item
                        name="home"
                    />
                    <Menu.Item
                        name="blogs"
                    />
                    <Menu.Item
                        name="about"
                    />
                    <Menu.Item
                        name="contact"
                    />
                </Menu>
            </div>
        );
    }
}

export default NavBar;