const Banner = () => {
    return (
        <div id="banner" 
            className="h-full w-full bg-banner-image-mobile bg-[-50px] filter brightness-90 lg:h-[600px]  lg:bg-banner-image bg-no-repeat lg:bg-center bg-cover flex justify-center items-center bg-purple-200">
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