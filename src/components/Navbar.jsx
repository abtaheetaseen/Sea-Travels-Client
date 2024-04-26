import { NavLink } from 'react-router-dom'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Navbar = () => {

    const [text] = useTypewriter({
        words: ["Travels", "Voyage", "Luxury"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })

    return (
        <div className="navbar bg-base-100 mt-[10px] w-full lg:w-10/12 lg:mx-auto lg:mt-[10px] lg:mb-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allTouristSpot">All-Tourist-Spot</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addTouristSpot">Add-Tourist-Spot</NavLink>
                        </li>
                        <li>
                            <NavLink to="/myList">My-List</NavLink>
                        </li>

                    </ul>
                </div>
                <NavLink to='/' className="font-bold text-2xl">SEA <span className='text-red-500'>
                        {text}
                    </span>
                    <span className='text-red-500'>
                        <Cursor />
                    </span>
                    </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-12">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allTouristSpot">All-Tourist-Spot</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addTouristSpot">Add-Tourist-Spot</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myList">My-List</NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div>
                    logout
                </div>
            </div>
        </div>
    )
}

export default Navbar

