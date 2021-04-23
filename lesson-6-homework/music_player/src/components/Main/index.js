import React from 'react'
import './index.css'

export default function Main(props) {
    const {items,nowIndex,ChooseClick,SetIsPlay}=props;

    // 将时间戳转化为分秒
    const Trans=function(time) {
        const minutes = Math.floor(time  / 1000/60);
        const seconds = Math.floor(time/1000) %  60;
        return (minutes<10?'0'+minutes:minutes)+':'+(seconds<10?'0'+seconds:seconds)
    }

    return (
        <div className="main">
            <div className="content">
                <div className="music-head">
                    {/* 歌单封面随机 */}
                    <img src="https://unsplash.it/200/250/?random" alt="" />
                    <div className="catty-music">
                        <div className="album-msg">
                            <h2>我喜欢的音乐</h2>
                            <p className="sm-hide">xyq_joy</p>
                            <p className="sm-hide">歌曲：{items.length}&nbsp;&nbsp;播放：86</p>
                        </div>
                        <div className="edit">
                            {/* 播放全部自动从第一首开始顺序播放 */}
                            <span className="fa fa-play" onClick={(e)=>{ChooseClick(0);
                            SetIsPlay(true);}}>&nbsp;播放全部</span>
                            <span className="fa fa-plus">&nbsp;添加</span>
                            <span className="fa fa-share">&nbsp;分享</span>
                        </div>
                    </div>
                </div>
                <ul className="music-list">  
                    {/* 遍历添加音乐列表 */}
                    {items.map((item,i)=>{
                        return <li className={"music-item"+((i === nowIndex)?" current":"")} onDoubleClick={(e)=>{
                            // 双击自动播放
                            ChooseClick(i);
                            SetIsPlay(true);
                        }}>
                            <p className="music-name">{i+1}.{item.name}</p>
                            <p className="sm-hide">{item.artist}</p>
                            <p className="sm-text-right">{Trans(item.time)}</p>
                            <p className="sm-hide"><span className="catty-cloud">{item.album}</span></p>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
