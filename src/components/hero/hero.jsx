import './hero.css';

import carousal1 from '../../images/carousel-1.jpg';
//import carousal2 from '../../images.hotels/carousel-2.jpg';

const Hero = () => {
    return (
        <div className="container-fluid p-0">
            <section className="site-hero overlay" style= {{backgroundImage : `url(${carousal1})`}} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row site-hero-inner justify-content-center align-items-center">
                        <div className="col-md-10 text-center" data-aos="fade-up">
                            <span className="custom-caption text-uppercase text-white d-block  mb-3">Welcome To bookMe.com</span>
                            <h1 className="heading">A Best Place To Stay</h1>
                        </div>
                    </div>
                </div>

                <a className="mouse smoothscroll" href="#next">
                    <div className="mouse-icon">
                        <span className="mouse-wheel"></span>
                    </div>
                </a>
            </section>
        </div>
    )
}
export default Hero;