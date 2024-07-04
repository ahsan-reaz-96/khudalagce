
import intro from "../../assets/home/chef-service.jpg";

const KhudalagceIntro = () => {
    return (
        <div className="m-4 relative">
            <img src={intro} alt="" />
            <div className="text-center max-w-6xl mx-auto top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-90 p-6 rounded-2xl">
                <h1 className="font-extrabold text-6xl font-cursive">Khudalagce</h1>
                <p className="mt-3">Welcome to Khudalagce!Step into a world where culinary artistry meets exceptional hospitality. At Khudalagce, we believe that dining is not just about food; its about creating unforgettable memories. Nestled in the heart of City, our restaurant offers a warm and inviting atmosphere, perfect for any occasio</p>
            </div>
            
        </div>
    );
};

export default KhudalagceIntro;