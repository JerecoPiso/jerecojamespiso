import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-gray-800 p-10 flex flex-col items-center justify-center">
            <div className='flex flex-row items-center justify-center'>
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faGithub} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faFacebook} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faTwitter} size="2x" color='#F1F6F9' />
                <FontAwesomeIcon style={{ marginRight: 25 }} icon={brandIcons.faYoutube} size="2x" color='#F1F6F9' />
            </div>
            <p className="text-white mt-5 tracking-wide text-sm">@ Copyright {currentYear}. Made by Jereco James Piso</p>
        </div>
    )
}