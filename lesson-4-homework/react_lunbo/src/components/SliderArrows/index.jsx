import React, { Component } from 'react'
import './index.css'

export default class SliderArrows extends Component {
    constructor() {
        super();
        this.state={};
    }
    
    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div>
                <span
                    className="slider-arrow slider-arrow-left"
                    onClick={this.handleArrowClick.bind(this, -1)}>
                    &lt;
                </span>
                <span
                    className="slider-arrow slider-arrow-right"
                    onClick={this.handleArrowClick.bind(this, 1)}>
                    &gt;
                </span>
            </div>
        )
    }
}
