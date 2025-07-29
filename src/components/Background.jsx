import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
const Background = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-lvh bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] -z-10 '>
                <img src="/planet.svg"
                    className='absolute top-1/2 right-20 -translate-y-1/2 -z-10 w-[38rem] drop-shadow-2xl' />
            </div>
            <div className="social-icons fixed left-0 bottom-0 mx-[var(--window-padding)] flex items-center gap-4 flex-col mb-6 z-50">
                <a href="https://github.com/Shubhamsk2000" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <img src={githubIcon} alt="GitHub" className="w-8 cursor-pointer" />
                </a>
                <a href="https://linkedin.com/in/Shubham-Kondhalkar" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 cursor-pointer" />
                </a>
            </div>
        </>
    )
}

export default Background
