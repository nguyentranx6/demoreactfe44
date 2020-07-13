import React, {Component} from 'react';
import classes from './DataBinding.model.css'
class DataBinding extends Component {
    //Thuộc tính
    // this.thuoctinh
    name = 'johan';
    //Phương thức:
    renderImg = () => {
        return <div>
            <div className='text-center'>
                <img src='https://picsum.photos/300/300' alt=""/>
            </div>
        </div>
    }
    objectStyle = {
            fontweight: 'bold'
    };
    //Lệnh Git
    // git checkout -b name_branch tạo Nhánh
    // git branch // kiểm tra nhánh

    render() {
        let title = 'ABC - FE44';
        let src = 'https://picsum.photos/400/300'
        let lentRender = function () {
            return <h1>Hello</h1>
        }
        console.log('test')
        return (

            <div>
                <h1 id='title' className='text-center'> {title}</h1>
                <div className={`${classes.title} text-center`}>Day la hinh anh</div>
                <div style={this.objectStyle} >Test CSSS</div>
                <img className='text-center' src={src} alt=""/>
                {lentRender()}
                <p>Name: {this.name}</p>
                {this.renderImg()}
            </div>
        );
    }
}

export default DataBinding;