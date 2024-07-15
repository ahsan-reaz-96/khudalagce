import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";


const MenuCategory = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    items.map(item =><MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }

            </div>
        </div>
    );
};

export default MenuCategory;