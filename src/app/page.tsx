import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0B]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
