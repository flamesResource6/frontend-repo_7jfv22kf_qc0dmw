import Navbar from '../components/Navbar'
import ImageX from '../components/ImageX'
import { assets } from '../assetsMap'

export default function About(){
  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#2F343A] z-10"/>
        <div className="h-[42vh] md:h-[56vh] w-full overflow-hidden">
          <ImageX src={assets.aboutImage} alt="Our drone and equipment" className="w-full h-full object-cover" loading="eager" fetchpriority="high" sizes="100vw" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="bg-[#30363D]/90 backdrop-blur rounded-2xl p-6 ring-1 ring-white/10">
            <h1 className="text-4xl font-bold">About Drone Exterior Solutions Ltd</h1>
            <p className="text-gray-300 mt-3">We deliver high-spec exterior cleaning using the best of both worlds: advanced drone cleaning systems for height, scale and safety — and 25+ years of traditional expertise for precision finishes on the ground.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10">
        <div className="prose prose-invert max-w-none">
          <h2>Our approach</h2>
          <p>Every site is different. We assess access, surface materials, runoff, drainage, public interface and environmental constraints before recommending a method — from soft washing on delicate render to precision drone washing for façades, roofs and solar arrays.</p>

          <h3>Safety-first operations</h3>
          <p>We operate under robust RAMS with commercial-grade insurance. Drone cleaning reduces work-at-height exposure, minimises site disruption and often removes the need for scaffolding, MEWPs or road closures.</p>

          <h3>Results that last</h3>
          <p>Our detergents and biocides are selected for the substrate and soiling type. Where appropriate we combine mechanical removal with biocidal treatment for longer-lasting results and slower regrowth.</p>

          <h3>Coverage</h3>
          <p>We serve Hampshire, Surrey and West Sussex for domestic and local commercial, with project-based coverage across the UK for larger commercial and public-sector work.</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#30363D]">
            <ImageX src={assets.supportImage} alt="On-site operations" className="w-full h-full object-cover" loading="lazy" sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#30363D]">
              <ImageX src={assets.sectorCommercial} alt="Commercial buildings" className="w-full h-full object-cover" loading="lazy" sizes="50vw" />
            </div>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#30363D]">
              <ImageX src={assets.sectorIndustrial} alt="Industrial site" className="w-full h-full object-cover" loading="lazy" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
