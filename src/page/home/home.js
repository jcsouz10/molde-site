import React from 'react';

import Footer from '../../component/footer/footer.js';
import NavBar from '../../component/navbar/navbar.js';
import Main from './main.js';

import './styled.css';

const HomePage = () => {

    return (
        <div>
            <NavBar />
            <Main />
            <Footer/>
        </div>
    )
}

export default HomePage;