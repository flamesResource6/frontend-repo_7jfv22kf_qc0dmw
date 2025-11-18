import Navbar from '../components/Navbar'

export default function About(){
  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">About Drone Exterior Solutions Ltd</h1>
        <div className="prose prose-invert max-w-none mt-6">
          <p>Use this page for: who we are, 25+ years traditional experience, why we invested in drones, professional standards, safety & insurance, commitment to quality, values and mission. I will replace this with your final copy.</p>
        </div>
      </section>
    </div>
  )
}
