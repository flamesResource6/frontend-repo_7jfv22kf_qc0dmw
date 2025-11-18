import { Link, NavLink } from 'react-router-dom'

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
            <div className="w-9 h-9 rounded bg-[#1F6FEB] grid place-items-center text-white font-bold shadow-[0_0_30px_rgba(31,111,235,0.45)]">DE</div>
            <div className="text-white font-semibold leading-tight">
              <div>Drone Exterior</div>
              <div className="text-xs text-gray-300 -mt-0.5">Solutions Ltd</div>
            </div>
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
