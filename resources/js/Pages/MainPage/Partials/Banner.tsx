const Banner = () => {
    return (
        <div id="banner" 
            className="relative min-h-screen w-full bg-banner-image-mobile bg-center md:h-[600px]  md:bg-banner-image bg-no-repeat md:bg-center bg-cover flex justify-center items-center bg-purple-200">
            <div>
                <h1 className="text-zinc-100 font-extrabold">
                    <span className="text-4xl uppercase text-[#ebb10e]">Funny</span>
                    <br/>
                    <span className="text-4xl uppercase text-pink-300">Pinky</span> 
                    Coffee
                </h1>
            </div>
            {/* <div className="max-w-72 rounded-2xl overflow-hidden ">
            </div> */}
        </div>
    )
}

export default Banner;