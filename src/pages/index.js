import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../Components/header'
import HeroSection from "../../Components/heroSection";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
 <Header></Header>
 <HeroSection></HeroSection>
 
 
 </>
  )
}
