import ImageX from './ImageX'
import { assets } from '../assetsMap'

const reasons = [
  { title: 'Fully insured', text: 'Commercial-grade insurance with safety-first operations.' },
  { title: 'Safe & efficient', text: 'Rapid coverage with minimal disruption on-site.' },
  { title: 'No scaffolding', text: 'No need for scaffolding or heavy access equipment.' },
  { title: 'Advanced drone technology', text: 'High-performance drone systems and cleaning rigs.' },
  { title: '25+ years traditional experience', text: 'Decades of exterior cleaning expertise.' },
]

export default function WhyChooseUs(){
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {reasons.map((r, idx)=> (
            <div key={r.title} className="bg-[#30363D] rounded-xl overflow-hidden ring-1 ring-white/10">
              {idx < 2 && (
                <div className="aspect-video bg-black/20">
                  <ImageX src={idx === 0 ? assets.sectorCommercial : assets.sectorIndustrial} alt={r.title} className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 20vw, 100vw" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-white font-semibold">{r.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
