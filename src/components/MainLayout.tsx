import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props extends React.PropsWithChildren {
  pagetitle?: string
  imagesrc?: string
  alttext?: string
}

const MainContent: React.FC<Props> = ({
  children,
  pagetitle,
  imagesrc,
  alttext
}) => {
  return (
    <div className="grid grid-rows-[repeat(3,_min-content)_1fr_min-content] min-h-[100dvh] text-mine-shaft-950">
      <Header />
      <main className="p-8 w-full">
        {pagetitle != null && (
          <h1 className="mt-4 mb-12 font-serif text-3xl lg:text-5xl text-center break-word hyphens-auto">
            {pagetitle}
          </h1>
        )}
        {imagesrc != null && (
          <img
            src={imagesrc}
            alt={alttext}
          />
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainContent
