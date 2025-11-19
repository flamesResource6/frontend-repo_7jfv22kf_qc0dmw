import Navbar from '../components/Navbar'
import { useMemo, useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [errors, setErrors] = useState({})
  const [files, setFiles] = useState([])
  const [consented, setConsented] = useState(false)

  const fileSummary = useMemo(() => {
    if (!files || files.length === 0) return ''
    const names = Array.from(files).map(f => f.name)
    const preview = names.slice(0, 3).join(', ')
    const more = names.length > 3 ? ` +${names.length - 3} more` : ''
    return `${names.length} file${names.length > 1 ? 's' : ''} attached: ${preview}${more}`
  }, [files])

  const validate = (form) => {
    const e = {}
    const get = (name) => form.elements.namedItem(name)?.value?.trim() || ''
    const email = get('email')
    const name = get('name')
    const phone = get('phone')
    const address = get('address')
    const buildingType = get('buildingType')
    const service = get('service')

    if (!name) e.name = 'This field is required.'
    if (!email) e.email = 'This field is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.'
    if (!phone) e.phone = 'This field is required.'
    if (!address) e.address = 'This field is required.'
    if (!buildingType) e.buildingType = 'This field is required.'
    if (!service) e.service = 'This field is required.'
    if (!consented) e.consent = 'Please tick the consent box to continue.'

    // Basic file validation: type and size
    if (files && files.length) {
      const invalid = Array.from(files).find(f => !/(jpe?g|png|webp)$/i.test(f.name) || f.size > 10 * 1024 * 1024)
      if (invalid) e.photos = 'Files must be JPEG, PNG, or WebP and under 10MB each.'
    }

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    const form = e.target

    if (!validate(form)) {
      setStatus({ state: 'error', message: 'Something went wrong sending your message. Please check the form and try again.' })
      return
    }

    setStatus({ state: 'sending', message: 'Sending…' })
    const data = new FormData(form)
    try {
      // Simulate async submit
      await new Promise(r => setTimeout(r, 800))
      setStatus({ state: 'success', message: 'Thank you – your enquiry has been sent. We’ll get back to you as soon as possible.' })
      form.reset()
      setFiles([])
      setConsented(false)
      setErrors({})
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong sending your message. Please check the form and try again.' })
    }
  }

  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">Get a Quote</h1>
        <p className="text-gray-300 mt-3">Email: info@droneexteriorsolutions.co.uk · Phone: 07496 387071 · Area: Hampshire, Surrey, West Sussex (commercial UK-wide)</p>

        <form onSubmit={submit} noValidate className="mt-10 grid grid-cols-1 gap-5 bg-[#30363D] p-6 rounded-xl ring-1 ring-white/10">
          {status.state !== 'idle' && (
            <div className={
              `rounded-md p-3 text-sm ${
                status.state === 'success' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' :
                status.state === 'error' ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30' :
                'bg-sky-500/10 text-sky-300 border border-sky-500/30'
              }`
            }>
              {status.message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input name="name" aria-invalid={!!errors.name} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.name ? 'border-rose-500/60' : 'border-white/10'}`} />
              {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input name="email" type="email" aria-invalid={!!errors.email} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.email ? 'border-rose-500/60' : 'border-white/10'}`} />
              {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Phone</label>
              <input name="phone" aria-invalid={!!errors.phone} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.phone ? 'border-rose-500/60' : 'border-white/10'}`} />
              {errors.phone && <p className="mt-1 text-xs text-rose-300">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Company name (optional)</label>
              <input name="company" className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Site address / postcode</label>
              <input name="address" aria-invalid={!!errors.address} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.address ? 'border-rose-500/60' : 'border-white/10'}`} />
              {errors.address && <p className="mt-1 text-xs text-rose-300">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Building type</label>
              <select name="buildingType" aria-invalid={!!errors.buildingType} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.buildingType ? 'border-rose-500/60' : 'border-white/10'}`}>
                <option value="">Select…</option>
                <option>Residential</option>
                <option>Hotel</option>
                <option>Office</option>
                <option>Retail</option>
                <option>Industrial</option>
                <option>Public sector</option>
                <option>Heritage</option>
                <option>Other</option>
              </select>
              {errors.buildingType && <p className="mt-1 text-xs text-rose-300">{errors.buildingType}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Service required</label>
              <select name="service" aria-invalid={!!errors.service} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.service ? 'border-rose-500/60' : 'border-white/10'}`}>
                <option value="">Select…</option>
                <option>Drone building washing</option>
                <option>Drone window & façade cleaning</option>
                <option>Drone roof cleaning</option>
                <option>Drone solar cleaning</option>
                <option>Pressure washing</option>
                <option>Soft washing</option>
                <option>Roof moss removal</option>
                <option>Gutter cleaning & washing</option>
              </select>
              {errors.service && <p className="mt-1 text-xs text-rose-300">{errors.service}</p>}
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Upload photos</label>
              <input name="photos" type="file" multiple onChange={(ev)=> setFiles(ev.target.files)} className={`w-full px-3 py-2 rounded bg-[#2F343A] border focus:outline-none focus:ring-2 focus:ring-[#1F6FEB] ${errors.photos ? 'border-rose-500/60' : 'border-white/10'}`} />
              <p className="text-xs text-gray-400 mt-1">JPEG/PNG/WebP. Max 10MB each. You can also email files after submitting.</p>
              {fileSummary && <p className="mt-1 text-xs text-gray-300">{fileSummary}</p>}
              {errors.photos && <p className="mt-1 text-xs text-rose-300">{errors.photos}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message / project details</label>
            <textarea name="message" rows="4" className="w-full px-3 py-2 rounded bg-[#2F343A] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]"></textarea>
          </div>

          <div className="space-y-1">
            <label className="flex items-start gap-3 text-sm text-gray-300">
              <input name="consent" type="checkbox" checked={consented} onChange={(ev)=> setConsented(ev.target.checked)} className="mt-1" />
              <span>“I consent to Drone Exterior Solutions Ltd storing and using my personal information to process my enquiry. I understand my data will not be shared with third parties, except where legally required, and will be handled in accordance with the Privacy Policy.”</span>
            </label>
            {errors.consent && <p className="text-xs text-rose-300">{errors.consent}</p>}
            <div className="text-xs">
              <a href="/privacy-policy" className="text-[#1F6FEB] hover:underline">View our Privacy Policy</a>
            </div>
          </div>

          <button disabled={status.state === 'sending'} className="mt-2 inline-flex justify-center px-5 py-3 rounded bg-[#1F6FEB] hover:bg-[#1F6FEB]/90 disabled:opacity-60 disabled:cursor-not-allowed">
            {status.state === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4">For full details on how we protect your information, please see our Privacy Policy.</p>
      </section>
    </div>
  )
}
