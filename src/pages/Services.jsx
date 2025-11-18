import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'

export default function Services(){
  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-gray-300 mt-4 max-w-3xl">Detailed sections for drone building washing, window & façade cleaning, roof cleaning, and solar cleaning, followed by traditional services (pressure washing, soft washing, roof moss removal, gutter cleaning & washing, and ground-level window cleaning).</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {["Drone building washing","Drone window & façade cleaning","Drone roof cleaning","Drone solar cleaning"].map((t)=> (
            <div key={t} className="bg-[#30363D] rounded-xl p-6 ring-1 ring-white/10">
              <h2 className="text-2xl font-semibold">{t}</h2>
              <p className="text-gray-300 mt-2">Replace with your final copy and images.</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-14">Traditional Cleaning Services</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {["Pressure washing","Soft washing","Roof moss removal","Gutter cleaning & washing","Traditional ground-level external window cleaning"].map((t)=> (
            <div key={t} className="bg-[#30363D] rounded-xl p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="text-gray-300 mt-2">Replace with your final copy and images.</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
    </div>
  )
}
