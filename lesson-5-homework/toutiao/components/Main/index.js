import React, { useEffect, useState} from 'react'

export default function Main() {
    const [list, setList] = useState([]);
    function getNews() {
        fetch("/api/news").then(async (res) => {
            const resp = await res.json();
            setList( l=>[...l,...resp.data]);
        });
    }
    
    useEffect(() => {
        getNews()
    }, []);

    function DateDiff(startTime) {
        var date = (new Date()).valueOf() / 1000;
        var timeDiff = date - startTime
        if (Math.floor(timeDiff / 86400 / 365) >= 1) {
            return Math.floor(timeDiff / 86400 / 365) + "年前";
        } else if (Math.floor(timeDiff / 86400 / 30) >= 1) {
            return Math.floor(timeDiff / 86400 / 30) + "月前";
        } else if (Math.floor(timeDiff / 86400) >= 1) {
            return Math.floor(timeDiff / 86400) + "天前";
        } else if (Math.floor(timeDiff / 3600) >= 1) {
            return Math.floor(timeDiff / 3600) + "小时前";
        } else if (Math.floor(timeDiff / 60) >= 1) {
            return Math.floor(timeDiff / 60) + "分钟前";
        } else {
            return "刚刚";
        }

    }



    useEffect(() => {
        
        const handler = () => {
          let scrollH=document.documentElement.scrollHeight, 
              clientH= document.documentElement.clientHeight,
              scrollT=document.documentElement.scrollTop;
          console.log(scrollH-clientH-scrollT)
          if(scrollH-clientH<=scrollT+400) {
            getNews();   
          }
        };

        window.addEventListener('scroll',throttle(handler,500), { passive: true });

        return () => {
          window.removeEventListener('scroll', throttle(handler,500));
        };
    }, []);


    // 简单的节流函数
    var throttle = function(func, delay) {            
        var timer = null;            
        return function() {                
            var context = this;               
            var args = arguments;                
            if (!timer) {                    
                timer = setTimeout(function() {                        
                    func.apply(context, args);                        
                    timer = null;                    
                }, delay);                
            }            
        }        
    }    


    return (
        <>
            <div className="center-content">
                <div className="msg">
                </div>
                <div className="news-list">
                    {list.map((i) => {
                        if(i.img_url==='null') {
                            return (
                                <div className="mode1">
                                    <div className="news-title">
                                        <a className="news-link" href={i.source_url}>{i.title}</a>
                                    </div>
                                    <div className="news-footer">
                                        <div className="news-footer-left">
                                            <a className="news-tag tag-politic" href="#!">{i.tag}</a>
                                            <a className="news-media-img" href={i.url}><img src={i.source_img} /></a>
                                            <a className="news-about" href={i.url}>&nbsp;{i.source}&nbsp;·</a>
                                            <a className="news-about" href="#!">&nbsp;{i.comments}评论&nbsp;·</a>
                                            <span className="news-time">&nbsp;{DateDiff(i.time)}</span>
                                        </div>
                                        <div className="news-footer-right">
                                            <div className="dislike">
                                                <span className="close">X</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }else {
                            return (
                                <div className="mode2">
                                    <div className="mode2-left">
                                        <a className="mode2-img" href={i.source_url}>
                                            <img src={i.img_url} />
                                        </a>
                                    </div>
                                    <div className="mode2-right">
                                        <div className="mode2-news">
                                            <div className="news-title">
                                            <a className="news-link" href={i.source_url}>{i.title}</a>
                                        </div>
                                        <div className="news-footer">
                                            <div className="news-footer-left">
                                                <a className="news-tag tag-politic" href="#!">{i.tag}</a>
                                                <a className="news-media-img" href={i.url}><img src={i.source_img} /></a>
                                                <a className="news-about" href={i.url}>&nbsp;{i.source}&nbsp;·</a>
                                                <a className="news-about" href="#!">&nbsp;{i.comments}评论&nbsp;·</a>
                                                <span className="news-time">&nbsp;{DateDiff(i.time)}</span>
                                            </div>
                                            <div className="news-footer-right">
                                                <div className="dislike">
                                                    <span className="close">X</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        
                    })}
                </div>
            </div>
            <style jsx>{`
               .center-content {
                width: 660px;
                display: inline-block;
                margin: 0 auto;
                }
                
                .mode1 {
                    padding: 10px 0;
                    border-bottom: 1px solid #e8e8e8;
                }
                
                .news-title {
                    font-size: 20px;
                    margin-bottom: 4px;
                    line-height: 1.3;
                    font-weight: 700;
                    max-height: 52px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                
                .news-link {
                    color: #222;
                }
                
                .news-footer {
                    color: #999;
                    margin-top: 10px;
                    height: 20px;
                }
                
                .news-footer-left {
                    display: inline-block;
                    vertical-align: middle;
                    line-height: 20px;
                    font-size: 0;
                }
                
                .news-footer-left>* {
                    display: inline-block;
                    vertical-align: middle;
                    line-height: 1;
                    font-size: 14px;
                }
                
                .news-tag {
                    font-size: 12px;
                    margin-right: 10px;
                    padding: 1px 2px;
                    border: 1px solid #87a5b5;
                    color: #87a5b5;
                }
                
                .tag-video {
                    border: 1px solid #ff7920;
                    color: #ff7920;
                }
                
                .news-media-img {
                    width: 18px;
                    height: 18px;
                    margin-right: 2px;
                    border-radius: 50%;
                    overflow: hidden;
                }
                
                .news-media-img img {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                }
                
                .news-about {
                    font-size: 14px;
                    color: #777;
                }
                
                .news-time {
                    color: #777;
                }
                
                .mode2 {
                    height: 102px;
                    padding: 10px 0;
                    border-bottom: 1px solid #e8e8e8;
                }
                
                .mode2-left {
                    width: 158px;
                    height: 102px;
                    margin-right: 16px;
                    overflow: hidden;
                    float: left;
                }
                
                .mode2-img {
                    display: inline-block;
                    position: relative;
                    transform-style: preserve-3d;
                }
                
                .mode2-img>img {
                    width: 158px;
                    height: 102px;
                    transition: all 0.5s;
                }
                
                .video-tip {
                    position: absolute;
                    right: 8px;
                    bottom: 8px;
                    padding: 0 6px 0 18px;
                    background-color: rgba(0, 0, 0, 0.7);
                    border-radius: 10px;
                    font-size: 12px;
                    color: #fff;
                    height: 22px;
                    line-height: 22px;
                }
                
                .video-tip::before {
                    content: "";
                    position: absolute;
                    top: 7px;
                    left: 8px;
                    border-style: solid;
                    border-width: 5px;
                    border-color: transparent transparent transparent #fff;
                }
                
                .mode2-right {
                    overflow: hidden;
                    height: 100%;
                    position: relative;
                }
                
                .mode2-news {
                    display: inline-block;
                    width: 100%;
                    vertical-align: middle;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                .news-footer-right {
                    float: right;
                }
                
                .dislike {
                    height: 20px;
                    width: 20px;
                }
                
                .close {
                    font-size: 12px;
                    color: #ddd;
                }
            `}</style>
        </>
    )
}