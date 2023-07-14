import AccountGallery from './components/accountGallery'
import NavList from './components/navList'
import Profile from './components/profile'

export default function Home() {
  return (
    <main>
      <NavList/>
      <Profile/>
      <AccountGallery/>
    </main>
  )
}
