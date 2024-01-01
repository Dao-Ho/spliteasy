import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
    <h1 className="text-green-500">
      Welcome to Split Easy
    </h1>
    </main>
  )
}
