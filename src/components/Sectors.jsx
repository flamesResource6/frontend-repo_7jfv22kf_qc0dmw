const sectors = [
  'Hotels','Offices','High-Rise Buildings','Retail Parks','Industrial Sites','Heritage Buildings','Public Sector','Solar Farms'
]

export default function Sectors(){
  return (
    <section className="bg-[#2F343A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sectors We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s)=> (
            <div key={s} className="bg-[#30363D] rounded-xl p-6 ring-1 ring-white/10 text-white font-semibold">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
