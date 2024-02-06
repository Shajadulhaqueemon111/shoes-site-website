import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import '../StyleCss/style.css';
import { FiLogIn } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { CgLogOut } from "react-icons/cg";
import { AuthContext } from '../Auth/AuthProvider';
const Navbar = () => {
  const {user,userSingOut}=useContext(AuthContext)
  const navLink=<>
  
  <li className='font-familly font-bold font-xl'><NavLink to="/"><CiHome className='text-[#B226E3]  text-2xl font-bold'></CiHome>Home</NavLink></li>
  <li className='font-familly font-bold font-xl'><NavLink to="/explore"><IoCartOutline className='font-bold  text-2xl text-[#B226E3]'></IoCartOutline>Explore</NavLink></li>
  <li className='font-familly font-bold font-xl'><NavLink to="/cart"><MdOutlineShoppingCart className='font-bold  text-2xl text-[#B226E3]'></MdOutlineShoppingCart>Carts</NavLink></li>
  {/* <li className='font-familly font-bold font-xl'><NavLink to="/login"><FiLogIn className='font-bold  text-2xl text-[#B226E3]'></FiLogIn>Login</NavLink></li> */}
  </>

const handelLogOut = (auth) => {

  userSingOut(auth)
      .then(res => {
          console.log(res.user)
      })
      .catch(error => {
          console.log(error)
      })

}
  return (
    <div className='bg-[#B226E31A]'>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}
      </ul>
    </div>
    <a className=" font-bold text-[#B226E3] font-familly text-xl">ShoeShop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL ? user.photoURL : "https://i.ibb.co/KNRqbsD/images-6.jpg"
                                }  alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p >{user.displayName}</p>

                            </li>
                            <li>

                                <button onClick={handelLogOut} className="btn btn-sm mt-5  btn-secondary"><CgLogOut className='text-xl font-bold text-[#B226E3]'></CgLogOut> Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="font-familly font-bold btn btn-sm  btn-ghost"><LuLogIn className='text-xl font-bold text-[#B226E3]'></LuLogIn>Login</button>
                        </Link>
                }
            </div>
        </div>
  </div>

    );
};


export default Navbar;