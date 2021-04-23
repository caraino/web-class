import React, { Component } from 'react'
import SliderItem from './components/SliderItem'
import SliderDots from './components/SliderDots'
import SliderArrows from './components/SliderArrows'
import './app.css'

export default class app extends Component {
    constructor() {
        super();
        this.state = {
            nowLocal: 0,

            startX: "",
            moveX: "",
        };
    }
    

    myRef=React.createRef();

    //无缝滚动
    turn(n) {
        var num = this.state.nowLocal+n;

        // this.myRef.style.transitionDuration = this.props.speed+'s';
        if(num <0) {
            this.myRef.style.transitionDuration = 0+'s';
            this.myRef.style.left=-100 * this.props.items.length + '%';
            setTimeout(()=>{// 等动画移除后并且回到了0点  再增加回动画时间（dom刷新一般是30s）
                this.myRef.style.transitionDuration = this.props.speed+'s';// 再增加回来这个动画
                num = this.props.items.length-1;
                this.setState({nowLocal: num});
            },30)
            return;//因为设置了setTimeout所以要等待setTimeout后再设置最新状态
            
        }
        if(num > this.props.items.length) {
            this.myRef.style.transitionDuration = 0+'s';
            this.myRef.style.left=0 + '%';
            setTimeout(()=>{// 等动画移除后并且回到了0点  再增加回动画时间（dom刷新一般是30s）
                this.myRef.style.transitionDuration = this.props.speed+'s';// 再增加回来这个动画
                num = 1;
                this.setState({nowLocal: num});
            },30)
            return;//因为设置了setTimeout所以要等待setTimeout后再设置最新状态
        }
        this.setState({nowLocal: num});

        
    }

    //鼠标拖动
    touchStart (e) {
		this.setState({
			startX: e.touches[0].pageX
		})
	}

    

	touchMove (e) {
		e.preventDefault()
		this.pausePlay();

        var w=this.props.size+'px';
		var _moveX = e.touches[0].pageX - this.state.startX
		this.myRef.style.left=-(this.state.nowLocal+(_moveX/w)) * 100+'%' 

		this.setState({
			moveX: _moveX,
		})
	}


	touchEnd (e) {
		if(Math.abs(this.state.moveX) <= 100) {
			this.turn(0)
		} else {
			if(this.state.moveX > 100) {
				this.turn(-1)
			} else if(Math.abs(this.state.moveX) > 100) {
				this.turn(1)
			}
		}

		this.setState({
			moveX: 0
		})
        this.goPlay();
	}

    // 开始自动轮播
    goPlay() {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }

    render() {
        let count = this.props.items.length;

        let itemNodes = this.props.items.map((item, idx) => {
            return <SliderItem item={item} count={count} key={'item' + idx} />;
        });

        let item1=React.cloneElement(itemNodes[0]);

        let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;

        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

        return (
            <div className="slider" style={{width:this.props.size+'px'}}
            onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                <ul ref={e=>(this.myRef=e)} 
                    onTouchStart={e=>this.touchStart(e)} onTouchMove={e=>this.touchMove(e)} onTouchEnd={e=>this.touchEnd(e)}
                    style={{
                        left: -100 * this.state.nowLocal + "%",
                        transitionDuration: this.props.speed + "s",
                        width: (this.props.items.length+1) * 100 + "%"
                    }}>
                    {itemNodes}
                    {item1}
                </ul>
                {this.props.arrows?arrowsNode:null}
                {this.props.dots?dotsNode:null}
            </div>
        );
    }
}

app.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
    size:500,
};

app.autoPlayFlag = null;
