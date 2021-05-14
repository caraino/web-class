import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.head}>
            <div className={styles.headBg}>
                <a href='#!' className={styles.searchBox}>
                    <span className={styles.search}>寻找宝贝店铺</span>
                </a>
            </div>
        </div>
    )
}