import { Header, Footer } from '@/components/layout'
import { Hero, About, Work, Media, Contact } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
