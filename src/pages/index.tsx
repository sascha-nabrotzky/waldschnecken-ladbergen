import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Logo from '../images/Logo_Waldschnecken.webp'
import MainLayout from '../components/MainLayout'

const IndexPage: React.FC<PageProps> = () => {
  const [currentMail, setMail] = React.useState('')
  const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de'

  const addMail = (): void => {
    setMail(mailto)
  }

  return (
    <MainLayout>
      <p className="mb-12 text-center text-mine-shaft-500">
        ## Website im Aufbau ##
      </p>

      <img
        src={Logo}
        alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
        className="mx-auto"
      />
      <h1 className="mt-4 mb-12 text-xl text-center text-roman-coffee-600">
        Großtagespflege &bdquo;Waldschnecken&ldquo;
      </h1>
      <h2 className="text-3xl font-serif text-center">
        Kindertagespflege mit dem Herzen in der Natur
      </h2>
      <p className="mx-auto mt-12 text-xl text-center max-w-xl">
        Liebevolle und naturbezogene Betreuung Ihrer Kinder in Ladbergen durch
        Tatjana Nabrotzky und Oksana Welk
      </p>
      <address className="text-center mt-12 text-xl not-italic">
        <p className="mb-4">
          Auf Stieneckers 52,
          <br />
          49549 Ladbergen
          <br />
        </p>

        <a
          href={'tel: +49 170 2802494'}
          className="block mb-4"
        >
          Tatjana Nabrotzky:
          <br />
          <strong>0170 2802494</strong>
        </a>
        <a
          href={'tel: +49 162 1366853'}
          className="block mb-8"
        >
          Oksana Welk:
          <br />
          <strong>0162 1366853</strong>
        </a>
        <a
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          onClick={addMail}
          className="block font-bold text-xl mb-4"
        >
          E-Mail schreiben
        </a>
      </address>
    </MainLayout>
  )
}

export default IndexPage

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
  <>
    <html lang="de" />
    <title>Waldschnecken | Großtagespflege in Ladbergen</title>
    <meta
      name="description"
      content="Liebevolle und naturbezogene Betreuung Ihrer Kinder in
                    Ladbergen durch Tatjana Nabrotzky und Oksana Welk"
    />
  </>
)
