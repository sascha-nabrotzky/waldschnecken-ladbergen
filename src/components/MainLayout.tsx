import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props extends React.PropsWithChildren {
  pagetitle?: string
  subtitle?: string
  isHerotitle?: boolean
}

const MainContent: React.FC<Props> = ({
  children,
  pagetitle,
  subtitle,
  isHerotitle
}) => {
  return (
    <div className="grid grid-rows-default min-h-[100dvh] text-mine-shaft-950">
      <Header />
      <main
        className="grid grid-cols-default md:gap-x-16 gap-y-16 md:gap-y-20 my-6 lg:-mt-10 xl:-mt-40 xl:-mb-20 z-10"
        role="main"
      >
        {pagetitle != null && (
          <div
            className={`col-start-2 col-end-4 text-center ${
              isHerotitle === true
                ? 'md:col-end-4'
                : 'md:col-end-3 md:text-left'
            }`}
            aria-label="heading"
          >
            <h1
              className={
                'md:mt-12 font-serif text-3xl md:text-5xl/snug break-word leading-4.5'
              }
            >
              {pagetitle}
            </h1>
            {subtitle != null && (
              <h2 className={'mt-6 text-xl lg:text-2xl break-word'}>
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
