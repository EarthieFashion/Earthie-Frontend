import React, { useEffect, useState } from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Image from 'next/Image';
import axios from 'axios'

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



function HomeSlider() {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/sliderOffers/`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setSlides(parsed);
            })
    }, [])
    
    const responsive = {
        0: {
            items: 1,
        },
        768: {
            items: 1
        }
    }



    return (
        <div>
            <OwlCarousel
                loop={true}
                autoplay={true}
                responsive={responsive}
                center={true}
                nav={false}
                dots={false}
            >
                {slides.map((slide) => {
                    if (slide.published) {
                        return (
                            <div className="item" key={slide.id}>
                                <Image src={process.env.NEXT_PUBLIC_MEDIA_URL + slide.offerImage} alt={slide.offerName} className="img-fluid" width={window.innerWidth} height={350} />
                            </div>
                        )
                    }
                })}

            </OwlCarousel>
        </div>
    )
}

export default HomeSlider