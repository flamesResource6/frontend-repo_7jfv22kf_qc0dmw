import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = e.target
    const data = new FormData(form)

    try {
      await new Promise(r => setTimeout(r, 600))
      setStatus('Your message has been sent. We will get back to you shortly.')
      form.reset()
    } catch (e) {
      setStatus('There was an error sending your message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Get a Quote</h1>
        <p className="text-gray-300 mt-3">Email: info@droneexteriorsolutions.co.uk · Phone: 07496 387071 · Area: Hampshire, Surrey, West Sussex (commercial UK-wide)</p>

        <form onSubmit={submit} className="mt-10 grid grid-cols-1 gap-5 bg-[#30363D] p-6 rounded-xl ring-1 ring-white/10">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Phone</label>
              <input name="phone" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Company name (optional)</label>
              <input name="company" className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Site address / postcode</label>
              <input name="address" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Building type</label>
              <select name="buildingType" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]">
                <option>Residential</option>
                <option>Hotel</option>
                <option>Office</option>
                <option>Retail</option>
                <option>Industrial</option>
                <option>Public sector</option>
                <option>Heritage</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Service required</label>
              <select name="service" required className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]">
                <option>Drone building washing</option>
                <option>Drone window & façade cleaning</option>
                <option>Drone roof cleaning</option>
                <option>Drone solar cleaning</option>
                <option>Pressure washing</option>
                <option>Soft washing</option>
                <option>Roof moss removal</option>
                <option>Gutter cleaning & washing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Upload photos</label>
              <input name="photos" type="file" multiple className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
              <p className="text-xs text-gray-400 mt-1">JPEG/PNG/WebP. Max 10MB each. You can also email files after submitting.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message / project details</label>
            <textarea name="message" rows="4" className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]"></textarea>
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-300">
            <input name="consent" type="checkbox" required className="mt-1" />
            <span>“I consent to Drone Exterior Solutions Ltd storing and using my personal information to process my enquiry. I understand my data will not be shared with third parties, except where legally required, and will be handled in accordance with the Privacy Policy.”</span>
          </label>

          <button className="mt-2 inline-flex justify-center px-5 py-3 rounded bg-[#1F6FEB] hover:bg-[#1F6FEB]/90">Send</button>

          {status && <p className="text-sm text-gray-300">{status}</p>}
        </form>

        <p className="text-xs text-gray-400 mt-4">For full details on how we protect your information, please see our Privacy Policy.</p>
      </section>
    </div>
  )
}
