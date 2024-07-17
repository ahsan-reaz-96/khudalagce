
import { Helmet } from "react-helmet-async";
import shopImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const Shop = () => {

    const [tabindex, setTabindex] = useState(0);
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
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Shop;