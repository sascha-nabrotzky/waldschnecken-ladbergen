import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactComponent as CloseIcon } from '../icons/close.svg'

const Address: React.FC = () => {
  const [currentMail, setMail] = React.useState('')
  const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de'
  const modalRef1 = React.useRef<HTMLDialogElement>(null)
  const modalRef2 = React.useRef<HTMLDialogElement>(null)

  const addMail = (): void => {
    setMail(mailto)
  }

  const openModal1 = (): void => {
    if (modalRef1.current != null) {
      modalRef1.current.showModal()
    }
  }
  const closeModal1 = (): void => {
    if (modalRef1.current != null) {
      modalRef1.current.close()
    }
  }

  const openModal2 = (): void => {
    if (modalRef2.current != null) {
      modalRef2.current.showModal()
    }
  }
  const closeModal2 = (): void => {
    if (modalRef2.current != null) {
      modalRef2.current.close()
    }
  }

  return (
    <>
      <address className="col-start-2 col-end-4 not-italic">
        <h3 className="mb-2 font-bold text-2xl text-center">
          Großtagespflege &bdquo;Waldschnecken&ldquo;
        </h3>
        <p className="text-center text-xl ">
          Auf Stieneckers 52,
          <br />
          49549 Ladbergen
          <br />
        </p>
      </address>

      <div className="col-start-2 col-end-4 md:col-start-2 md:col-end-3 flex flex-col justify-center items-center text-center">
        <div className="mb-4 bg-mine-shaft-200 w-36 aspect-square rounded-full overflow-hidden">
          <StaticImage
            src="../images/Tatjana.webp"
            alt="Foto von Tagesmutter Tatjana Nabrotzky"
            placeholder="blurred"
          />
        </div>
        <a href={'tel: +49 170 2802494'}>
          <p className="text-xl">
            Tatjana Nabrotzky
            <br />
            <strong className="tracking-wider">0170 2802494</strong>
          </p>
          <p className="mt-1 leading-5 border-t pt-2 text-mine-shaft-400">
            Staatl. geprüfte Erzieherin <br />
            und zertifizierte Tagesmutter
          </p>
        </a>
        <button
          onClick={openModal1}
          className="mt-4 pt-1.5 pb-2 px-4 text-lg text-white rounded-full bg-mine-shaft-400 leading-none"
        >
          Info
        </button>

        <dialog
          ref={modalRef1}
          className="pt-4 pb-8 px-8 max-w-xl text-left bg-white backdrop:bg-mine-shaft-950/50 rounded"
        >
          <div className="flex justify-end">
            <button onClick={closeModal1}>
              <CloseIcon className="h-6" />
            </button>
          </div>
          <div>
            Hallo, ich heiße <strong>Tatjana Nabrotzky,</strong> ich bin 1981
            geboren, bin verheiratet und habe zwei eigene Kinder die 2004 und
            2008 geboren sind. Ich bin seit 2002 staatlich anerkannte Erzieherin
            und habe bis 2015 in verschiedenen Kindergärten gearbeitet. Seit
            Oktober 2015 bin ich als selbstständige Tagesmutter tätig und seit
            01.08.2023 in der Großtagespflege Waldschnecken.
          </div>
        </dialog>
      </div>

      <div className="col-start-2 col-end-4 md:col-start-3 md:col-end-4 flex flex-col justify-center items-center">
        <div className="mb-4 bg-mine-shaft-200 w-36 aspect-square rounded-full overflow-hidden">
          <StaticImage
            src="../images/Oksana.webp"
            alt="Foto von Tagesmutter Oksana Welk"
            placeholder="blurred"
          />
        </div>
        <a
          href={'tel: +49 162 1366853'}
          className="text-center"
        >
          <p className="text-xl">
            Oksana Welk
            <br />
            <strong className="tracking-wider">0162 1366853</strong>
          </p>
          <p className="mt-1 leading-5 border-t pt-2 text-mine-shaft-400">
            Zertifizierte Tagesmutter
          </p>
        </a>
        <button
          onClick={openModal2}
          className="mt-4 pt-1.5 pb-2 px-4 text-lg text-white rounded-full bg-mine-shaft-400 leading-none"
        >
          Info
        </button>

        <dialog
          ref={modalRef2}
          className="pt-4 pb-8 px-8 max-w-xl text-left bg-white backdrop:bg-mine-shaft-950/50 rounded"
        >
          <div className="flex justify-end">
            <button onClick={closeModal2}>
              <CloseIcon className="h-6" />
            </button>
          </div>
          <div>
            Hallo, ich bin <strong>Oksana Welk,</strong> ich bin 1979 geboren,
            bin verheiratet und habe zwei eigene Kinder die 2004 und 2006
            geboren sind. Ich habe den Beruf Einzelhandelskauffrau gelernt, und
            war mehrere Jahre in dem Beruf in vielen verschiedenen Bereichen
            tätig, bis ich mich entschieden habe mich beruflich umzuorientieren.
            Die Qualifizierung zur Tagesmutter habe ich im Dezember 2018
            abgeschlossen. Seit April 2018 bin ich als selbstständige
            Tagesmutter tätig und seit dem 01.08.2023 in der Großtagespflege
            Waldschnecken.
          </div>
        </dialog>
      </div>

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
