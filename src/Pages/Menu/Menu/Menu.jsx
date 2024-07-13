import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Khudalagce | Menu</title>
            </Helmet>
            <div>
                <Cover img={menuImg} title={"Our Menu"} 
                subtitle={"Would you like to try our dish"}
                ></Cover>
            </div>
            <h1>this is menu</h1>
            
        </div>
    );
};

export default Menu;