const steps = [
  { num: 1, title: 'Survey & Plan', text: 'We assess the site, agree scope, and plan safe flight operations.' },
  { num: 2, title: 'Set Up & Safety', text: 'Establish cordons, safety checks, and environmental protection.' },
  { num: 3, title: 'Drone Cleaning', text: 'Precision cleaning using commercial-grade drones and solutions.' },
  { num: 4, title: 'Quality Check', text: 'Final inspection, photos, and handover for sign-off.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">How Drone Cleaning Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#30363D] rounded-xl p-6 ring-1 ring-white/10">
              <div className="w-10 h-10 rounded bg-[#1F6FEB] text-white font-bold grid place-items-center">{s.num}</div>
              <h3 className="text-white font-semibold mt-4">{s.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
