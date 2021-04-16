import React, { useEffect, useState} from 'react'

export default function Left() {
    const [leftState, setLeftState] = useState({});


    useEffect(() => {
        
        const handler = () => {
            setLeftState({
            scrollT: document.documentElement.scrollTop
          });
        };

        window.addEventListener('scroll', handler, { passive: true });

        return () => {
          window.removeEventListener('scroll', handler);
        };
    }, []);

    
    return (
        <>
            <div className="left">
                <div className="left-content" className={leftState.scrollT>=40 ? "left-fixed" : ""}>
                    <a className="logo" href="#!">
                        <img src="/images/LogoImg.png" />
                    </a>
                    <ul className="channels">
                        <li><a className="channel current1" href="#!">推荐</a></li>
                        <li><a className="channel" href="#!">西瓜视频</a></li>
                        <li><a className="channel" href="#!">热点</a></li>
                        <li><a className="channel" href="#!">直播</a></li>
                        <li><a className="channel" href="#!">图片</a></li>
                        <li><a className="channel" href="#!">科技</a></li>
                        <li><a className="channel" href="#!">娱乐</a></li>
                        <li><a className="channel" href="#!">游戏</a></li>
                        <li><a className="channel" href="#!">体育</a></li>
                        <li><a className="channel" href="#!">懂车帝</a></li>
                        <li><a className="channel" href="#!">财经</a></li>
                        <li><a className="channel" href="#!">数码</a></li>
                        <li><a className="channel" href="#!">更多</a></li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .left {
                    width: 110px;
                    height: 600px;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 30px;
                    background-color: #fff;
                    z-index: 10;
                }
                
                .left-fixed {
                    position: fixed;
                    top: 10px;
                }
                
                .left-content {
                    width: 110px;
                    z-index: 20;
                }
                
                .logo {
                    display: block;
                    width: 110px;
                    height: 28px;
                    margin-bottom: 16px;
                }
                
                .logo img {
                    width: 108px;
                    height: 27px;
                }
                
                .channel {
                    display: block;
                    width: 110px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #444;
                    font-size: 16px;
                    border-radius: 4px;
                    margin-bottom: 2px;
                }
                
                .current1 {
                    background-color: #ed4040;
                    color: #fff;
                }
                
                .channel:hover {
                    background-color: #ed4040;
                    color: #fff;
                }
            `}</style>
        </>
    )
}