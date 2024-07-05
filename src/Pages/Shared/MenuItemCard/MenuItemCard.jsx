

const MenuItemCard = ({item}) => {

    const {name,recipe,image,price} = item;
    return (
        <div>
            <div  className="flex gap-3 space-y-3 bg-slate-300 shadow-2xl p-4 rounded-lg">
                <div>
                    <img className="h-24 w-48 rounded-b-lg rounded-tr-lg" src={image} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{recipe}</p>
                    <h1>Price-<span className="text-pink-600">${price}</span></h1>

                </div>

            </div>            
            
        </div>
    );
};

export default MenuItemCard;