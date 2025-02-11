import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as WavesBottom } from '../images/waves-bottom.svg'
import { ReactComponent as Instagram } from '../icons/instagram.svg'
import { ReactComponent as Step } from '../icons/StepLogo.svg'

const Footer: React.FC = () => {
  return (
    <>
      <WavesBottom className="text-roman-coffee-600" />
      <footer className="relative bottom-0 right-0 left-0">
        <nav className="grid grid-cols-default md:gap-x-16 max-sm:gap-y-2 pb-12 text-md bg-roman-coffee-600 text-right text-white">
          <div className="col-start-2 col-end-4 flex justify-between">
            <div className="flex flex-wrap gap-x-8">
              <a
                href="https://www.instagram.com/waldschnecken/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram-Account der Waldschnecken"
                className="p-2 hover:opacity-50 transition-opacity duration-300"
              >
                <Instagram className="h-10" />
              </a>
              <a
                href="https://step.kreis-steinfurt.de/de/einrichtungen/liste/ergebnisse/1055/details?p=1&amt=Ladbergen"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="STEP - Das Anmeldeportal für Kindertageseinrichtungen im Kreis Steinfurt"
                className="p-2 hover:opacity-50 transition-opacity duration-300"
              >
                <Step className="h-10" />
              </a>
            </div>
            <div className="flex flex-col">
              <Link
                to="/imprint"
                className="mb-2 text-lg hover:opacity-50 transition-opacity duration-300"
              >
                Impressum
              </Link>
              <Link
                to="/privacypolicy"
                className="mb-8 text-lg hover:opacity-50 transition-opacity duration-300"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="col-start-2 col-end-4">
            <a
              href="https://sascha-nabrotzky.github.io"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-50 transition-opacity duration-300 underline"
            >
              Webdesign
            </a>{' '}
            &{' '}
            <a
              href="https://sascha-nabrotzky.de"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-50 transition-opacity duration-300 underline"
            >
              Illustration
            </a>{' '}
            | <span className="whitespace-nowrap">Sascha Nabrotzky</span>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer
