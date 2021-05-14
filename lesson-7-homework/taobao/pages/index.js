import React , {useEffect,useRef}from "react"
import Header from '../components/Header'
import Circle from '../components/Circle'
import LocalNav from '../components/LocalNav'
import MainNav from '../components/MainNav'
import Recommend from '../components/Recommend'
import Footer from '../components/Footer'


import styles from '../styles/Home.module.css'


export default function Home({goods}) { 
  const backRef = useRef();
  
  useEffect(() => {
    let backR=backRef.current;
    function back() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0
        if (scrollTop >= 300)
          backR.style.visibility='visible';
        else
          backR.style.visibility='hidden';
    }

    window.addEventListener('scroll', back)
    
    backR.addEventListener('click', function() {
      window.scroll(0, 0);
    })

    return () => {
        window.removeEventListener('scroll', back)
        backR.removeEventListener('click', function() {
          window.scroll(0, 0);
        })
    }
  }, [])
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
          <Circle />
          <LocalNav />
          <MainNav />
          <Recommend goods={goods}/>
      </div>
      <div className={styles.back} ref={backRef}></div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/goods")
  let data = await res.json()


  return { 
    props: {goods: data.data }
  }
}