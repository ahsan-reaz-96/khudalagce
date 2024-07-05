import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import KhudalagceIntro from "../../Components/khudalagceIntro/KhudalagceIntro";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Khudalagce | Home</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>
            <div>
                <Category></Category>
            </div>
            <div>
                <KhudalagceIntro></KhudalagceIntro>
            </div>
            <div>
                <PopularMenu></PopularMenu>
            </div>
            
        </div>
    );
};

export default Home;