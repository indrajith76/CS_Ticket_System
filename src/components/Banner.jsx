

const Banner = ({taskStatus, resolved}) => {
    return (
        <div className='flex  items-center gap-6 my-10 lg:my-20 container mx-auto px-4 lg:px-0'> 
            <div className='bg1 h-62.5 w-full rounded-lg flex flex-col items-center justify-center'> 
                <p className='text-white text-2xl'>In-Progress</p>
                <p className='text-white text-[60px] font-semibold'>{taskStatus.length}</p>
            </div> 
            <div className='bg2 h-62.5 w-full rounded-lg flex flex-col items-center justify-center'> 
                <p className='text-white text-2xl'>Resolved</p>
                <p className='text-white text-[60px] font-semibold'>{resolved.length}</p>
            </div> 
        </div>
    );
};

export default Banner;