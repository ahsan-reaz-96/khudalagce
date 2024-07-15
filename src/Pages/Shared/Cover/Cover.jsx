
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[500px]"
                // style={{
                //     backgroundImage: `url(${img})`,
                // }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content  text-center">
                        <div className="max-w-md p-10 shadow-2xl ">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">
                                {subtitle}
                            </p>

                        </div>
                    </div>
                </div>
            </Parallax>
           

        </div>
    );
};

export default Cover;