import { Fade, Roll } from "react-awesome-reveal";
export default function Portfolios() {
    const websitePreview = (app) => {
        if(app === "realstate"){
            window.location.href = "https://realstator.vercel.app/";
        }else if(app === "chatterbox"){
            window.location.href = "https://chatterbox-bice.vercel.app/";
        }else{
            window.location.href = "https://visit-leyte.vercel.app/";
        }
    }
    const githubPreview = (reponame) => {
        window.location.href = `https://github.com/JerecoPiso/${reponame}`;
    }
    return (
        <div className='bg-gray-800 xl:p-16 lg:p-16 md:p-14 p-10' id="portfolio">
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>PORTFOLIO</p>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 py-10'>
                <div className='col-span-1'>
                    <Fade delay={300} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            {/* bg-gradient-to-b from-transparent via-transparent to-gray-800 */}
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">VueJs</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">Laravel</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm">MySQL</span>
                                    </p>
                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/emr.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3 '>
                                <p className='text-gray-300 text-2xl tracking-wider'>Electronic Medical Record</p>
                                <p className="text-gray-400 text-sm tracking-wider">EMRs store comprehensive patient information, including demographics, medical history, medications, allergies and vital signs.</p>
                                <button type="button" disabled className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">PRIVATE</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={300} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            {/* bg-gradient-to-b from-transparent via-transparent to-gray-800 */}
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">VueJs</span>
                                    </p>
                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/elearning.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3 '>
                                <p className='text-gray-300 text-2xl tracking-wider'>E-learning</p>
                                <p className="text-gray-400 text-sm tracking-wider">Uploading videos and adding questions to it in a particular time of the video.</p>
                                <button type="button" disabled className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">PRIVATE</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={300} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            {/* bg-gradient-to-b from-transparent via-transparent to-gray-800 */}
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">React</span>
                                    </p>
                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/visitleyte.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3 '>
                                <p className='text-gray-300 text-2xl tracking-wider'>Visit leyte</p>
                                <p className="text-gray-400 text-sm tracking-wider">Leyte province tourism.</p>
                                <button type="button" onClick={() => websitePreview('visitleyte')} className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">WEBSITE PREVIEW</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={300} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            {/* bg-gradient-to-b from-transparent via-transparent to-gray-800 */}
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">VueJs</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">NodeJs</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm">MySQL</span>
                                    </p>
                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/techworld.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3 '>
                                <p className='text-gray-300 text-2xl tracking-wider'>Techworld</p>
                                <p className="text-gray-400 text-sm tracking-wider">An e-commerce platform exclusively catering to technology and gadget products.</p>
                                <button type="button" onClick={() => githubPreview('ecommerce')} className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">VIEW ON GITHUB</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={500} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-[100.1%] bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">NextJs</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">Tailwind</span>
                                    </p>
                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/realstate.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3 '>
                                <p className='text-gray-300 text-2xl tracking-wider '>Real State</p>
                                <p className="text-gray-400 text-sm tracking-wider">A real estate platform exclusively featuring properties related to smart homes and modern living spaces.</p>
                                <button type="button" onClick={() => websitePreview('realstate')} className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">WEBSITE PREVIEW</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className='col-span-1'>
                    <Fade delay={700} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">Django</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">VueJs</span>

                                    </p>

                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/codeunity.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3'>
                                <p className='text-gray-300 text-2xl tracking-wider'>Codeunity</p>
                                <p className="text-gray-400 text-sm tracking-wider">A platform designed for uploading programming projects and inquiring about them through questions.</p>
                                <button type="button" onClick={() => githubPreview('codeUnity/tree/codeunity')} className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">VIEW ON GITHUB</button>
                            </div>
                        </div>
                    </Fade>
                </div>
                  <div className='col-span-1'>
                    <Fade delay={700} triggerOnce={true}>
                        <div className='relative group flex flex-col min:h-[30rem] h-auto overflow-hidden rounded-md'>
                            <Roll className='absolute hidden group-hover:block top-0 z-10 h-full w-full bg-card' duration={500}>
                                <div className="flex flex-col items-center justify-center  h-full">
                                    <p className="text-white tracking-wider p-3">
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">VueJs</span>
                                        <span className="px-4 py-2 rounded-full border text-gray-200 border-gray-300 text-sm mr-2">Gemini AI</span>

                                    </p>

                                </div>
                            </Roll>
                            <img className='group-hover:transform group-hover:scale-125 duration-1000 h-[20rem] w-full' src={require("../assets/chatterbox.png")} alt='Codeunity' />
                            <div className='min-h-[10rem] z-20 bottom-0 w-full bg-gray-900 px-5 py-3'>
                                <p className='text-gray-300 text-2xl tracking-wider'>Chatterbox Bice</p>
                                <p className="text-gray-400 text-sm tracking-wider">Chatterbox Bice AI is your intelligent, always-on conversation partner — blending the power of advanced AI with natural, human-like dialogue. Whether you're looking for instant answers, creative brainstorming, or just someone to talk to, Bice is here to chat, assist, and inspire.</p>
                                <button type="button" onClick={() => websitePreview('chatterbox')} className="btnShadow poppins mb-3 text-gray-400 text-sm border border-gray-800 px-3 py-2 rounded-md mt-2 tracking-wider">WEBSITE PREVIEW</button>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    )
}