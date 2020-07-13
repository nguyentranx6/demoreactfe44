import React, {Component} from 'react';

class HandleState extends Component {
    state = {
        isLogin: false,
        userName: 'Hao Gà'
    }


    renderContent = () => {
        if(this.state.isLogin) {
            return <h1 className='text-success'>
                Hello {this.state.userName}
            </h1>
        }
        return <button className='btn btn-danger' onClick={()=> this.login()}>Đăng nhập Cách 2</button>
    }
    //
    login = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })

    }
    render() {

        return (
            <div className='text-center text-success mt-4 mb-4'>
                <h1 >Handle State</h1>
                <button onClick={()=> this.login()} className='btn btn-info'>Toggle click</button>
                <br/>
                <br/>
                {this.renderContent()}
            </div>
        );
    }
}

export default HandleState;