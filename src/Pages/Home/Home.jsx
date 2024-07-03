import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Khudalagce | Home</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>
            
        </div>
    );
};

export default Home;