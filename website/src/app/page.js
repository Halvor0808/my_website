import Image from 'next/image'
import Accounts from './components/accounts'
import Profile from './components/profile'

export default function Home() {
  return (
    <main className="">
      <Profile/>
      <div className="">
        <Image
          className=""
          src="/github-mark.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Accounts/>
    </main>
  )
}
