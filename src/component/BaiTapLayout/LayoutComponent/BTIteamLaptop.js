import React, {Component} from 'react';

class BtIteamLaptop extends Component {
    render() {
        return (

                <div className="container">
                    <div className="card bg-light" >
                        <img className="card-img-top" src="./img/lt_macbook.png" alt="Card image"
                             />
                        <div className="card-body text-center">
                        <h4 className="card-title text-center">MACBOOK</h4>
                        <p className="card-text">The MacBook is a brand of notebook computers manufactured by Apple
                            Inc</p>
                        <a href="#" className="btn btn-primary">Detail</a>
                        <a href="#" className="btn btn-danger">Cart</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default BtIteamLaptop;