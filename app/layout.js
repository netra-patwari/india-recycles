import { Inter } from 'next/font/google'
import '../styles/style.scss';

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
