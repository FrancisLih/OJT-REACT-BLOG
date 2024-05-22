import React from 'react'
import UIHeader from '../partials/UIHeader'
import BannerSlider from './BannerSlider'
import Trending from './Trending'
import Feature from './Feature'
import FashionStyle from './FashionStyle'
import PopularCategory from './PopularCategory'
import UIFooter from '../partials/UIFooter'

const Home = () => {
  return (
    <>
    <UIHeader/>
    <BannerSlider/>
    <Trending/>
    <Feature/>
    <FashionStyle/>
    <PopularCategory/>
    <UIFooter/>
    </>
  )
}

export default Home