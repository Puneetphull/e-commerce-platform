import React,{useState, useEffect} from "react";
import pic1 from "../../../assets/e-commerceImg/baby-clothes.png";
import pic2 from "../../../assets/e-commerceImg/dress.png";
import pic3 from "../../../assets/e-commerceImg/high-heels.png";
import pic4 from "../../../assets/e-commerceImg/jacket.png";
import pic5 from "../../../assets/e-commerceImg/necklace.png";
import pic6 from "../../../assets/e-commerceImg/hair-straightner.png";
import pic7 from "../../../assets/e-commerceImg/portfolio.png";
import pic8 from "../../../assets/e-commerceImg/sneakers.png";
import pic9 from "../../../assets/e-commerceImg/toys.png";
import pic10 from "../../../assets/e-commerceImg/watch.png";
import Slider from "react-slick";
import { newArrival1, newArrival2 } from "../../../data/homePageData";
import "../../../scss/slick-carousel/slick/slick.css";
import "../../../scss/slick-carousel/slick/slick-theme.css";
import ProductCard from "../../../custom-components/ProductCard";
import Logo from "../../../assets/Logo/Company_Logo.png";
import sideBanner from "../../../assets/Banner/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import sideBanner2 from "../../../assets/Banner/raghavendra-v-konkathi-S9qLhVCfqKc-unsplash.jpg";
import blog1 from "../../../assets/Banner/caroline-lm-QA9fRIi6sFw-unsplash.jpg";
import blog2 from "../../../assets/Banner/s-b-vonlanthen-FaiZNiofP-U-unsplash.jpg";
import blog3 from "../../../assets/Banner/olga-guryanova-s10jzFKGOLs-unsplash.jpg";
import Sale from "../../../assets/Banner/goby-zHMpGLOD8nI-unsplash.jpg";
import { productService } from "../../../api";

export function TrendingPage() {
  return (
    <section class="trending-categories">
      <div class="container-fluid">
        <div class="text-center py-5">
          <h3 class="heading-text">Our Trending Categories</h3>
          <h4 class="sub-heading-text">"The joy of dressing is an art."</h4>
        </div>
        <div class="row justify-content-between-lg justify-content-center">
          <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
            <div class="category-block text-center">
              <img src={pic1} alt="" />
              <p>
                <a href="#" class="category-link">
                  Kid Clothes
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
            <div class="category-block text-center">
              <img src={pic2} alt="" />
              <p>
                <a href="#" class="category-link">
                  Women Clothes
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
            <div class="category-block text-center">
              <img src={pic3} alt="" />
              <p>
                <a href="#" class="category-link">
                  High Heels
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
            <div class="category-block text-center">
              <img src={pic4} alt="" />
              <p>
                <a href="#" class="category-link">
                  Men Clothes
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-md-2 col-xs-6">
            <div class="category-block text-center">
              <img src={pic5} alt="" />
              <p>
                <a href="#" class="category-link">
                  Jewellery
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div class="row justify-content-between-lg justify-content-center mt-5">
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
      </div> */}
      </div>
    </section>
  );
}

export function BannerPage({banner= []}) {
 

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settingSlider}>
      {banner.map((item, index) => (
        <div
          id="main-carousel"
          key={index}
          className="carousel slide"
          data-ride="carousel"
          data-touch="true"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to="0"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                loading="lazy"
                src={item.resource_path}
                alt="First slide"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export function NewArrival() {
  console.log(newArrival1);
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="collection-section">
      <div className="container-fluid">
        <div className="text-center my-5">
          <h3 className="heading-text">New Arrival</h3>
          <h4 className="sub-heading-text">
            "Your best life begins with a smile"
          </h4>
        </div>

        <div className="row align-items-lg-center">
          <div className="col-lg-9 col-md-9">
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-lg-12">
                <Slider {...settingSlider}>
                  {newArrival1.map((item, index) => (
                    <ProductCard key={index} index={index} props={item} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="long-img">
              <a href="/products/New arrival" alt="img">
                {" "}
                <img
                  src={sideBanner}
                  alt="banner"
                  loading="lazy"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-lg-center">
          <div className="col-lg-3 col-md-3">
            <div className="long-img">
              <a href="products/WOMENS/CLOTHES/Winter Wear" alt="img">
                <img src={sideBanner2} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-lg-12">
                <Slider {...settingSlider}>
                  {newArrival2.map((item, index) => {
                    return (
                      <ProductCard key={index} index={index} props={item} />
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPage() {
  return (
    <section class="blogs-info">
      <div class="container">
        <h3 class="text-center my-4 heading-text">Blogs</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="blogs-card">
              <div class="blog-image">
                <img src={blog1} class="w-100" alt="" title="" />
              </div>
              <h2 class="blog-heading">A dream smile is a reality</h2>
              <p class="blog-descripton">Some Description text</p>
              <ul class="blog-date-time my-3">
                <li>
                  <i class="fa fa-solid fa-calendar"></i> December 6, 2023
                </li>
                <li>
                  <i class="fa fa-solid fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i class="fa fa-solid fa-eye"></i>3
                </li>
              </ul>
              {/* <p class="blog-read-more"><a href="#" title="Read More">Read more</a></p> */}
            </div>
          </div>
          <div class="col-md-4">
            <div class="blogs-card">
              <div class="blog-image">
                <img src={blog2} class="w-100" alt="" title="" />
              </div>
              <h2 class="blog-heading">
                Beautiful smiles that last a lifetime
              </h2>
              <p class="blog-descripton">Some Description text</p>
              <ul class="blog-date-time my-3">
                <li>
                  <i class="fa fa-solid fa-calendar"></i> December 6, 2021
                </li>
                <li>
                  <i class="fa fa-solid fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i class="fa fa-solid fa-eye"></i>3
                </li>
              </ul>
              {/* <p class="blog-read-more"><a href="#" title="Read More">Read more</a></p> */}
            </div>
          </div>
          <div class="col-md-4">
            <div class="blogs-card">
              <div class="blog-image">
                <img src={blog3} class="w-100" alt="" title="" />
              </div>
              <h2 class="blog-heading">
                Because dental expertise makes a difference
              </h2>
              <p class="blog-descripton">Some Description text</p>
              <ul class="blog-date-time my-3">
                <li>
                  <i class="fa fa-solid fa-calendar"></i> December 6, 2021
                </li>
                <li>
                  <i class="fa fa-solid fa-user"></i> <a href="#">Admin</a>
                </li>
                <li>
                  <i class="fa fa-solid fa-eye"></i>3
                </li>
              </ul>
              {/* <p class="blog-read-more"><a href="#" title="Read More">Read more</a></p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SaleSection() {
 
  const [value,setvalue] = useState();
  useEffect(()=>{
   BigSale();
  },[])
  async function BigSale(){
    const result = await productService.CMSPageContent(1,"sale_page");
   setvalue(result.data.items[0].content);
  }
  return (
    <div dangerouslySetInnerHTML={{ __html:value ? value : "" }} />
  );
}

export function FooterPage() {
  return (
    <footer>
      <section class="footer-upper">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="footer-logo">
                <img src={Logo} alt="logo" />
              </div>
              <ul class="footer-connect my-4">
                <li>
                  <div class="footer-contact">CALL US NOW:</div>
                  <div class="footer-contact-bold">+123 5678 890</div>
                </li>
                <li>
                  <div class="footer-contact">E-MAIL ADDRESS:</div>
                  <div class="footer-contact-bold">sales@RcubeCommerce.com</div>
                </li>
                <li>
                  <div class="footer-contact">follow us:</div>
                  <div class="social-network">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div class="col-md-3 col-sm-6">
              <div class="foooter-links">
                <h3>Collections</h3>
                <ul>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">New arrival</a></li>
                  <li><a href="#">Best collection</a></li>
                </ul>
              </div>
            </div> */}
            <div class="col-md-3 col-sm-6">
              <div class="foooter-links">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">All Collections</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="foooter-below">
        <div class="container">
          <div class="footer-block">
            <div class="payments-options">
              <span>
                <img src="images/payment-icon_1.png" />
              </span>
              <span>
                <img src="images/payment-icon_2.png" />
              </span>
              <span>
                <img src="images/payment-icon_3.png" />
              </span>
              <span>
                <img src="images/payment-icon_4.png" />
              </span>
            </div>
            <div>
              <p>© Rcube eCommerce. 2021. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
