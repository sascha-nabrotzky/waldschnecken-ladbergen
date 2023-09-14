import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props extends React.PropsWithChildren {
  pagetitle?: string
  subtitle?: string
  imagesrc?: string
  alttext?: string
}

const MainContent: React.FC<Props> = ({
  children,
  pagetitle,
  subtitle,
  imagesrc,
  alttext
}) => {
  return (
    <div className="grid grid-rows-default min-h-[100dvh] text-mine-shaft-950">
      <Header />
      <main className="grid grid-cols-default md:gap-x-16 gap-y-16 md:gap-y-20 my-6">
        {pagetitle != null && (
          <div className="col-start-2 col-end-4">
            <h1 className="font-serif text-3xl lg:text-5xl text-center break-word hyphens-auto">
              {pagetitle}
            </h1>
            {subtitle != null && (
              <h2 className="mt-6 text-2xl lg:text-4xl text-center break-word hyphens-auto">
                {subtitle}
              </h2>
            )}
          </div>
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
