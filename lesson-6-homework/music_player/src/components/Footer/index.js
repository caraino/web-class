import React,{useState,useEffect} from 'react'
import './index.css'

export default function Footer(props) {
    const {items,nowIndex,ChooseClick,isPlay,SetIsPlay}=props;

    const[isLoop,setIsLoop]=useState(false);
    const[progress,setProgress]=useState(0);

    const onPlay=function () {
        SetIsPlay(!isPlay);
        
    }

    const onLoop=function () {
        setIsLoop(!isLoop);
        
    }

    const SetProgress=function (n) {
        setProgress(n);
        
    }

    useEffect(() => {
        let audio = document.getElementById('audio');

        if(isPlay) {
            audio.play();
            //每0.5秒更新进度条
            const timer=setInterval(()=> {
                SetProgress(((audio.currentTime)/(audio.duration))*100);
            },500);
            
            if(isLoop) {
                audio.loop=true;//设置循环播放
            }else {
                audio.loop=false;
                audio.addEventListener('ended',nextPlay,false);//添加歌曲播放结束监听事件，自动播放下一首
                return ()=>{
                    audio.removeEventListener('ended',nextPlay);//useEffect中在回调函数解除绑定事件
                }
            }
            return () => {
                clearInterval(timer);
            };
            
        }else {
            audio.pause();
        }
    })


    //上一首
    const prePlay=function () {
        if(nowIndex<1) {
            ChooseClick(items.length-1);
        }else {
            ChooseClick(nowIndex-1);
        }
        
    }

    //下一首
    const nextPlay=function () {
        if(nowIndex>items.length-2) {
            ChooseClick(0);
        }else {
            ChooseClick(nowIndex+1);
        }
        
    }

    return (
        <div className="footer">
            <div className="song">
                <img src={items[nowIndex].picUrl} alt="album art" />
                <div className="info">
                    <p className="title">{items[nowIndex].name}</p>
                    <p className="artist">{items[nowIndex].artist}</p>
                </div>
            </div>
            <div className="progress sm-hide"><div className="nowProgress" style={{'width':progress+'%'}}></div></div>
            <div className="controls">
                <span className="fa fa-step-backward" onClick={(e)=>prePlay()}></span>
                <span className={"fa"+(isPlay===false?" fa-play":" fa-pause")} onClick={(e)=>onPlay()}></span>
                <span className="fa fa-step-forward"  onClick={(e)=>nextPlay()}></span>
                <span className={"fa fa-repeat sm-hide"+(isLoop?" select":"")} onClick={(e)=>onLoop()}></span>
                <span className="fa fa-like sm-hide"></span>
                <audio id="audio" src={items[nowIndex].src}></audio>
            </div>
        </div>
    )
}
