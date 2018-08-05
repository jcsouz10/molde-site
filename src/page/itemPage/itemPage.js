import React from 'react';
import axios from 'axios';


import Footer from '../../component/footer/footer.js';
import NavBar from '../../component/navbar/navbar.js';
import Main from './main.js';

class PageItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            itemClicked: this.props.match.params.id,
            item: {}
        }
    }

    componentDidMount() {
        const id = this.state.itemClicked;

        axios.get(`http://localhost:3000/menu/${id}`)
            .then(res =>
                this.setState({ item: res.data })
            ).catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="container">
                <NavBar/>
                <Main id={this.state.itemClicked}/>
                <Footer/>
            </div>
        )
    }
}

export default PageItem;