import './Footer.scss';
import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';

export class Footer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <footer>
                <div className="wrapper">
                    <div className="fhead">
                        <img src={logo} alt="logo" title="logo" />
                        <h3>Divi Testnet Faucet</h3>
                    </div>
                </div>
            </footer>
        );
    }
}
