import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/component/Today'
import Developer from '../components/component/Developer'
import Webd from '../components/component/Webd'
import Website from '../components/component/Website'
import Gsap from '../components/component/Gsap'
import Portfolio from '../components/component/Portfolio'
import Youtube from '../components/component/Youtube'

const Home = () => {
  return (
    <Main 
      title = "웹스토리보이 유튜브"
      description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다."
    >
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gsap />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home