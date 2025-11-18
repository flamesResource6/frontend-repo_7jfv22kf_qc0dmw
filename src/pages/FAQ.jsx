import Navbar from '../components/Navbar'
import { useState } from 'react'

const groups = [
  { title: 'Drone cleaning', items: [
    {q: 'What surfaces can be cleaned with drones?', a: 'Add final answer copy here.'},
    {q: 'Is drone cleaning safe around the public?', a: 'Add final answer copy here.'},
  ]},
  { title: 'Traditional cleaning', items: [
    {q: 'Do you use pressure or soft washing?', a: 'Add final answer copy here.'},
  ]},
]

function Accordion({ title, items }) {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="bg-[#30363D] rounded-xl ring-1 ring-white/10 overflow-hidden">
      <button onClick={() => setOpenIndex(openIndex === -1 ? null : -1)} className="w-full text-left px-6 py-4 text-white font-semibold bg-white/5">{title}</button>
      <div className="divide-y divide-white/10">
        {items.map((item, idx) => (
          <div key={idx}>
            <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left px-6 py-4 text-white">
              {item.q}
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-300">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQ(){
  return (
    <div className="min-h-screen bg-[#2F343A] text-white">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="text-gray-300 mt-3">This page will contain your full 60+ question Mega FAQ, grouped into topics with collapsible accordions.</p>
        <div className="mt-8 space-y-6">
          {groups.map((g) => (
            <Accordion key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </section>
    </div>
  )
}
