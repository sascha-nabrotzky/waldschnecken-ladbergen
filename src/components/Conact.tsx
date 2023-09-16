import * as React from 'react'
import TatanaInfo from './TatjanaInfo'
import OksanaInfo from './OksanaInfo'

const Address: React.FC = () => {
  const [currentMail, setMail] = React.useState('')
  const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de'

  const addMail = (): void => {
    setMail(mailto)
  }

  return (
    <>
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

      <TatanaInfo />
      <OksanaInfo />

      <a
        href={`${currentMail}`}
        target="_blank"
        rel="noreferrer"
        onClick={addMail}
        className="col-start-2 col-end-4 block font-bold text-xl text-center"
      >
        E-Mail schreiben
      </a>
    </>
  )
}

export default Address
