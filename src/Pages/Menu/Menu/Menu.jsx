import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"

import UseMenu from "../../../Hook/UseMenu";
import Sectiontitles from "../../../Components/SectionTitles/Sectiontitles";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import imgsalad from "../../../assets/menu/salad-bg.jpg";
import imgpizza from "../../../assets/menu/pizza-bg.jpg";
import imgsoup from "../../../assets/menu/soup-bg.jpg";



const Menu = () => {

    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza =  menu.filter(item=> item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
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
            <div className="mt-4">
                <Cover img={dessertImg} title={"Desserts"} subtitle={"Would you like to try our dish"}></Cover>
                <MenuCategory items={dessert}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={salad} title={"SALAD"} coverImg={imgsalad}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={pizza} title={"Pizza"} coverImg={imgpizza}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={soup} title={"Soup"} coverImg={imgsoup}></MenuCategory>
            </div>
            
            
            
        </div>
    );
};

export default Menu;