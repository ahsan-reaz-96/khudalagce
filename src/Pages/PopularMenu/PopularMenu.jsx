
import Sectiontitles from "../../Components/SectionTitles/Sectiontitles";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import UseMenu from "../../Hook/UseMenu";


const PopularMenu = () => {


    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category ==='popular');


    // const [menu, setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category ==='popular');
    //             setMenu(popularItems);
    //         })
    // },[])


    return (
        <div>
            <Sectiontitles
                subHeading={'check in out'}
                heading={'From our menu'}
            ></Sectiontitles>

            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto gap-4">
                {
                    popular.map(item =><MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <h1 className=" text-center underline font-cursive font-extrabold mt-7">View All Menu</h1>
            
        </div>
    );
};

export default PopularMenu;