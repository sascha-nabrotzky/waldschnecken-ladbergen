import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import MainLayout from '../components/MainLayout'
import Logo from '../images/Logo_Waldschnecken.webp'
import Address from '../components/Address'
import Advantages from '../components/Advantages'
import Testimonials from '../components/Testimonials'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainLayout>
        <h2 className="mb-6 text-3xl font-serif text-center">
          Kindertagespflege mit dem Herzen in der Natur
        </h2>
        <p className="mb-16 mx-auto text-xl text-center max-w-xl">
          Liebevolle, naturbezogene und professionelle Betreuung Deines Kindes.
        </p>
        <img
          src={Logo}
          alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
          className="mx-auto mb-20"
        />
        <Testimonials />
        <Advantages />
        <Address />
      </MainLayout>
    </>
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
                    Ladbergen durch die Tagesmütter Tatjana Nabrotzky und Oksana Welk"
    />
  </>
)
