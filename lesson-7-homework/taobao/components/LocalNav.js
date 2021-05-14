import React ,{useRef,useState,useEffect}from 'react'

import styles from '../styles/LocalNav.module.css'

export default function LocalNav() {
    const navRef=useRef();
    const [positionX,setPositionX]=useState(0);
    let startX=0;
    

    useEffect(()=>{
        const nav=navRef.current;
        let length=window.innerWidth-652.5;
        const start=(e)=> {
            startX= e.targetTouches[0].pageX;
            
        }
        let translateX=0;
        let newPosition=0;
        const move=(e)=> {
            // 计算移动距离
            let moveX = e.targetTouches[0].pageX - startX;

            translateX=newPosition+moveX;
            
            if(translateX>0) {
                translateX=0;
            }else if(translateX<length) {
                translateX=length;
            }
            nav.style.transform = 'translateX(' + translateX + 'px)';

            e.preventDefault(); // 阻止滚动屏幕的行为
        }
        const end=(e)=> {
            setPositionX(x=>{
                newPosition=translateX;
                return 30*newPosition/length
            });          
        }

        nav.addEventListener("touchstart", start);
        nav.addEventListener("touchmove", move);
        nav.addEventListener("touchend", end);

        
        return ()=>{
            nav.removeEventListener("touchstart", start);
            nav.removeEventListener("touchmove", move);
            nav.removeEventListener("touchend", end);
        }
    },[])


    return (
        <div className={styles.local}>
            <div className={styles.arc}></div>
            <div className={styles.content}>
                <ul className={styles.localNav} ref={navRef}>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon1}></span> 
                            <span className={styles.font1}>天猫新品</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon2}></span>
                            <span className={styles.font1}>充值中心</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon3}></span>
                            <span className={styles.font1}>今日爆款</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon4}></span>
                            <span className={styles.font1}>机票酒店</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon5}></span>
                            <span className={styles.font1}>天猫国际</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon6}></span>
                            <span className={styles.font1}>金币庄园</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon7}></span>
                            <span className={styles.font1}>饿了么</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon8}></span>
                            <span className={styles.font1}>阿里拍卖</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon9}></span>
                            <span className={styles.font1}>天猫超市</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon10}></span>
                            <span className={styles.font1}>淘宝吃货</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon11}></span>
                            <span className={styles.font1}>分类</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon12}></span>
                            <span className={styles.font1}>闲鱼</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon13}></span>
                            <span className={styles.font1}>天猫美食</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon14}></span>
                            <span className={styles.font1}>会员中心</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon15}></span>
                            <span className={styles.font1}>阿里健康</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon16}></span>
                            <span className={styles.font1}>造点新货</span>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <span className={styles.localNavIcon17}></span>
                            <span className={styles.font1}>口碑生活</span>
                        </a>
                        <a href=''>
                            <span className={styles.localNavIcon18}></span>
                            <span className={styles.font1}>土货鲜食</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.navBar}>
                <div className={styles.bar}>
                    <div className={styles.moveBar} style={{'transform':'translate('+positionX+'px)'}}></div>
                </div>
            </div>
        </div>
    )
}