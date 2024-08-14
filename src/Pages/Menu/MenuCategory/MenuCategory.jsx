import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }

            </div>

            <Link to={`/shop/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 mb-4">Order Your Favourite food</button>

            </Link>

        </div>
    );
};

export default MenuCategory;