import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProducList extends Component {
    render() {
        return (
            <div className="container">
                <h3 className='text-center m-4'>Smart Phone</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductItem/>
                    </div>
                    <div className="col-3"><ProductItem/></div>
                    <div className="col-3"><ProductItem/></div>
                    <div className="col-3"><ProductItem/></div>

                </div>
            </div>

        );
    }
}

export default ProducList;