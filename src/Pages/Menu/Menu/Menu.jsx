import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../PopularMenu/PopularMenu";
import UseMenu from "../../../Hook/UseMenu";
import Sectiontitles from "../../../Components/SectionTitles/Sectiontitles";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category = 'dessert');
    const offered = menu.filter(item => item.category = 'offered');
    const salad = menu.filter(item => item.category = 'salad');
    const pizza =  menu.filter(item=> item.category = 'pizza');
    const soup = menu.filter(item => item.category = 'soup');
    return (
        <div>
            <Helmet>
                <title>Khudalagce | Menu</title>
            </Helmet>
            <div>
                <Cover img={menuImg} title={"Our Menu"} 
                subtitle={"Would you like to try our dish"}
                ></Cover>

                <Sectiontitles subHeading={"Don't Miss"} heading={"Todays Offer"}
                ></Sectiontitles>

                <MenuCategory items={offered}></MenuCategory>
            </div>
            
            
            
        </div>
    );
};

export default Menu;