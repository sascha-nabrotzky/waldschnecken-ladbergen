import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactComponent as CloseIcon } from '../icons/close.svg'

const OksanaInfo: React.FC = () => {
  const modalRef2 = React.useRef<HTMLDialogElement>(null)

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
    <div className="col-start-2 col-end-4 md:col-start-3 md:col-end-4 flex flex-col justify-center items-center">
      <div className="mb-4 bg-mine-shaft-200 w-36 md:w-48 aspect-square rounded-full overflow-hidden">
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
        className="mt-4 pt-1.5 pb-2 px-4 text-lg text-white rounded-full bg-mine-shaft-600 leading-none hover:opacity-50 transition-opacity duration-300"
      >
        Info
      </button>

      <dialog
        ref={modalRef2}
        className="mx-4 sm:mx-auto pt-4 pb-8 max-w-xl text-left bg-white backdrop:bg-mine-shaft-950/70 rounded"
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal2}
            className="px-4 mb-2"
          >
            <CloseIcon className="h-6" />
          </button>
        </div>
        <div className="text-xl px-8">
          Hallo, ich bin <strong>Oksana Welk,</strong> ich bin 1979 geboren, bin
          verheiratet und habe zwei eigene Kinder die 2004 und 2006 geboren
          sind. Ich habe den Beruf Einzelhandelskauffrau gelernt, und war
          mehrere Jahre in dem Beruf in vielen verschiedenen Bereichen tätig,
          bis ich mich entschieden habe mich beruflich umzuorientieren. Die
          Qualifizierung zur Tagesmutter habe ich im Dezember 2018
          abgeschlossen. Seit April 2018 bin ich als selbstständige Tagesmutter
          tätig und seit dem 01.08.2023 in der Großtagespflege Waldschnecken.
        </div>
      </dialog>
    </div>
  )
}

export default OksanaInfo
