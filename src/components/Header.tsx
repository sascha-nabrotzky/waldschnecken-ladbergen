import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as Waves } from '../images/waves.svg'

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-roman-coffee-600">
        <Logo className="h-24 mx-auto text-white" />
      </div>

      <header className="sticky top-0 flex flex-col items-center justify-center">
        <nav className="flex justify-center w-full gap-4 py-2 text-xl bg-roman-coffee-600 text-white">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/rooms">Räume</Link>
          <Link to="/concept">Konzept</Link>
        </nav>
      </header>
      <Waves className="text-roman-coffee-600" />
    </>
  )
}

export default Header
