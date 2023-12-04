
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success()
            })
            .catch(error => {
                toast.error(error, {
                    position: "bottom-right"
                })
            })
    }
    console.log(user?.displayName)
    const src = user?.photoURL
    const navlink = <>
        
        < NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#5d349e]" : ""
        }> Home</NavLink>
        {
            user ?
                <>
                    < NavLink to="/gallary" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#5d349e]" : ""
                    }> Gallary</NavLink>
                    < NavLink to="/dashboard" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#5d349e]" : ""
                    }> Dashboard</NavLink>
                </>
                
                
                : ""
        }
    </>
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ? <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={src} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user?user.displayName :""}</span>
                            <span className="block truncate text-sm font-medium">{user ? user.email:""}</span>
                        </Dropdown.Header>
                        <Dropdown.Item >
                            <Link to="dashboard">Dashboard</Link>
                        </Dropdown.Item>
                       
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                    </Dropdown> : <NavLink to="login" >Login</NavLink>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
             
                {
                   navlink 
                }
              
              
              
            </Navbar.Collapse>
            <ToastContainer/>
        </Navbar>
    );
};

export default Header;