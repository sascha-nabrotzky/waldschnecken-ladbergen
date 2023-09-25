import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as Waves } from '../images/waves.svg'

const Header: React.FC = () => {
  return (
    <>
      <div className="sm:hidden bg-roman-coffee-400">
        <Logo className="h-24 mx-auto text-white" />
      </div>

      <header className="sticky top-0 flex flex-col justify-center z-10">
        <nav className="flex items-center justify-center w-full gap-4 py-2 text-xl bg-roman-coffee-400 text-white shadow-xl">
          <Link to="/">Home</Link>
          <Link to="/concept">Konzept</Link>
          <Logo className="max-sm:hidden h-24 text-white mx-8" />
          <Link to="/rooms">Räume</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <Waves className="text-roman-coffee-400" />
    </>
  )
}

export default Header
