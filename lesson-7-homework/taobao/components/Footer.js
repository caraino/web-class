import React from 'react'

import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.toolbar}>
            <a href='#!' className={styles.tab}>
                <span className={styles.iconfont}>&#xe609;</span>
                <span className={styles.font2}>首页</span>
            </a>
            <a href='#!' className={styles.tab}>
                <span className={styles.iconfont}>&#xe646;</span>
                <span className={styles.font2}>逛逛</span>
            </a>
            <a href='#!' className={styles.tab}>
                <span className={styles.iconfont}>&#xe603;</span>
                <span className={styles.font2}>消息</span>
            </a>
            <a href='#!' className={styles.tab}>
                <span className={styles.iconfont}>&#xe601;</span>
                <span className={styles.font2}>购物车</span>
            </a>
            <a href='#!' className={styles.tab}>
                <span className={styles.iconfont}>&#xe607;</span>
                <span className={styles.font2}>我的淘宝</span>
            </a>
        </div>
    )
}