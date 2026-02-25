import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Services from '@/components/Services';
import Scalability from '@/components/Scalability';
import About from '@/components/About';
import Team from '@/components/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <Scalability />
      <About />
      <Team />
    </>
  );
}