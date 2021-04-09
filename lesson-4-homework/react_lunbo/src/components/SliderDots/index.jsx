import React, { Component } from 'react'
import './index.css'

export default class SliderDots extends Component {
    constructor() {
        super();
        this.state={};
    }
    
    handleDotClick(i) {
        var option = i - this.props.nowLocal;
        this.props.turn(option);
    }
    
    render() {
        let dotNodes = [];
        let { count, nowLocal } = this.props;
        for(let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"slider-dot" + ((i === nowLocal)||(nowLocal===count&&i===0)?" slider-dot-selected":"")}
                    onClick={this.handleDotClick.bind(this, i)}>
                </span>
            );
        }
        return (
            <div>
                <div className="slider-dots-wrap">
                    {dotNodes}
                </div>
            </div>
        )
    }
}