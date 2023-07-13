import Image from 'next/image'
import AccountGallery from './components/accountGallery'
import Profile from './components/profile'
import NavList from './components/navList'

export default function Home() {
  return (
    <main className="">
      <NavList/>
      <Profile/>
      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/github-mark.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <AccountGallery/>
    </main>
  )
}
