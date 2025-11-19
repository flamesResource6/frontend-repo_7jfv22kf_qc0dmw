import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assetsMap'
import ImageX from './ImageX'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-[#1F6FEB]/20' : 'text-gray-300 hover:text-white hover:bg-white/5'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#2F343A]/60 bg-[#2F343A]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <ImageX src={assets.logoHeader} alt="Drone Exterior Solutions logo" className="h-9 w-auto" />
            <span className="sr-only">Drone Exterior Solutions Ltd</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${navLinkClass({isActive})} bg-[#1F6FEB] text-white hover:bg-[#1F6FEB]/90`}>Get a Quote</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
