import Reactm, {useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_img from '../../assets/caret_icon.svg'


import { logout } from '../../firebase'


const Navbar = () => {

  const navRef= useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className='navbar'>

      <div ref={navRef} className="navbar-left">
        <img src={logo} alt="log" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languagues</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_img} alt=""  />

        <div className="dropdown">
          <p onClick={()=> {logout()}}>sign out of netflix</p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar