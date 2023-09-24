import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as WavesRight } from '../images/waves-right.svg'
import { ReactComponent as Instagram } from '../icons/instagram.svg'

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 right-0 left-0">
      <WavesRight className="text-roman-coffee-400" />
      <nav className="grid grid-cols-default md:gap-x-16 px-10 pb-12 text-md bg-roman-coffee-400 text-right text-white">
        <div className="col-start-2 col-end-4 flex justify-between">
          <a
            href="https://www.instagram.com/waldschnecken/"
            target="_blank"
            rel="noreferrer noopener"
            className="p-2"
          >
            <Instagram className="h-10" />
          </a>
          <div className="flex flex-col">
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
          </div>
        </div>
        <div className="col-start-2 col-end-4 opacity-60">
          <a
            href="https://sascha-nabrotzky.github.io"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Webdesign
          </a>{' '}
          &{' '}
          <a
            href="https://www.instagram.com/sascha.illustrates"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            Illustration
          </a>{' '}
          | <span className="whitespace-nowrap">Sascha Nabrotzky</span>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
