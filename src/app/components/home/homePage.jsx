import React ,{useEffect, useState} from 'react'
import { BannerPage, BlogPage, FooterPage, NewArrival, SaleSection, TrendingPage } from './homePageComponent/TrendingPage'
import { productService } from '../../api/product.service';
export  function HomePage() {

  const [banner, setBanner] = useState([]);


  useEffect(()=>{
   getBannerPage();
  },[])

 async function getBannerPage() {
    const response = await productService.getBanner();
    if (response.status === 200) {
      setBanner(response.data.banners);
    }
  }

  return (
    <div> <BannerPage  banner={banner} /><NewArrival/> <SaleSection/> <TrendingPage/> <BlogPage/> <FooterPage/></div>
  )
}
