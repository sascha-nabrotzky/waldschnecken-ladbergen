import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props extends React.PropsWithChildren {
  pagetitle?: string
  subtitle?: string
}

const MainContent: React.FC<Props> = ({ children, pagetitle, subtitle }) => {
  return (
    <div className="grid grid-rows-default min-h-[100dvh] text-mine-shaft-950">
      <Header />
      <main className="grid grid-cols-default md:gap-x-16 gap-y-16 md:gap-y-20 my-6 md:-mt-40">
        {pagetitle != null && (
          <div className="col-start-2 col-end-4 md:col-end-3">
            <h1 className="font-serif text-3xl lg:text-5xl text-center md:text-left break-word">
              {pagetitle}
            </h1>
            {subtitle != null && (
              <h2 className="mt-6 text-xl lg:text-3xl text-center md:text-left break-word">
                {subtitle}
              </h2>
            )}
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainContent
