//system import 
import Head from 'next/head';
//internal import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyDonate from './components/WhyDonate';
import UpcomingCamps from './components/UpcomingCamps';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#111111] text-[#FFFFFF] min-h-screen">
      <Head>
        <Link rel='icon' href='./favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <div className='text-red'>Hello</div>
        <Hero />
        <WhyDonate />
        <UpcomingCamps />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}