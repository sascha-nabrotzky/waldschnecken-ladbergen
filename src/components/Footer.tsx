import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as WavesRight } from '../images/waves-right.svg'

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 right-0 left-0 ">
      <WavesRight className="text-roman-coffee-600" />
      <div className="pr-12 pb-12 bg-roman-coffee-600 text-right text-white">
        <nav className="flex flex-col text-md">
          <Link
            to="/imprint"
            className="mb-2"
          >
            Impressum
          </Link>
          <Link
            to="/privacypolicy"
            className="mb-8"
          >
            Datenschutz
          </Link>
          <a
            href="https://sascha-nabrotzky.github.io"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-50"
          >
            Webdesign & Illustration | Sascha Nabrotzky
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
