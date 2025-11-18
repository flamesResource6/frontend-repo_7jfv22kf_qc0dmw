import { Link } from 'react-router-dom'

export default function ContactCTA(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2F343A]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(31,111,235,0.25),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to get a quotation?</h2>
        <p className="text-gray-300 mt-3">Contact us today and we’ll respond promptly.</p>
        <Link to="/contact" className="inline-block mt-8 px-6 py-3 rounded-md bg-[#1F6FEB] text-white hover:bg-[#1F6FEB]/90 transition">Get a Quote</Link>
      </div>
    </section>
  )
}
