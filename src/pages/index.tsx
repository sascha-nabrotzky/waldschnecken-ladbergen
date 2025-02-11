import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MainLayout from '../components/MainLayout'
import Contact from '../components/Conact'
import Advantages from '../components/Advantages'
import Testimonials from '../components/Testimonials'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainLayout
        pagetitle="Kindertagespflege mit dem Herzen in der Natur"
        subtitle="Liebevolle und naturbezogene Betreuung Ihrer Kinder in
        Ladbergen durch die Tagesmütter Tatjana Nabrotzky und Oksana Welk."
        isHerotitle
      >
        <StaticImage
          src="../images/Logo_Waldschnecken.webp"
          alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
          className="col-start-2 col-end-4 mx-auto"
          placeholder="blurred"
        />

        <Testimonials />
        <Advantages />
        <Contact />
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
