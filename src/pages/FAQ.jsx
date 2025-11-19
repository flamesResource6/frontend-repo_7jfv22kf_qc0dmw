import Navbar from '../components/Navbar'
import { useMemo, useState } from 'react'

// Full FAQ dataset (60+ entries) based on your provided sections
const FAQ_DATA = [
  // SECTION 1 — Drone Cleaning FAQs
  { q: 'What can drone cleaning be used for?', a: 'Drone cleaning is ideal for buildings, façades, windows, roofs, solar panels, wind turbines, industrial units and other high or hard-to-reach surfaces without scaffolding or lifts.' },
  { q: 'Is drone cleaning safe for my building?', a: 'Yes. Drone cleaning uses a controlled, low-impact spray system that avoids physical contact with the building, reducing the risk of damage from heavy access equipment or manual methods.' },
  { q: 'Does the drone touch the building?', a: 'No. The drone operates at a safe distance and delivers water or cleaning solution via an extended spray system.' },
  { q: 'Can drones clean windows?', a: 'Yes — drones can clean external commercial windows and façades, especially on tall buildings where traditional access is challenging or unsafe.' },
  { q: 'Can drones clean roofs?', a: 'Yes. Drones can clean many types of roofs, particularly metal, commercial, industrial, and large surface areas. For delicate tiles or surfaces, we may use traditional methods to avoid damage.' },
  { q: 'Do you clean solar panels with drones?', a: 'Yes. Drones are highly effective for large solar farms, industrial solar arrays, and difficult-to-reach installations.' },
  { q: 'What weather conditions can drones operate in?', a: 'We can operate drones safely in light winds and dry conditions. High winds, heavy rain, or storms may require rescheduling.' },
  { q: 'Is drone cleaning noisy?', a: 'The drone makes a similar level of noise to a large garden tool and is significantly quieter than pressure washing or scaffolding teams working overhead.' },
  { q: 'Is the spray controlled, or will it affect neighbours?', a: 'We control spray direction, flow and distance carefully to minimise overspray. On windy days, we adjust technique or reschedule if required.' },
  { q: 'Do you need scaffolding or cherry pickers?', a: 'No. That’s one of the main benefits. Drones remove the need for expensive access equipment.' },
  { q: 'Is drone cleaning insured?', a: 'Yes. We are fully insured for both drone operations and exterior cleaning activities.' },
  { q: 'Is drone cleaning faster than traditional methods?', a: 'Yes — in most cases drone cleaning is significantly quicker, especially on large buildings or high façades.' },
  { q: 'Is drone cleaning eco-friendly?', a: 'Drones use far less water and avoid the fuel and machinery used for heavy access platforms.' },
  { q: 'Can drone cleaning damage cladding or render?', a: 'No. Drone cleaning is non-contact and gentle. For delicate surfaces, we adjust pressure or switch to a soft wash method.' },

  // SECTION 2 — Pressure Washing FAQs
  { q: 'What surfaces can you pressure wash?', a: 'Driveways, patios, block paving, concrete, paths, car parks, commercial yards and more.' },
  { q: 'Can you remove blackspots, algae and lichen?', a: 'Yes. We use specialist treatments for stubborn blackspots and organic growth.' },
  { q: 'Will pressure washing damage my surface?', a: 'We adjust pressure levels depending on the material. Some surfaces require a softer approach and we will always choose the safest method.' },
  { q: 'Do you use chemicals for pressure washing?', a: 'We mainly use water. Stubborn organic growth may require treatment with a professional-grade cleaning solution.' },
  { q: 'Do you re-sand block paving afterwards?', a: 'Yes. If required, we can re-sand block paving once the surface has dried.' },
  { q: 'How long does the surface take to dry after pressure washing?', a: 'Most surfaces dry within a few hours, depending on weather conditions.' },
  { q: 'Will pressure washing affect my neighbours?', a: 'We manage spray carefully and work tidily to keep disruption to a minimum.' },
  { q: 'Can you clean large commercial car parks?', a: 'Yes. We have the equipment to clean commercial yards, car parks and communal spaces efficiently.' },

  // SECTION 3 — Soft Washing FAQs
  { q: 'What is soft washing?', a: 'Soft washing uses a low-pressure application of cleaning solutions to gently remove dirt, algae and organic growth without damaging the surface.' },
  { q: 'What surfaces is soft washing suitable for?', a: 'Render, K-render, cladding, stone, painted surfaces, and delicate walls.' },
  { q: 'Is soft washing safe?', a: 'Yes — it’s one of the safest options for delicate or sensitive surfaces.' },
  { q: 'How long do soft washing results last?', a: 'Typically 12–36 months depending on the environment and surface type.' },
  { q: 'Will soft washing remove heavy staining?', a: 'Yes. Organic staining responds very well; deep carbon-based staining may require additional treatment.' },
  { q: 'Will the chemicals affect plants or grass during soft washing?', a: 'We take precautions and pre-wet surrounding areas. We always clean responsibly.' },
  { q: 'Does soft washing replace pressure washing?', a: 'Not always — the best method depends on the surface. We choose the right approach for every job.' },
  { q: 'Do you use biocide treatments with soft washing?', a: 'Yes. Biocides help prevent regrowth and keep surfaces cleaner for longer.' },

  // SECTION 4 — Roof Moss Removal FAQs
  { q: 'How do you remove moss from roofs?', a: 'We remove moss manually using safe scraping methods, followed by a biocide application to treat remaining spores.' },
  { q: 'Do you use high-pressure on roofs?', a: 'No — not on delicate tile roofs. We only pressure clean certain surfaces where it is completely safe.' },
  { q: 'Is moss removal safe for my tiles?', a: 'Yes. Manual removal is the safest method and avoids premature roof wear.' },
  { q: 'Do you need scaffolding for roof work?', a: 'Not always. It depends on access. We assess each roof individually to choose the safest and most cost-effective method.' },
  { q: 'What does biocide do on roofs?', a: 'Biocide kills moss and algae spores to prevent regrowth and continues working for months after application.' },
  { q: 'How long before the roof looks clean?', a: 'Moss removal is instant. Biocide continues to brighten the roof over weeks and months.' },
  { q: 'Will moss come back?', a: 'Eventually, yes — but biocide massively slows regrowth compared to untreated roofs.' },

  // SECTION 5 — Gutter Cleaning FAQs
  { q: 'How do you clean gutters?', a: 'We manually remove leaves, moss and debris from gutters and downpipes.' },
  { q: 'Do you clean downpipes too?', a: 'Yes — we always check and clear downpipes during the service.' },
  { q: 'Can you clean fascia and soffits?', a: 'Yes — we offer fascia and soffit washing as an additional service.' },
  { q: 'How often should gutters be cleaned?', a: 'Every 6–12 months depending on surrounding trees and roof type.' },
  { q: 'What are the signs of a blocked gutter?', a: 'Overflowing water, damp patches, staining on walls, or sagging gutter runs.' },
  { q: 'Do you need ladders for gutter cleaning?', a: 'Sometimes. It depends on the building. We always use safe working methods.' },

  // SECTION 6 — Commercial / Large-Scale Cleaning FAQs
  { q: 'Do you work on large commercial buildings?', a: 'Yes — we specialise in hotels, offices, warehouses, retail parks and industrial units.' },
  { q: 'Can you work out of hours?', a: 'Yes — we can work evenings or weekends to reduce disruption.' },
  { q: 'Are you insured for commercial work?', a: 'Yes — we carry full public liability and drone insurance.' },
  { q: 'Do you provide RAMS for commercial projects?', a: 'Yes — we supply full Risk Assessments and Method Statements for every commercial project.' },
  { q: 'Can you clean buildings without access equipment?', a: 'Yes — drone cleaning removes the need for scaffolding and cherry pickers.' },
  { q: 'Can you work alongside other contractors?', a: 'Yes — we can coordinate with site managers, maintenance teams and contractors.' },
  { q: 'Do you cover the whole UK?', a: 'We cover Hampshire, Surrey and West Sussex for traditional services. Drone cleaning is available for larger commercial projects across the UK.' },

  // SECTION 7 — General FAQs
  { q: 'What areas do you cover?', a: 'Traditional services: Hampshire, Surrey, West Sussex. Drone cleaning: Larger commercial projects UK-wide.' },
  { q: 'Do you need access to water or electricity?', a: 'We normally require one outdoor tap. For drone cleaning, we can also supply purified water if required.' },
  { q: 'Do I need to be home?', a: 'Not always — if we can access the area safely, we can work independently.' },
  { q: 'What if the weather is bad?', a: 'We work in most conditions except storms or high winds for safety. We will reschedule if needed.' },
  { q: 'How do I get a quote?', a: 'You can complete our online form and upload photos — we respond quickly.' },
  { q: 'Are you insured?', a: 'Yes — fully insured for all services including drone operations.' },
  { q: 'How do I prepare before you arrive?', a: 'Just clear vehicles and garden furniture where possible. We handle the rest.' },
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
        <p className="text-gray-300 mt-3">Browse common questions or search instantly across 60+ answers.</p>

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
