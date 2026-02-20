import { Header, Hero, Features, Moreinformation, Testimonials, Forms} from "./components"

function App() {

  return (
    <main className=" w-[375px] m-auto">

      <section className="bg-Navy-850 p-6 h-[420px] relative">
        <Header />
        <img className="relative z-10 mt-12" src="/images/illustration-intro.png" alt="intro illustration" />

        <img className="absolute bottom-0 left-0" src="/images/bg-curvy-mobile.svg" alt="bg curvy mobile" />
      </section>

      <section className="bg-Navy-900 p-6 pb-[300px]">
        <Hero />
        <Features />
        <Moreinformation />
        <Testimonials />
      </section>

      <section className="bg-Navy-950 relative">
        <Forms />
      </section>

    </main>
  )
}

export default App