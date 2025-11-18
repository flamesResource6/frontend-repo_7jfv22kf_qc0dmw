import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceCards from '../components/ServiceCards'
import TraditionalGrid from '../components/TraditionalGrid'
import HowItWorks from '../components/HowItWorks'
import Sectors from '../components/Sectors'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactCTA from '../components/ContactCTA'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#2F343A]">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <TraditionalGrid />
        <HowItWorks />
        <Sectors />
        <WhyChooseUs />
        <ContactCTA />
      </main>
    </div>
  )
}
