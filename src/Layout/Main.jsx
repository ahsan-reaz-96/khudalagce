import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";
import TopNab from "../Pages/Shared/TopNab/TopNab";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto font-Poppins">
            
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <TopNab></TopNab>

            
        </div>
    );
};

export default Main;