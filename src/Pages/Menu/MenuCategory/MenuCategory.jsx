import Cover from "../../Shared/Cover/Cover";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item =><MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }

            </div>
        </div>
    );
};

export default MenuCategory;