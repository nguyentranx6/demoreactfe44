import React, {Component} from 'react';

class EventBinding extends Component {
    handleClick = () => {
        alert('fee 44')
    }
    showMessage = (message) => {
        alert('Hello ' + message)
    }
    render() {
        return (
            <div className='text-center font-weight-bold'>
                event binding componet
                <br/>
                <button className='btn btn-success' onClick={this.handleClick}>Click Me</button>
                <button className='btn btn-success' onClick={this.showMessage.bind(this, 'helo me')}> Me</button>
                <br/>
                <button onClick={()=> this.handleClick()} className='btn btn-warning'>Please Click me</button>
                <br/>
                <button className='btn btn-primary' onClick={()=> this.showMessage('Hào gà')}>Hello Hào</button>
            </div>
        );
    }
}

export default EventBinding;