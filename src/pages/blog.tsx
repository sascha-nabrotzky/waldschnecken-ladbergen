import * as React from 'react'
import MainLayout from '../components/MainLayout'
import Logo from '../images/Sei_frech.webp'

const Blog: React.FC = () => {
  // TODO: Contentful-Integration entfernen oder ersetzen
  return (
    <>
      <MainLayout
        pagetitle="Unser Alltagsleben"
        subtitle="Seht was Eure Kinder alles erleben oder wir euch sonst noch mitteilen wollen."
      >
        <img
          src={Logo}
          alt="Illustration eines Eichhörnchens von Sascha Nabrotzky"
          className="col-start-2 md:col-start-3 col-end-4 mx-auto aspect-square max-w-md rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
        />
        <div className="col-start-2 col-end-4 text-center text-xl mt-8">
          <p>
            Hier könnten Blogbeiträge stehen. Die Contentful-Anbindung wurde
            entfernt.
          </p>
        </div>
      </MainLayout>
    </>
  )
}

export default Blog
