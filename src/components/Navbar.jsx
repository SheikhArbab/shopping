import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { side } from '../features/sidebar/sideSlice';



export default function Navbar() {

const dispatch = useDispatch()
const handleside = () => {

  dispatch(side(true))
}



useEffect(() => window.addEventListener('scroll' , ()=> window.scrollY > 20 ? setNavFixed(true) : setNavFixed(false)))

const {cart} = useSelector(state => state)


const [navFixed, setNavFixed] = useState(false)
  const [menu, setMenu] = useState(false)



  return (
    <nav className=
    {`${navFixed? 'fixed  ' : 'relative '}
    z-20 items-center justify-between w-full h-14 px-10 py-10 bg-[#27282b] flex duration-300 transition-all top-0`}
    >
      <Link to={'/'} className='text-white font-bold  capitalize text-2xl'>
        shopping
      </Link>


      <div className='flex items-center gap-4'>


        <button
          className='md:hidden text-white order-1'

        >
          <label className="hamburger">
            <input type="checkbox" onClick={() => setMenu(!menu)} />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>


        <ul
          className={` ${menu ? 'h-fit p-10' : ''} duration-300   md:flex flex-col w-full left-0 h-0 overflow-hidden md:flex-row md:bg-transparent bg-[#27282b] z-10 md:static absolute right-8 top-14 md:h-14  items-center justify-end gap-5 md:gap-10 rounded-lg pe-2 me-8`}


        >
          <li className='mb-5 md:m-0'>
            <NavLink
              to={'/'}
              className='nav-link text-white font-semibold hover:text-yellow-300 duration-300 capitalize'
            >
              Home
            </NavLink>
          </li>


          <li>
            <NavLink
              to={'/adproducts'}
              className='nav-link text-white font-semibold hover:text-yellow-300 duration-300 capitalize'
            >
              Add product
            </NavLink>
          </li>

        </ul>
        <div onClick={handleside} >
         
            <i className="fa-sharp fa-solid relative fa-cart-shopping text-white text-2xl cursor-pointer">
              <div className='text-[36%] font-semibold text-[#27282b] flex items-center justify-center absolute -top-2 -right-1 w-[18px] h-[18px] rounded-full bg-yellow-300 border-[2px] border-[#27282b]'>
               {
                cart.products.length
               }
               
              </div>
            </i>
        
        </div>



      </div>
    </nav>
  );
}
