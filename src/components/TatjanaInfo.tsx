import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ReactComponent as CloseIcon } from '../icons/close.svg'

const TatanaInfo: React.FC = () => {
  const modalRef1 = React.useRef<HTMLDialogElement>(null)

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

  return (
    <div className="col-start-2 col-end-4 md:col-start-2 md:col-end-3 flex flex-col justify-center items-center text-center">
      <div className="mb-4 bg-mine-shaft-200 w-36 md:w-48 aspect-square rounded-full overflow-hidden">
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
        <p className="mt-1 leading-5 border-t pt-2 text-mine-shaft-600">
          Staatl. geprüfte Erzieherin <br />
          und zertifizierte Tagesmutter
        </p>
      </a>
      <button
        onClick={openModal1}
        className="mt-4 pt-1.5 pb-2 px-4 text-xl text-white rounded-full bg-mine-shaft-600 leading-none hover:opacity-50 transition-opacity duration-300"
      >
        Details
      </button>

      <dialog
        ref={modalRef1}
        className="mx-4 sm:mx-auto pt-4 pb-8 max-w-xl text-left bg-white backdrop:bg-mine-shaft-950/70 rounded"
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal1}
            className="px-4 mb-2"
          >
            <CloseIcon className="h-6" />
          </button>
        </div>
        <div className="text-xl px-8">
          Hallo, ich heiße <strong>Tatjana Nabrotzky,</strong> ich bin 1981
          geboren, bin verheiratet und habe zwei eigene Kinder die 2004 und 2008
          geboren sind. Ich bin seit 2002 staatlich anerkannte Erzieherin und
          habe bis 2015 in verschiedenen Kindergärten gearbeitet. Seit Oktober
          2015 bin ich als selbstständige Tagesmutter tätig und seit 01.08.2023
          in der Großtagespflege Waldschnecken.
        </div>
      </dialog>
    </div>
  )
}

export default TatanaInfo
