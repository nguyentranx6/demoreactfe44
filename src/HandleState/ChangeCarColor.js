import React, {Component} from 'react';
import './ChangeCarColor.css';

class ChangeCarColor extends Component {
    state = {
        url: './products/black-car.jpg'
    }
    chanceColor = (url) => {
        this.setState({
            url: url
        })
    }
    //Git add .
    //git commit -m "Buoi 2 - Event binding va Handle State"
    //git checkout -b buoi2_eventbiding
    //git push -u origin buoi2_eventbiding
    //git checkout master
    //git push
    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Bài tập chọn xe</h1>
                <div className='row'>
                    <div className="col-6">
                        <p className='text-center text-danger'>Please choose your favorite about car color</p>
                        <img  src={this.state.url} alt=""/>
                    </div>
                    <div className='col-6 icon'>
                        <img onClick={() => this.chanceColor('./products/black-car.jpg')} src="./icons/icon-black.jpg" alt=""/>
                        <img onClick={() => this.chanceColor('./products/red-car.jpg')} src="./icons/icon-red.jpg" alt=""/>
                        <img onClick={() => this.chanceColor('./products/silver-car.jpg')} src="./icons/icon-silver.jpg" alt=""/>
                        <img onClick={() => this.chanceColor('./products/steel-car.jpg')} src="./icons/icon-steel.jpg" alt=""/>
                    </div>
                </div>
            </div>

        );
    }
}

export default ChangeCarColor;