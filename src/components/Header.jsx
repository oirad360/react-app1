import React, { Component } from 'react';
import './NavBar'
import NavBar from './NavBar';
//C:\Users\oirad\react-app1\public\assets\shutterstock_1216923970SPOSTATO.jpg
class Header extends Component {
    render() { 
        return (
            <header className='bg-primary' style={{height: 300, backgroundImage: 'url(assets/shutterstock_1216923970SPOSTATO.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <NavBar />
            </header>
        );
    }
}
 
export default Header;