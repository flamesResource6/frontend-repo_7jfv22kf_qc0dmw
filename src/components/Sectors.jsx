import ImageX from './ImageX'
import { assets } from '../assetsMap'

const sectors = [
  { title: 'Hotels', img: assets.sectorCommercial },
  { title: 'Offices', img: assets.sectorCommercial },
  { title: 'High-Rise Buildings', img: assets.sectorCommercial },
  { title: 'Retail Parks', img: assets.sectorCommercial },
  { title: 'Industrial Sites', img: assets.sectorIndustrial },
  { title: 'Heritage Buildings', img: assets.sectorCommercial },
  { title: 'Public Sector', img: assets.sectorCommercial },
  { title: 'Solar Farms', img: assets.sectorIndustrial },
]

export default function Sectors(){
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sectors We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s)=> (
            <div key={s.title} className="bg-[#30363D] rounded-xl overflow-hidden ring-1 ring-white/10">
              <div className="aspect-video"><ImageX src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"/></div>
              <div className="p-4 text-white font-semibold">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
