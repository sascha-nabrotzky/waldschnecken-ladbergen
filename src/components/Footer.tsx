import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as WavesRight } from '../images/waves-right.svg'
import { ReactComponent as Instagram } from '../icons/instagram.svg'

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 right-0 left-0 ">
      <WavesRight className="text-roman-coffee-600" />
      <div className="flex justify-between px-10 pb-12 bg-roman-coffee-600 text-right text-white">
        <a
          href="https://www.instagram.com/waldschnecken/"
          target="_blank"
          rel="noreferrer noopener"
          className="p-2"
        >
          <Instagram className="h-10" />
        </a>
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
            <span className="whitespace-nowrap">Webdesign & Illustration</span>{' '}
            | <span className="whitespace-nowrap">Sascha Nabrotzky</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
