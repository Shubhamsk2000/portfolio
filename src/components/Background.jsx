import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
const Background = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-lvh bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] -z-10'>
            <img src="/planet.svg"
                className='absolute -z-10 w-[45rem] right-6' />
            <div className="social-icons absolute left-0 bottom-0 mx-[var(--window-padding)] flex items-center gap-4 flex-col mb-6">
                <a href="https://github.com/Shubhamsk2000" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="w-8" />
                </a>
                <a href="https://linkedin.com/in/Shubham-Kondhalkar" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8" />
                </a>
            </div>
        </div>
    )
}

export default Background
