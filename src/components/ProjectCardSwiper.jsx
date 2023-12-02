


export default function ProjectCardSwiper({ image, title, description }) {
    return (
        <div className='h-full relative w-full flex flex-col justify-center items-center p-10'>
            <div className="transition-all rounded-3xl duration-200 ease-in-out opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col gap-4 justify-center items-center ">
                <h1 className='text-4xl capitalize font-semibold text-white'>{title}</h1>
                <p className='text-lg max-w-md text-center text-white'>{description}</p>
                <button
                    type="submit"
                    aria-label="Submit"
                    className="flex py-3.5 group px-3   items-center justify-center rounded-xl font-display font-bold  mx-auto  text-white hover:text-blue-800 transition-all  "
                >
                    Visit
                    <svg className='ml-2 w-4 text-white group-hover:text-blue-800 transition-all' viewBox="0 0 16 6" aria-hidden="true" >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"  
                            d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        />
                    </svg>
                </button>

            </div>
            <img src={image} className=' object-cover w-full h-full   rounded-2xl' alt='hero__img' />
        </div>
    )
}