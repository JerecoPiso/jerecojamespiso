import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-awesome-reveal";
export default function Skills() {
    return (
        <div className='bg-gray-800 p-10' id='skills'>
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>SKILLS</p>
            {/* <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 xl:px-10 lg:px-10 md:px-10 px-5 py-12'>
          <div className='col-span-1'>
            <div className='shadow p-3'>
              1asd
            </div>
          </div>
          <div className='col-span-1'>
            2
          </div>
          <div className='col-span-1'>
            3
          </div>
        </div> */}
            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-wrap justify-center gap-4 mt-10 xl:w-4/6 lg:w-4/6 md:w-5/6 w-full'>
                    <div className='w-36 flex flex-col justify-center items-center py-2'>
                        <Fade delay={100} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faVuejs} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>VueJs</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={200} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faReact} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>React</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={300} triggerOnce={true} >
                            <FontAwesomeIcon icon={brandIcons.faLaravel} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Laravel</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={400} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faNode} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>NodeJs</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={500} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faPython} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Python</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={600} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faJava} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Java</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={700} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faBootstrap} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Bootstrap</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={800} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faCss3Alt} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>CSS 3</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={900} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faHtml5} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>HTML 5</p>
                        </Fade>
                    </div>
                    <div className='w-36 flex flex-col justify-center items-center'>
                        <Fade delay={1000} triggerOnce={true}>
                            <FontAwesomeIcon icon={brandIcons.faGithub} size="4x" color='#F1F6F9' />
                            <p className='mt-1 text-gray-200'>Github</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}