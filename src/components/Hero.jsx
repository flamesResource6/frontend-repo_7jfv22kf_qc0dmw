import { assets } from '../assetsMap'
import ImageX from './ImageX'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  const hero = assets.heroImage
  const bg = assets.heroBgGif
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2F343A]"></div>
      {bg && (
        <ImageX src={bg} alt="Background animation" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[1px]" loading="lazy" />
      )}
      <div className="absolute -right-20 -top-20 w-[600px] h-[600px] rounded-full bg-[#1F6FEB]/20 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Drone & Exterior Cleaning Services
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              Professional drone cleaning and traditional exterior cleaning for commercial and residential properties.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onSecondaryClick} className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">Learn More</button>
              <button onClick={onPrimaryClick} className="px-5 py-3 rounded-md bg-[#1F6FEB] text-white hover:bg-[#1F6FEB]/90 transition shadow-[0_10px_40px_-10px_rgba(31,111,235,0.6)]">Get a Quote</button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 -inset-10 bg-gradient-to-tr from-[#1F6FEB]/30 to-transparent rounded-3xl blur-2xl"></div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#30363D]">
              <ImageX src={hero} alt="Drone cleaning" className="w-full h-full object-cover" loading="eager" fetchpriority="high" sizes="(min-width: 1024px) 640px, 100vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
