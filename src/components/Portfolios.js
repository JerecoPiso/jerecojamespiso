import { Fade } from "react-awesome-reveal";
export default function Portfolios() {
    return (
        <div className='bg-gray-800 p-10' id="portfolio">
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>PORTFOLIO</p>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 xl:px-10 lg:px-10 md:px-10 px-5 py-12'>
                <div className='col-span-1'>
                    <Fade delay={300} triggerOnce={true}>
                        <div className='relative h-[25rem]'>
                            <div className='absolute top-0 z-10 h-full w-full  bg-gradient-to-b from-transparent via-transparent to-gray-800 px-7 py-5'>
                            </div>
                            <img className='absolute w-full h-[20.5rem] rounded-tl-md rounded-tr-md' src={require("../assets/techworld.png")} alt='Codeunity' />
                            <div className='absolute z-20 bottom-0 w-full bg-gray-900 px-7 py-5 rounded-bl-md rounded-br-md'>
                                <p className='text-white text-2xl text-center font-semibold'>Techworld</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={500} triggerOnce={true}>
                        <div className='relative h-[25rem]'>
                            <div className='absolute top-0 z-10 h-full w-full  bg-gradient-to-b from-transparent via-transparent to-gray-800 px-7 py-5'>
                            </div>
                            <img className='absolute h-[20.5rem] w-full rounded-tl-md rounded-tr-md' src={require("../assets/realstate.png")} alt='Codeunity' />
                            <div className='absolute z-20 bottom-0 w-full bg-gray-900 px-7 py-5 rounded-bl-md rounded-br-md'>
                                <p className='text-white text-2xl text-center font-semibold'>Real State</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={700} triggerOnce={true}>
                        <div className='relative h-[25rem]'>
                            <div className='absolute top-0 z-10 h-full w-full  bg-gradient-to-b from-transparent via-transparent to-gray-800 px-7 py-5'>
                            </div>
                            <img className='absolute h-[20.5rem] rounded-tl-md rounded-tr-md' src={require("../assets/codeunity.png")} alt='Codeunity' />
                            <div className='absolute z-20 bottom-0 w-full bg-gray-900 px-7 py-5 rounded-bl-md rounded-br-md'>
                                <p className='text-white text-2xl text-center font-semibold'>Codeunity</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                
            </div>
        </div>
    )
}