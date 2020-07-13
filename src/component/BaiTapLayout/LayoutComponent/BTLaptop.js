import React, {Component} from 'react';
import BtIteamLaptop from "./BTIteamLaptop";

class BtLaptop extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center m-3'>Laptop</h3>
                <div className="row">
                    <div className="col-3">
                        <BtIteamLaptop />
                    </div>
                    <div className="col-3">
                        <BtIteamLaptop />
                    </div>
                    <div className="col-3">
                        <BtIteamLaptop />
                    </div>
                    <div className="col-3">
                        <BtIteamLaptop />
                    </div>
                </div>

            </div>
        );
    }
}

export default BtLaptop;