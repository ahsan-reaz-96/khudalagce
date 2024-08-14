
import { Helmet } from "react-helmet-async";
import shopImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../Hook/UseMenu";

import ShopTab from "../ShopTab/ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {

    const categories = ['salad','dessert', 'pizza', 'drink', 'soup' ]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabindex, setTabindex] = useState(initialIndex);
    const [menu] = UseMenu();
    
    console.log(category);

    const salad = menu.filter(items => items.category === 'salad');
    const dessert = menu.filter(items => items.category === 'dessert');
    const pizza = menu.filter(items => items.category === 'pizza');
    const drink = menu.filter(items => items.category === 'drinks');
    const soup = menu.filter(items => items.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Khudalagce | Shop</title>
            </Helmet>
            <div>
                <Cover img={shopImg} title={"Our Shop"}
                    subtitle={"Choose Your Favorite Dish"}
                ></Cover>
            </div>
            <div className="justify-center items-center">
                <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>DRINKS</Tab>
                        <Tab>SOUPS</Tab>                        
                    </TabList>
                    <TabPanel>
                        <ShopTab items={salad}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={dessert}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={pizza}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={drink}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab items={soup}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Shop;