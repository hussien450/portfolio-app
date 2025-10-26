'use client';
import Contact from '../components/contact';
import About from '../components/about';
import Header from '../components/Header';
import Navbar from '../components/navbar/Navbar';
import Services from '../components/services';
import Work from '../components/work';
import FadeIn from '../components/FadeIn';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
      <Services />
      </FadeIn>
      <FadeIn>
      <Work />
      </FadeIn>
      <FadeIn>
      <Contact />
      </FadeIn>
      <Footer />
    </>
  );
}
