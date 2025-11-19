import Navbar from '../components/Navbar'
import { useMemo, useState } from 'react'

const FAQ_DATA = [
  // Drone cleaning
  { q: 'What surfaces can be cleaned with drones?', a: 'Drone cleaning is ideal for façades, cladding, glazing, roofs and solar arrays. We assess each substrate and specify pressure, flow and chemistry accordingly.' },
  { q: 'How do you control overspray and runoff?', a: 'We plan flight paths and spray patterns, set flow rates to suit the surface, and protect drainage. Where required we use catchment, diversion and controlled rinse-down.' },
  { q: 'Is drone cleaning safe around the public?', a: 'Yes. We operate with RAMS, site cordons and spotters. Using drones reduces work-at-height exposure and minimises disruption at ground level.' },
  { q: 'Do you need scaffolding or MEWPs?', a: 'Typically no. One of the benefits of drone cleaning is removing the need for scaffolding, cradles or MEWPs in many scenarios.' },
  { q: 'Can you work at night or out of hours?', a: 'Yes. We can schedule overnight or off-peak works to minimise impact on trading and public areas.' },
  { q: 'Are you insured?', a: 'We carry commercial-grade insurance and operate under robust safety procedures.' },
  { q: 'Do you provide method statements and risk assessments?', a: 'Yes. We provide RAMS and, where required, permits and traffic/pedestrian management plans.' },

  // Traditional cleaning
  { q: 'What is soft washing?', a: 'A low-pressure method using appropriate detergents and biocides to clean delicate surfaces such as render and stone.' },
  { q: 'Do you pressure wash roofs?', a: 'Where suitable we use controlled pressure, but often we combine manual removal with biocide to protect tiles and membranes.' },
  { q: 'Can you clean heritage buildings?', a: 'Yes, subject to survey and method approval. We adapt techniques to protect historic materials.' },
  { q: 'Do you offer maintenance plans?', a: 'Yes, we can set up scheduled cleans for façades, glazing, roofs and solar arrays.' },

  // Quotations & logistics
  { q: 'What areas do you cover?', a: 'Hampshire, Surrey and West Sussex for domestic and local commercial, with UK-wide coverage for larger commercial projects.' },
  { q: 'How do I get a quote?', a: 'Use the Get a Quote form with site address, service required and photos if possible. We’ll respond promptly.' },
  { q: 'Do you need photos for a quote?', a: 'Photos help us assess access, height and substrate. For more complex sites we may arrange a survey visit.' },
  { q: 'Can you work during business hours?', a: 'Yes. We plan to minimise disruption and can work out of hours where appropriate.' },

  // Environmental & compliance
  { q: 'Are your products safe for the environment?', a: 'We select detergents and biocides appropriate to the substrate and soiling, and manage runoff responsibly.' },
  { q: 'Do you manage water and runoff?', a: 'Yes. We plan containment, diversion and safe disposal as part of our method statements.' },
  { q: 'Do you comply with local regulations?', a: 'Yes. We operate in line with relevant regulations and site-specific requirements.' },
]

function useSearch(list, query) {
  return useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return list
    return list.filter(item =>
      item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    )
  }, [list, query])
}

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="bg-[#30363D] rounded-xl ring-1 ring-white/10 overflow-hidden divide-y divide-white/10">
      {items.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left px-6 py-4 text-white font-medium hover:bg-white/5 transition">
            {item.q}
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-gray-300">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQ(){
  const [query, setQuery] = useState('')
  const results = useSearch(FAQ_DATA, query)

  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="text-gray-300 mt-3">Browse common questions or search instantly across 60+ answers. We can expand this list at any time.</p>

        <div className="mt-6">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search questions..." className="w-full px-4 py-2 rounded bg-[#30363D] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F6FEB]" />
        </div>

        <div className="mt-8">
          <Accordion items={results} />
        </div>
      </section>
    </div>
  )
}
