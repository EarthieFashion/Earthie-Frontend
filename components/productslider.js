import React, { useEffect, useState } from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Product from './product';


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



function ProductSlider({ category }) {
    const [slides, setSlides] = useState([]);
    let url = `${process.env.NEXT_PUBLIC_HOST}products/${category}/`
    useEffect(() => {
        fetch(url).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log('parsed Items', parsed);
                console.log(typeof(parsed));
                setSlides(parsed)
            })
    }, [])

    const responsive = {
        0: {
            items: 1.7,
        },

        500:{
            items: 2,
            center:true,
        },
        768: {
            items: 3.4,
        },
        1000: {
            items: 6,
        }
    }



    return (
        <div>
            <OwlCarousel
                loop={true}
                autoplay={false}
                responsive={responsive}
                
                nav={false}
                dots={false}
            >
                {slides.map((slide) => {
                    if (slide.is_published){
                    return(
                    <div className="item d-flex justify-content-center" key={slide.id}>
                       <Product productId={slide.id} productName={slide.prodcutName} productPrice={slide.productPrice} productImage={slide.productImage}/>
                    </div>
                    )
                    }
                })}

            </OwlCarousel>
        </div>
    )
}


ProductSlider.propTypes = {
    category:'tshirts',
}



export default ProductSlider