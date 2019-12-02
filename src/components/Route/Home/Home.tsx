import './Home.scss';
import React, { Component } from 'react';

export class Home extends Component {
    public constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div className="page-wrap">
                <div className="faucet">
                    <h2>Print Testnet Divi Coins</h2>
                    <p>Testnet Divi Address</p>
                    <input type="text" placeholder="Address"/>
                    <p>Amount of Divis</p>
                    <div className="inline-input">
                        <input type="number" placeholder="# of Divis"/>
                        <a className="button">Print</a>
                    </div>
                </div>
            </div>
        );
    }
}
