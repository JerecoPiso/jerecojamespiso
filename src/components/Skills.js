import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zoom } from "react-awesome-reveal";
export default function Skills() {
    return (
        <div className='bg-gray-800 p-10' id='skills'>
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>SKILLS</p>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 xl:px-40 lg:px-35 md:px-25 px-5 py-12'>
                <div className='col-span-1'>
                    <Zoom delay={300} triggerOnce={true}>
                        <div className=' rounded-md p-5 bgDark'>
                            <p className='text-center'><FontAwesomeIcon icon={solidIcons.faLaptop} size='3x' color='rgb(255 255 255)'></FontAwesomeIcon></p>
                            <p className='text-center text-gray-300 mt-3'>WEB DEVELOPMENT</p>
                            <p></p>
                        </div>
                    </Zoom>
                </div>
                <div className='col-span-1'>
                    <Zoom delay={500} triggerOnce={true}>
                        <div className='bgDark rounded-md p-5'>
                            <p className='text-center'><FontAwesomeIcon icon={solidIcons.faMobileAndroid} size='3x' color='rgb(255 255 255)'></FontAwesomeIcon></p>
                            <p className='text-center text-gray-300 mt-3'>ANDROID DEVELOPMENT</p>
                        </div>
                    </Zoom>
                </div>
                <div className='col-span-1'>
                    <Zoom delay={700} triggerOnce={true}>
                        <div className='bgDark rounded-md p-5'>
                            <p className='text-center'><FontAwesomeIcon icon={solidIcons.faComputer} size='3x' color='rgb(255 255 255)'></FontAwesomeIcon></p>
                            <p className='text-center text-gray-300 mt-3'>DESKTOP APPLICATION</p>
                        </div>
                    </Zoom>
                </div>
            </div>
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>TECHNOLOGY STACK</p>
            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-wrap justify-center gap-4 mt-10 xl:w-4/6 lg:w-4/6 md:w-5/6 w-full'>
                    <div className='w-36 flex flex-col justify-center items-center py-2 hover:scale-125 duration-1000'>
                        <Zoom delay={100} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faVuejs} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>VueJs</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={200} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faReact} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>React</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={300} triggerOnce={true} >
                            <FontAwesomeIcon icon={brandIcons.faLaravel} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Laravel</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={400} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faNode} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>NodeJs</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={500} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faPython} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Python</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={600} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faJava} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Java</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={700} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faBootstrap} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Bootstrap</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={800} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faCss3Alt} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>CSS 3</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={900} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faHtml5} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>HTML 5</p>
                        </Zoom>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center hover:scale-125 duration-1000'>
                        <Zoom delay={1000} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faGithub} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Github</p>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}