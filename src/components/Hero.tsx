import {useState} from 'react'
import Logo from "../images/logo.svg"
import Menu from "../images/icon-hamburger.svg" 
import Close from "../images/icon-close-menu.svg" 

const Hero = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="hero w-full h-[300px] md:h-[400px]">
      <nav className="h-[4rem] flex justify-between items-center px-6 max-w-[1200px] m-auto">
        <div className="cursor-pointer"><img src={Logo} alt="crowdfund" /></div>
        {/* NAVBAR FOR LARGE SCREENS */}
        <ul className="hidden text-white text-sm font-bold md:flex gap-6">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
        {/* NAVBAR FOR MOBILE */}
        {showNav && 
          <ul className="md:hidden z-10 absolute top-16 w-[90vw] bg-white rounded-xl shadow-lg">
            <li className="p-6 text-slate-700 font-bold">About</li>
            <hr />
            <li className="p-6 text-slate-700 font-bold">Discover</li>
            <hr />
            <li className="p-6 text-slate-700 font-bold">Get Started</li>
          </ul>
          }
        <div className="md:hidden">
          {!showNav && <button><img src={Menu} alt="open" onClick={() => setShowNav(true)}/></button>}
          {showNav && <button><img src={Close} alt="close" onClick={() => setShowNav(false)}/></button>}
        </div> 
      </nav>
    </div>
  )
}

export default Hero