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
import imgDrink from "../../../assets/menu/drink.jpg";



const Menu = () => {

    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza =  menu.filter(item=> item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const drink = menu.filter(item => item.category === 'drinks');
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
                {/* <Cover img={dessertImg} title={"desserts"} subtitle={"Would you like to try our dish"}></Cover> */}
                <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={salad} title={"salad"} coverImg={imgsalad}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={pizza} title={"pizza"} coverImg={imgpizza}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={drink} title={"drink"} coverImg={imgDrink}></MenuCategory>
            </div>
            <div>
                <MenuCategory items={soup} title={"soup"} coverImg={imgsoup}></MenuCategory>
            </div>
            
            
            
        </div>
    );
};

export default Menu;