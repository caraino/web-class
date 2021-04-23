import React from "react"
import Header from '../components/Header'
import Left from '../components/Left'
import Main from '../components/Main'
import Right from "../components/Right";



export default function Home() {
  return (
    <div className='container'>
      <Header />
      <div className='main-content'>
          <Left />
          <Main />
          <Right />
      </div>
    </div>
  )
}
