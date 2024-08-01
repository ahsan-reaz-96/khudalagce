import ShopCard from "../ShopCard/ShopCard";


const ShopTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    items.map(items =>
                        <ShopCard
                            key={items._id}
                            items={items}></ShopCard>)
                }
            </div>

        </div>
    );
};

export default ShopTab;