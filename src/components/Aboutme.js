import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slide, Bounce } from "react-awesome-reveal";
import pdf from '../../src/assets/jerecojamespiso.pdf'
export default function Aboutme() {
    return (
        <div className='bg-gray-700 xl:p-16 lg:p-16 md:p-14 p-10' id='aboutme'>
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4 xl:-mt-7 lg:-mt-7 md:-mt-5 -mt-1'>ABOUT ME</p>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10'>
                <div className='col-span-1 xl:text-left lg:text-left md:text-left'>
                    <Slide triggerOnce={true} direction={'left'}>
                        <p className='text-2xl font-semibold text-gray-300 tracking-wide'>GET TO KNOW ME</p>
                        <p className='text-md mt-2 text-gray-300 tracking-wide'>Hey, I'm Jereco James Piso an junior programmer with a passion for creating functional and visually appealing applications. I have a few years of experience in programming, which has allowed me to hone my skills and tackle more complex projects.</p>
                        <p><FontAwesomeIcon className='mt-3 ' icon={solidIcons.faLocationDot} size="lg" color='#F1F6F9' /><span className='ml-3 text-gray-300 tracking-wide'> Quezon City, Philippines</span> </p>
                        <p><FontAwesomeIcon className='mt-3' icon={solidIcons.faEnvelope} size="lg" color='#F1F6F9' /><span className='ml-3 text-gray-300 tracking-wide'>jamesjerecopiso@gmail.com</span></p>
                        <p><FontAwesomeIcon className='mt-3 ' icon={solidIcons.faPhone} size="lg" color='#F1F6F9' /><span className='ml-3 text-gray-300 tracking-wide'>09518227186</span> </p>
                    </Slide>
                </div>
                <div className='col-span-1 xl:order-none lg:order-none md:order-none -order-1 flex items-center justify-center'>
                    <Bounce triggerOnce={true} duration={1000}>
                        <img src={require("../assets/profile.png")} className='rounded-full h-56 w-56' alt='Avatar'></img>
                    </Bounce>
                </div>
                <div className='col-span-1 xl:text-left lg:text-left md:text-left'>
                    <Slide triggerOnce={true} direction={'right'}>
                        <p className='text-2xl font-semibold text-gray-300 tracking-wide'>SERVICES OFFERED</p>
                        {/* <p className='text-md text-gray-300 tracking-wide mt-2'>My primary area of expertise revolves around Web development, but I also extend my services to include Android and Desktop application development.</p> */}
                        <p className='text-md text-gray-300 tracking-wide mt-2'>My primary area of expertise revolves around Web development, where I specialize in creating dynamic and responsive websites that meets your unique business needs. Additionally, I extend my services in Android and Desktop application development to have to a wider range of clients in search of innovative digital solutions.</p>
                        <a href={pdf} type='button' className='bg-gray-800 px-5 py-2 text-gray-300 rounded-md mt-3'>DOWNLOAD CV</a>       
                    </Slide>
                </div>
            </div>
        </div>
    )
}