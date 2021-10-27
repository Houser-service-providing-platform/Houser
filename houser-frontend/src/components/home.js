import React from 'react';
import portfolio_img from '../img/home-portfolio/img_1.jpg';
import about_img from '../img/about_img.jpg';
import slider_img from '../img/slider/image_2.jpg';

function home() {
    return (
        <div>
            <div class="cover"></div>

            <div class="header">
                <div class="container">
                    <div class="logo">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt="Logo" />
                        </a>
                    </div>
                    
                    {/* <!-- Menu Hamburger (Default) --> */}
                    <button class="main-menu-indicator" id="open-button">
                        <span class="line"></span>
                    </button>
                    {/* style={ background = url(img/nav_bg.jpg) } */}
                    <div class="menu-wrap" >
                        <div class="menu-content">
                            <div class="navigation">
                                <span class="pe-7s-close close-menu" id="close-button"></span>
                                <div class="search-wrap js-ui-search">
                                    <input class="js-ui-text" type="text" placeholder="Search Here..." />
                                    <span class="eks js-ui-close"></span>
                                </div>
                            </div>
                            <nav class="menu">
                                <div class="menu-list">
                                    <ul>
                                        <li class="menu-item-has-children"><a href="#">Home</a>
                                            <ul class="sub-menu">
                                                <li><a href="index.html">- Default</a></li>
                                                <li><a href="index-architecture.html">- Architecture</a></li>
                                                <li><a href="index-full-slider.html">- Slider Full Width</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li class="menu-item-has-children"><a href="#">Portfolio</a>
                                            <ul class="sub-menu">
                                                <li><a href="portfolio-2column.html">-Portfolio 2 Column</a></li>
                                                <li><a href="portfolio-3column.html">-Portfolio 3 Column</a></li>
                                                <li><a href="portfolio-masonry.html">-Portfolio Masonry</a></li>
                                                <li><a href="portfolio-dribbble.html">-Portfolio Dribbble</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog Default</a></li>
                                                <li><a href="blog-timeline.html">Blog Timeline</a></li>
                                                <li><a href="single-blog.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>

                            <div class="hidden-xs">
                                <div class="menu-social-media">
                                    <ul>
                                    <li><a href="#"><i class="iconmoon-facebook"></i></a></li>
                                    <li><a href="#"><i class="iconmoon-twitter"></i></a></li>
                                    <li><a href="#"><i class="iconmoon-dribbble3"></i></a></li>
                                    <li><a href="#"><i class="iconmoon-pinterest"></i></a></li>
                                    <li><a href="#"><i class="iconmoon-linkedin2"></i></a></li>
                                    </ul>
                                </div>

                                <div class="menu-information">
                                    <ul>
                                        <li><span>T:</span> 003 124 115</li>
                                        <li><span>E:</span> info@mail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of Menu Hamburger (Default) --> */}

                </div>
            </div>

            <div class="container">
                <div class="slider-wrapper">
                    <div class="slider-description">
                        <div class="slider-description-inner">
                            <h1>Pure<span>Elegance</span></h1>
                        </div>
                        <div class="cd-intro">
                            <div class="cd-headline clip">
                                <span class="cd-words-wrapper">
                                    <b class="is-visible">AWESOME THEME</b>
                                    <b>MODERN COMBINATION</b>
                                    <b>CREATIVE SOLUTIONS</b>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="slider-ef" class="slider-images-wrapper">
                        <img class="assets/img-responsive" src={slider_img} alt="" />
                        <img class="assets/img-responsive" src={slider_img} alt="" />
                        <img class="assets/img-responsive" src={slider_img} alt="" />
                    </div>
                </div>
            </div>
            <div class="container margin-top">
                <div class="history-wrapper">
                    <div class="col-md-6 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.5s">
                        <div class="row">
                            <article>
                                <h1>HISTORY OF AGENCY</h1>
                                <hr />
                                <h4>WHO LOVES OR PURSUES OR DESIRES TO OBTAIN PAIN OF ITSELF, BUT BECAUSE OCCASIONALLY CIRCUMSTANCES OCCUR AND PAIN CAN PROCURE HIM SOME GREAT PLEASURE</h4>
                                <p>
                                <br/>Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.</p>
                            </article>
                        </div>
                    </div>
                    <div class="col-md-5 col-md-offset-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                        <div class="row">
                            <div id="history-images" class="owl-carousel">
                                <div><img class="assets/img-responsive center-block" src={about_img} alt="About" /></div>
                                <div><img class="assets/img-responsive center-block" src={about_img} alt="About" /></div>
                                <div><img class="assets/img-responsive center-block" src={about_img} alt="About" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container margin-top">
                <div class="main-title">
                    <h1>WHY CHOOSE US?</h1>
                    <hr />
                    <h6>Except to obtain some advantage from it</h6>
                </div>
                <div class="services-home-page">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="services-icon">
                                <span class="icon-tools"></span>
                                <hr />
                            </div>
                            <h4>BRANDING</h4>
                            <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                        </div>
                        <div class="col-md-4">
                            <div class="services-icon">
                                <span class="icon-globe"></span>
                                <hr />
                            </div>
                            <h4>PLAN OF WORK</h4>
                            <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                        </div>
                        <div class="col-md-4">
                            <div class="services-icon">
                                <span class="icon-paintbrush"></span>
                                <hr />
                            </div>
                            <h4>ILUSTRATION</h4>
                            <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container margin-top">
                <div class="main-title">
                    <h1>OUR WORK</h1>
                    <hr />
                    <h6>Laborious to obtain some advantage from it</h6>
                </div>
                <div class="portfolio-wrapper">
                    <button class="nav">
                        <span class="icon-container">
                            <span class="line line01"></span>
                            <span class="line line02"></span>
                            <span class="line line03"></span>
                            <span class="line line04"></span>
                        </span>
                    </button>
                    <div class="works-filter">
                        <a href="javascript:void(0)" class="filter active" data-filter="mix">All</a>
                        <a href="javascript:void(0)" class="filter" data-filter="branding">Branding</a>
                        <a href="javascript:void(0)" class="filter" data-filter="web">Web Design</a>
                        <a href="javascript:void(0)" class="filter" data-filter="graphic">Graphic Design</a>
                    </div>
                    <div class="js-masonry">
                        <div class="row" id="work-grid">
                            {/* <!-- Begin of Thumbs Portfolio --> */}
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">250</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix web">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">60</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">WATCH-J</span>
                                            <span class="info">NEW TREND FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix graphic">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">1060</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">900</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">979</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">1024</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">2048</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">256</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 mix branding">
                                <div class="assets/img home-portfolio-image">
                                    <img src={portfolio_img} alt="Portfolio Item" />
                                    <div class="overlay-thumb">
                                        <a href="javascript:void(0)" class="like-product">
                                            <i class="ion-ios-heart-outline"></i>
                                            <span class="like-product">Liked</span>
                                            <span class="output">256</span>
                                        </a>
                                        <div class="details">
                                            <span class="title">STYLE FASHION</span>
                                            <span class="info">NEW BAG & STYLE FASHION</span>
                                        </div>
                                        <span class="btnBefore"></span>
                                        <span class="btnAfter"></span>
                                        <a class="main-portfolio-link" href="single-project.html"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="load-more">
                        <a href="javascript:void(0)" id="load-more"><i class="icon-refresh"></i></a>
                    </div>
                </div>
            </div>
            <div class="container margin-top">
                <div class="newsletter">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="newsletter-left">
                                <div class="newsletter-left-inner">
                                    <h1>STAY INFORMED <br /> WITH OUR <b>NEWSLETTER</b></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                        {/* style={background= url(img/newsletter-bg.jpg)} */}
                            <div class="newsletter-right">
                                <div class="newsletter-right-inner">
                                    <form>
                                        <input type="text" name="newsletter" placeholder="ENTER YOUR EMAIL" />
                                        <input type="submit" value="SUBSCRIBE" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer margin-top">
                <div class="container">
                    <div class="row">
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="footer-inner">
                                    <div class="footer-content">
                                        <h4>O.A.K THEME</h4>
                                            <address>City 35 AM <br />Street 1395 p.n <br />your Country</address>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 col-md-push-8 col-sm-4 col-xs-12">
                                <div class="footer-inner">
                                    <div class="footer-content">
                                    <h4>CONTACT INFO</h4>
                                        <p>
                                            T:003 124 115 <br />
                                            E:info@mail.com <br />
                                            W:www.website.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="footer-inner">
                                    <div class="footer-content">
                                    <ul class="social-media">
                                        <li><a href="#"><i class="iconmoon-facebook"></i></a></li>
                                        <li><a href="#"><i class="iconmoon-twitter"></i></a></li>
                                        <li><a href="#"><i class="iconmoon-flickr2"></i></a></li>
                                        <li><a href="#"><i class="iconmoon-dribbble3"></i></a></li>
                                        <li><a href="#"><i class="iconmoon-pinterest"></i></a></li>
                                        <li><a href="#"><i class="iconmoon-linkedin2"></i></a></li>
                                    </ul>
                                    <span class="copyright-mark">&copy; 2015 OAK, ALL RIGHTS RESERVED</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
