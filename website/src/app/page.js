import AccountGallery from './components/accountGallery'
import Profile from './components/profile'

export default function Home() {
  return (
    <main>
      <h2 className=" font-mono text-4xl  flex-shrink text-center">Hello and welcome to my website</h2><br/>
      <Profile/>
      <AccountGallery/>
    </main>
  )
}
