import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import './index.css'

export default class SliderItem extends Component {
    constructor() {
        super();
        this.state={};
    }
    
    render() {
        let { count, item } = this.props;
        let width = 100 / (count+1) + '%';
        return (
            <li className="slider-item" style={{width: width}}>
                <LazyLoad>
                    <img src={item.src} alt={item.alt} />
                </LazyLoad>
                
            </li>
        )
    }
}
