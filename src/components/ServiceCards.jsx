import { assets } from '../assetsMap'

const services = [
  {
    title: 'Drone Building Washing',
    desc: 'High-pressure or soft washing via drone for safe, efficient façade cleaning.',
    img: assets.drone.building,
  },
  {
    title: 'Drone Window & Façade Cleaning',
    desc: 'Reach high-rise glazing and cladding without scaffolding or MEWPs.',
    img: assets.drone.facade,
  },
  {
    title: 'Drone Roof Cleaning',
    desc: 'Remove moss, grime and pollutants from roof surfaces using precision drones.',
    img: assets.drone.roof,
  },
  {
    title: 'Drone Solar Cleaning',
    desc: 'Non-abrasive cleaning to maximise solar yield across rooftop and ground arrays.',
    img: assets.drone.solar,
  },
]

export default function ServiceCards() {
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Drone Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-[#30363D] rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-[#1F6FEB]/30 transition-shadow">
              <div className="aspect-video bg-black/20">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
