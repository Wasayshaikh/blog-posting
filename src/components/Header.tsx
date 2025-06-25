import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser,faAr } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const isLogged = useSelector((state:RootState)=> state.auth.isLogged);
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* <!-- Left: Logo --> */}
                    <div className="flex-shrink-0">
                        <Link to={"/"} title='MyLogo' className="text-xl font-bold " >MyLogo</Link>

                    </div>

                    {/* <!-- Center: Navigation Links --> */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to={"/"}  >Home</Link>
                        <Link to={"/blog"}  >Blog</Link>
                        <Link to={"/"}  >About</Link>
                        <Link to={"/blog"} >Contact</Link>

                    </nav>

                    {/* <!-- Right: Login Icon --> */}
                    <div className="flex-shrink-0">
                        <Link to={"/login"} title='Home'>
                      { isLogged?(<FontAwesomeIcon icon={faRightFromBracket} />):(<FontAwesomeIcon icon={faUser} />)

                      }
                           
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    )
}
