
const Navbar = ({ goToSection, currentIndex }) => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-[var(--window-padding)] z-50">
            <div className="text-2xl cursor-pointer font-bold">Shubham</div>
            <div className="flex gap-6">

                {
                    ["Hero", "Skills", "Projects", "About", "Contact"].map((label, i) => (
                        <button
                            key={label}
                            onClick={()=>goToSection(i)}
                            className={`hover:text-amber-100 ${currentIndex === i ? "hover:text-amber-100 underline" : ""} cursor-pointer`}
                        >
                            {label}
                        </button>
                    ))
                }

            </div>
        </nav>
    );
}
export default Navbar;