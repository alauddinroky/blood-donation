import BecomeDonorButton from "./components/BecomeDonorButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LifeBlood - Donate Blood, Save Lives',
  description: 'Your one donation can save up to three lives. Join us to make a difference.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
        <BecomeDonorButton />
        <Footer/>
        </body>
    </html>
  );
}