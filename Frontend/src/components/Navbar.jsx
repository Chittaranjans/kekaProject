import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context';



function Navbar() {
    const [userData, setUserData] = useAuth(); // Destructure userData and setUserData from context

    const navigate = useNavigate();


    const { logout } = useAuth(); // Destructure logout from useAuth

    const handleLogout = () => {
        if (logout) {
            localStorage.removeItem('userData'); // Remove user data from localStorage
            setUserData(undefined); // Update context state to undefined
        };
        // Call logout from context
        navigate('/'); // Navigate to login page
    };


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Keka@</a>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <div className="h-5 w-5 flex text-center justify-center" stroke="currentColor">Login</div>

                        </div>
                    </div>

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar