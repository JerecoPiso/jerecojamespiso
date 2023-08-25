import { Slide } from "react-awesome-reveal"
export default function Contact() {
    return (
        <div className='bg-gray-700 p-10 flex flex-col items-center justify-center' id="contact">
            <p className='text-white text-center text-3xl font-semibold relative content-title pb-4'>CONTACT</p>
            <Slide className='mt-10 w-full xl:w-6/12 lg:w-6/12 md:w-10/12' duration={1000} direction={'up'} triggerOnce={true}>
                <form >
                    <label className='text-white'>Name</label>
                    <input type='text' placeholder='Enter your name . . .' className='mb-4 mt-2 block w-full text-white bg-transparent border border-gray-500 rounded-md focus:ring-gray-600 focus:border-gray-500' />
                    <label className='text-white'>Email</label>
                    <input type='text' placeholder='Enter you email . . .' className='mb-4 mt-2 block w-full text-white bg-transparent border border-gray-500 rounded-md focus:ring-gray-600 focus:border-gray-500' />
                    <label className='text-white'>Message</label>
                    <textarea placeholder='Enter you message . . .' className='block w-full mt-2 text-white bg-transparent border border-gray-500 rounded-md focus:ring-gray-600 focus:border-gray-500' rows={5}></textarea>
                    <button type='submit' className='py-3 px-10 mt-3 rounded-sm float-right text-white border border-gray-500'>SUBMIT</button>
                </form>
            </Slide>
        </div>
    )
}