

import feature from "../../assets/home/featured.jpg"
import Sectiontitles from "../../Components/SectionTitles/Sectiontitles";
import "./HomeFeature.css";

const HomeFeature = () => {
    return (
        <div className="m-8 pt-16 bg-fixed feature">
            <div className="min-h-screen my-auto">
                {/* start */}

                <div className="">
                    <Sectiontitles
                        subHeading={'check it out'}
                        heading={"From Our Menu"}
                    ></Sectiontitles>
                </div>

                <div className="hero-content mx-auto py-10">
                    <div className="flex flex-col lg:flex-row p-10 mx-auto">
                        <img
                            src={feature}
                            className="max-w-sm rounded-lg shadow-2xl mr-4" />
                        <div className="text-black">
                            <h1 className="">On March 2024 available this <br />Indulge in a culinary masterpiece with our Gourmet Delight <br /> a dish that promises to tantalize your taste buds and leave you craving more.</h1>
                            <p className="">
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>


                {/* end */}
            </div>


        </div>
    );
};

export default HomeFeature;
