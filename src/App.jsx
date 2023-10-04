import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import BestSeller from "./sections/BestSeller"
import Official from "./sections/Official"
import Services from "./sections/Services"
import HotDeals from "./sections/HotDeals"
import CustomerReviews from "./sections/CustomerReviews"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"


function App() {
    return (
    <h1 className="relative">
      {/* Nav */}
      <Nav />
      {/* sections */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <BestSeller />
      </section>
      <section className="padding">
        <Official />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <HotDeals />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews /> 
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding=x padding-t pb-8">
        <Footer />
      </section>
    </h1>
  )
}

export default App
