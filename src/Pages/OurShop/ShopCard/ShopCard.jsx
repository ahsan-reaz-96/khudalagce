

const ShopCard = ({items}) => {

    const {name, image, price, recipe} = items;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <p className="absolute right-0 bg-slate-900 text-white px-4 mr-4 mt-4 rounded-xl">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShopCard;