function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent border-b border-white/20">
            <div className="container flex justify-between items-center py-5 text-white">

                <h1 className="text-3xl font-semibold tracking-wide">
                    Yuj Darshan
                </h1>

                <nav>
                    <ul className="flex gap-8 text-sm uppercase tracking-widest">

                        <li>
                            <a href="#about">Yoga</a>
                        </li>

                        <li>
                            <a href="#courses">Courses</a>
                        </li>

                        <li>
                            <a href="#teachers">Teachers</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;