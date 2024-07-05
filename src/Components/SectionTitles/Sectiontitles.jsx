

const Sectiontitles = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto  md:w-4/12 my-7">
            <p className="text-yellow-500  border-b-4 border-black">---{subHeading}---</p>
            <h2 className="uppercase text-2xl  border-b-4 border-black">{heading}</h2>
            
        </div>
    );
};

export default Sectiontitles;