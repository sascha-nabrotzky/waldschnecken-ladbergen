import * as React from 'react'
import TatanaInfo from './TatjanaInfo'
import OksanaInfo from './OksanaInfo'
import { ReactComponent as EmailIcon } from '../icons/email.svg'

const Address: React.FC = () => {
  const [currentMail, setMail] = React.useState('')
  const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de'

  const addMail = (): void => {
    setMail(mailto)
  }

  return (
    <>
      <TatanaInfo />
      <OksanaInfo />
      <address className="col-start-2 col-end-4 text-xl not-italic">
        <h3 className="mb-2 font-bold text-center">
          Großtagespflege &bdquo;Waldschnecken&ldquo;
        </h3>
        <p className="text-center">
          Auf Stieneckers 52,
          <br />
          49549 Ladbergen
          <br />
        </p>
      </address>
      <div className="col-start-2 col-end-4 text-xl text-center">
        <a
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          onClick={addMail}
          className="hover:opacity-50 transition-opacity duration-300"
        >
          <EmailIcon className="h-8 mx-auto mb-2" />
          E-Mail schreiben
        </a>
      </div>
    </>
  )
}

export default Address
