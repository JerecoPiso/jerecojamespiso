import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade, Bounce } from "react-awesome-reveal";
import { Link } from 'react-scroll';
export default function Home() {
    return (
        <div id='home'>
            <div className="fixed flex items-center justify-between z-20 w-full xl:px-30 lg:px-30 md:px-20 px-5 mt-2">
                <div>
                    <Bounce id='logo'><FontAwesomeIcon icon={solidIcons.faLaptopCode} size="2x" color='#F1F6F9' /></Bounce>
                </div>
                <div>
                    <Bounce className="xl:flex lg:flex md:flex hidden">
                        <ul className="h-full ">
                            <li className="p-4"><Link to='home' spy={true} smooth={true} offset={-70} duration={500}  className="cursor-pointer text-white tracking-wide">HOME</Link></li>
                            <li className="p-4"><Link to='portfolio' spy={true} smooth={true} offset={-70} duration={500}  className="cursor-pointer text-white tracking-wide">PORTFOLIOS</Link></li>
                            <li className="p-4"><Link to='skills' spy={true} smooth={true} offset={-70} duration={500}  className="cursor-pointer text-white tracking-wide">SKILLS</Link></li>
                            <li className="p-4"><Link to='contact' spy={true} smooth={true} offset={-70} duration={500}  className="cursor-pointer text-white tracking-wide">CONTACT</Link></li>
                            <li className="p-4"><Link to='aboutme' spy={true} smooth={true} offset={-70} duration={500}  className="cursor-pointer text-white tracking-wide">ABOUT ME</Link></li>
                        </ul>
                    </Bounce>
                    <button type='button' className='xl:hidden lg:hidden md:hidden block'><Bounce id='logo' ><FontAwesomeIcon icon={solidIcons.faNavicon} size="2x" color='#F1F6F9' /></Bounce></button>
                </div>
            </div>
            <div className='home'>
                <div className='absolute z-10 left-0 top-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-gray-800 via-transparent to-gray-800 '>
                    <div>
                        <p className='text-gray-300 text-4xl font-semibold tracking-wide text-center animate__animated animate__backInDown '>HI, I AM JERECO JAMES PISO</p>
                        <p className='text-gray-400 text-xl mt-2 tracking-wide text-center animate__animated animate__backInUp'>FULLSTACK DEVELOPER</p>
                        <p className='text-gray-500 text-xl mt-2 tracking-wide text-center animate__animated animate__backInUp'>"Your vision, my code - let's make it happen"</p>
                        <button type='button' className='m-auto block text-gray-300 bg-gray-800 px-8 py-3 mt-2 tracking-wide rounded-full animate__animated animate__backInUp' >GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}