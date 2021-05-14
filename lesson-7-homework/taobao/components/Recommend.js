import React from 'react'
import Link from 'next/link'

import styles from '../styles/Recommend.module.css'




function SingleItem(item,i) {
    let router={
        pathname: '/detail',
        query: {
            id: item.nid
        }
    }
    return (
        <div className={styles.recommendItem}>
            {/* 用路由遮盖（Route Masking）的干净的URL */}
            <Link href={router}>
                <a className={styles.imgBox}><img src={item.pict_url} /></a>  
            </Link>
            <Link href='/detail.js' as={`/${item.nid}`}>
                <a className={styles.info}>
                    <div className={styles.titleBox}>{item.title}</div>
                    <div className={styles.priceBox}>
                        <span className={styles.icon}>￥</span>
                        <span className={styles.price}>{item.real_wap_price}</span>
                        <span className={styles.buyer}>{item.month_sale}</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default function Recommend({goods}) {
    return (
        <div className={styles.recommend}>
            <div className={styles.like}>
                <img src='/images/like.png' />
            </div>
            {goods.map((item,i)=><div key={i}>{SingleItem(item)}</div>)}
        </div>
    )
}