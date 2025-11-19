import { assets } from '../assetsMap'
import ImageX from './ImageX'

const items = [
  { title: 'Pressure washing', desc: 'Drives, patios, car parks, communal areas', img: assets.traditional.pressure },
  { title: 'Soft washing', desc: 'Render, cladding, walls, stonework', img: assets.traditional.softwash },
  { title: 'Roof moss removal + biocide', desc: 'Safe moss removal with long-lasting biocide treatment', img: assets.traditional.roofMoss },
  { title: 'Gutter cleaning & washing', desc: 'Clear, wash and restore gutter performance', img: assets.traditional.gutter },
  { title: 'Ground-level window cleaning', desc: 'Optional add-on for site finish', img: assets.traditional.windows },
]

export default function TraditionalGrid() {
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Traditional Exterior Cleaning</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="bg-[#30363D] rounded-xl overflow-hidden ring-1 ring-white/10">
              <div className="aspect-video">
                <ImageX src={i.img} alt={i.title} className="w-full h-full object-cover" loading="lazy" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{i.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
