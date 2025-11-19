import Navbar from '../components/Navbar'
import ImageX from '../components/ImageX'
import { assets } from '../assetsMap'
import HowItWorks from '../components/HowItWorks'

export default function Services(){
  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-gray-300 mt-4 max-w-3xl">High-access exterior cleaning using drone technology, backed by decades of traditional expertise. We specify the safest, most effective method for your substrate, soiling type and site constraints.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.drone.building} alt="Drone building washing" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Drone Building Washing</h2>
              <p className="text-gray-300 mt-2">Fast, consistent coverage of façades without scaffolding or MEWPs. We combine precision spray patterns with controlled flow rates to remove traffic film, algae and atmospheric pollutants.</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Ideal for cladding, panels, coated metal and glazed façades</li>
                <li>Minimal disruption to public areas and trading hours</li>
                <li>Safer method of work at height, reduced site footprint</li>
              </ul>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.drone.facade} alt="Drone window & façade cleaning" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Drone Window & Façade Cleaning</h2>
              <p className="text-gray-300 mt-2">Reach high glazing safely and efficiently. Purified water systems deliver a spotless finish while protecting frames, seals and specialist coatings.</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>No scaffolding or cradles required</li>
                <li>Consistent, streak-free results on high-rise elevations</li>
                <li>Night or off-peak scheduling available</li>
              </ul>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.drone.roof} alt="Drone roof cleaning" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Drone Roof Cleaning</h2>
              <p className="text-gray-300 mt-2">Remove moss, lichen and grime from pitched and flat roofs while reducing work-at-height exposure. We tailor pressure and chemistry to the roof surface to protect tiles and membranes.</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Suitable for slate, tile, single-ply and metal</li>
                <li>Runoff management and protection of gutters and drains</li>
                <li>Optional biocide treatment to slow regrowth</li>
              </ul>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.drone.solar} alt="Drone solar cleaning" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">Drone Solar Panel Cleaning</h2>
              <p className="text-gray-300 mt-2">Non-abrasive cleaning of rooftop and ground-mount arrays to maximise yield. We use soft techniques and purified water to protect panel coatings.</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                <li>Safely access large arrays and challenging pitches</li>
                <li>Scheduled maintenance plans available</li>
                <li>Reporting on condition and obvious defects</li>
              </ul>
            </div>
          </article>
        </div>

        <h2 className="text-3xl font-bold mt-16">Traditional Exterior Cleaning</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.traditional.pressure} alt="Pressure washing" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Pressure Washing</h3>
              <p className="text-gray-300 mt-2">Deep-clean hardstandings and external areas including drives, car parks and communal pathways. Adjustable pressure and nozzles protect substrates while removing heavy soiling.</p>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.traditional.softwash} alt="Soft washing" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Soft Washing</h3>
              <p className="text-gray-300 mt-2">Low-pressure cleaning for render, stonework and delicate façades. Controlled application followed by thorough rinsing delivers an even finish without surface damage.</p>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.traditional.roofMoss} alt="Roof moss removal" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Roof Moss Removal / Roof Cleaning</h3>
              <p className="text-gray-300 mt-2">Manual or low-impact removal techniques combined with biocide treatment help restore roof appearance and slow biological regrowth.</p>
            </div>
          </article>

          <article className="bg-[#30363D] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="aspect-video"><ImageX src={assets.traditional.gutter} alt="Gutter cleaning" className="w-full h-full object-cover" loading="lazy" sizes="(min-width:1024px) 560px, 100vw"/></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Gutter Cleaning & Washing</h3>
              <p className="text-gray-300 mt-2">Clear blockages and restore flow with vacuum, wash-down and minor repairs. Optional downpipe testing and basic condition reporting.</p>
            </div>
          </article>
        </div>
      </section>

      <HowItWorks />
    </div>
  )
}
