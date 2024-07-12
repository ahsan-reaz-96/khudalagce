import { useEffect, useState } from "react";
import Sectiontitles from "../../../Components/SectionTitles/Sectiontitles";
// import TestimonialCard from "./TestimonialCard/TestimonialCard";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Rating from "react-rating";




const Testimonials = () => {

    const [Testimonial, setTestimonial] = useState([])


    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <div>
            <Sectiontitles
                subHeading={"What our clients say"}
                heading={"Testimonials"}
            ></Sectiontitles>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide></SwiperSlide>

                    {
                        Testimonial.map(testimonialCard => <SwiperSlide
                            key={testimonialCard._id}>
                            <div className="m-14">
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">

                                        <div className="card-actions justify-center">
                                            <Rating
                                                initialRating={testimonialCard.rating}
                                                readonly
                                            />
                                        </div>
                                        <p>{testimonialCard.details}</p>
                                        <h2 className="card-title text-orange-500 justify-center">{testimonialCard.name}</h2>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>

            </div>


        </div>
    );
};

export default Testimonials;