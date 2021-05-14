import React from "react"
import { withRouter} from 'next/router'
import styles from '../styles/Detail.module.css'

function Detail({goods,router}) {
  const item =goods.find(item=>item.nid===router.query.id);

  return (
    <div className={styles.detail}>
      <div className={styles.goodsContain}>
        <div className={styles.picsBox}>
          <div className={styles.pics}>
            <img src={item.pict_url} /> 
          </div>
        </div>
        <div className={styles.msg}>
          <div className={styles.priceSection}>
            <span className={styles.section1}>￥</span>
            <span className={styles.section2}>{item.real_wap_price}</span>
          </div>
          <div className={styles.sales}>
            <div className={styles.salesMsg}><span>（商品优惠信息）</span></div>
            <a className={styles.salesDetail}>查看 &gt;</a>
          </div>
          <div className={styles.buys}>
            <span className={styles.tag}>（商品相关tag）</span>
            <span className={styles.buyer}>{item.month_sale}</span>
          </div>
          <div className={styles.titleSection}>
            <span className={styles.title}>{item.title}</span>
          </div>
        </div>
        <div className={styles.msg}><h1>选择</h1></div>
        <div className={styles.msg}><h1>评价</h1></div>
        <div className={styles.msg}><h1>店铺信息</h1></div>
      </div>
      <div className={styles.buy}>
        <div className={styles.others}>
          <a href='#!' className={styles.tab}>
            <span className={styles.iconfont}>&#xe604;</span>
            <span className={styles.font3}>店铺</span>
          </a>
          <a href='#!' className={styles.tab}>
            <span className={styles.iconfont}>&#xe60d;</span>
            <span className={styles.font3}>客服</span>
          </a>
          <a href='#!' className={styles.tab}>
            <span className={styles.iconfont}>&#xe602;</span>
            <span className={styles.font3}>收藏</span>
          </a>
        </div>
        <div className={styles.buyBtn}>
          <div className={styles.btn1}><span className={styles.text}>加入购物车</span></div>
          <div className={styles.btn2}><span className={styles.text}>立即购买</span></div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/goods")
  let data = await res.json()


  return { 
    props: {goods:data.data }
  }
}

export default withRouter(Detail)