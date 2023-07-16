import React from 'react'
import { BannerPage, BlogPage, FooterPage, NewArrival, SaleSection, TrendingPage } from './homePageComponent/TrendingPage'

export  function HomePage() {
  return (
    <div> <BannerPage/><NewArrival/> <SaleSection/> <TrendingPage/> <BlogPage/> <FooterPage/></div>
  )
}
