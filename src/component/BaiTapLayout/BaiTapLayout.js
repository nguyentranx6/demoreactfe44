import React, {Component} from 'react';
import BtHeader from "./LayoutComponent/BTHeader";
import BtSlider from "./LayoutComponent/BTSlider";
import ProducList from "./LayoutComponent/ProducList";
import BtLaptop from "./LayoutComponent/BTLaptop";
import BtFooter from "./LayoutComponent/BTFooter";

class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BtHeader />
                <BtSlider />
                <ProducList />
                <BtLaptop />
                <BtFooter />
            </div>
        );
    }
}

export default BaiTapLayout;