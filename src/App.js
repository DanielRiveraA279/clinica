import Header from "./components/header";
import Intro from "./components/intro";
import Service from "./components/service";
import About from "./components/about";
import PackageVideo from "./components/packageVideo";
import Gallery from "./components/gallery";
import Team from "./components/team";
import Princing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <>
      {/* header */}
        <Header />

      {/*intro*/}
        <Intro />

      {/*service section*/}
        <Service />

      {/*about*/}
        <About />

      {/*package section*/}
        <PackageVideo />

      {/*gallery section*/}
        <Gallery />

      {/*our team section*/}
        <Team />

      {/*our pricing*/}
        {/* <Princing /> */}

      {/*Testimonials section*/}
        <Testimonials />

      {/*contact section*/}
        <Contact />

      {/*footer section*/}
        <Footer />

    </>

  );
}

export default App;
