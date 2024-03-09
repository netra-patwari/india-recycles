import { Inter } from 'next/font/google'
import '../styles/style.scss';
import Logo from '../img/india_recycles.png'
import Link from "next/link";

export const metadata = {
  
  title: 'India Recycles',
  description: '',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {children}</body>
    </html>
  )
}
