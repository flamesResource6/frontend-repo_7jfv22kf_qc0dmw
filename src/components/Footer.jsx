import { assets } from '../assetsMap'

export default function Footer(){
  return (
    <footer className="bg-[#2F343A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={assets.logoFooter} alt="Drone Exterior Solutions logo" className="h-7 w-auto" loading="lazy" />
          <p>© {new Date().getFullYear()} Drone Exterior Solutions Ltd. All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
