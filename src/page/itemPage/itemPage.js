import React, { Fragment } from 'react';
import axios from 'axios';


import Footer from '../../component/footer/footer.js';
import NavBar from '../../component/navbar/navbar.js';
import BoxItemCardapioSelected from '../../component/boxItemCardapioSelected/boxItemCardapioSelected';

import Main from '../../component/main/Main.js';

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
            ).catch(err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Main>
                    <BoxItemCardapioSelected id={this.state.itemClicked} />
                </Main>
                <Footer />
            </Fragment>
        )
    }
}

export default PageItem;