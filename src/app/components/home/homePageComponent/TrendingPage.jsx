import React from 'react'
import pic1 from '../../../assets/e-commerceImg/baby-clothes.png';
import pic2 from '../../../assets/e-commerceImg/dress.png';
import pic3 from '../../../assets/e-commerceImg/high-heels.png';
import pic4 from '../../../assets/e-commerceImg/jacket.png';
import pic5 from '../../../assets/e-commerceImg/necklace.png';
import pic6 from '../../../assets/e-commerceImg/hair-straightner.png';
import pic7 from '../../../assets/e-commerceImg/portfolio.png';
import pic8 from '../../../assets/e-commerceImg/sneakers.png';
import pic9 from '../../../assets/e-commerceImg/toys.png';
import pic10 from '../../../assets/e-commerceImg/watch.png';
import banner1 from '../../../assets/e-commerceImg/1608b80571524e822b386e9da05f02f2.jpg';
import banner2 from '../../../assets/e-commerceImg/ww8.jpg';
import Slider from 'react-slick';
import { banner, newArrival1, newArrival2 } from '../../../data/homePageData';
import '../../../scss/slick-carousel/slick/slick.css';
import '../../../scss/slick-carousel/slick/slick-theme.css' ;
import ProductCard from '../../../custom-components/ProductCard'; 
export function TrendingPage() {
  return (
    <section class="trending-categories">
    <div class="container-fluid">
      <div class="text-center py-5">
        <h3 class="heading-text">
          Our Trending Categories
        </h3>
        <h4 class="sub-heading-text">
          "The joy of dressing is an art."
        </h4>
      </div>
      <div class="row justify-content-between-lg justify-content-center">
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic1} alt="" />
            <p><a href="#" class="category-link">Kid Clothes</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic2} alt="" />
            <p><a href="#" class="category-link">Women Clothes</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic3}  alt="" />
            <p><a href="#" class="category-link">High Heels</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic4} alt="" />
            <p><a href="#" class="category-link">Men Clothes</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic5} alt="" />
            <p><a href="#" class="category-link">Jewellery</a></p>
          </div>            
        </div>
      </div>
      <div class="row justify-content-between-lg justify-content-center mt-5">
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic6} alt="" />
            <p><a href="#" class="category-link">Hair care</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic7} alt="" />
            <p><a href="#" class="category-link">Hand bag</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic8} alt="" />
            <p><a href="#" class="category-link">Men footwear</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic9} alt="" />
            <p><a href="#" class="category-link">Toys</a></p>
          </div>            
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
          <div class="category-block text-center">
            <img src={pic10} alt="" />
            <p><a href="#" class="category-link">Watches</a></p>
          </div>            
        </div>
      </div>
    </div>
  </section>

  )
}


export function BannerPage(){
    const settingSlider = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
    
      }
    return (
        <Slider {...settingSlider}>    
{ banner.map((item,index) =>( 

<div id="main-carousel" key={index} className="carousel slide" data-ride="carousel" data-touch="true">
      <ol className="carousel-indicators">
        <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" loading='lazy' src={item.resource_path} alt="First slide"/>
        </div>
      </div>
    </div>
))} 
</Slider>      
    )
}

export function NewArrival(){
    const settingSlider = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        Speed: 10,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
    
      }
    return (
        <section className="collection-section">
     <div className="container-fluid">
            <div className="text-center my-5">
              <h3 className="heading-text">
                New Arrival
              </h3>
              <h4 className="sub-heading-text">
                "Fashion Fade. Style is eternal."
              </h4>
            </div>

            <div className="row align-items-lg-center">
              <div className="col-lg-9 col-md-9">
                <div className="row justify-content-lg-between justify-content-center" >
                  <div className="col-lg-12">
                    <Slider  {...settingSlider}>
                      {newArrival1.map((item, index) => {
                        return (
                          <ProductCard key={index} index={index} item={item}  />
                        )
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="long-img">
                  <a href="/products/New arrival" alt="img" >   <img src={banner1} alt='banner' loading='lazy' className="img-fluid" /></a>
                </div>
              </div>
            </div>
            <div className="row align-items-lg-center">
              <div className="col-lg-3 col-md-3">
                <div className="long-img">
                  <a href="products/WOMENS/CLOTHES/Winter Wear" alt="img"><img src={banner2}  alt="" className="img-fluid" /></a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="row justify-content-lg-between justify-content-center" >
                  <div className="col-lg-12" >
                    <Slider   {...settingSlider} >
                      {newArrival2.map((item, index) => {
                        return (
                          <ProductCard key={index} index={index} item={item}/>
                        )
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
}
