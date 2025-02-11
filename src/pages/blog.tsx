/* eslint-disable @typescript-eslint/indent */
import * as React from 'react'
import { useStaticQuery, type HeadFC, type PageProps, graphql } from 'gatsby'
import MainLayout from '../components/MainLayout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
  const allData = useStaticQuery(graphql`
    query AllBlogposts {
      allContentfulBlogpost {
        nodes {
          id
          title
          normalText {
            normalText
          }
          image {
            title
            url
            publicUrl
          }
        }
      }
    }
  `)

  return (
    <>
      <MainLayout
        pagetitle="Unser Alltagsleben"
        subtitle="Seht was Eure Kinder alles erleben oder wir euch sonst noch mitteilen wollen."
      >
        <StaticImage
          src="../images/Sei_frech.webp"
          alt="Illustration eines Eichhörnchens von Sascha Nabrotzky"
          className="col-start-2 md:col-start-3 col-end-4 mx-auto aspect-square max-w-md rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
          placeholder="blurred"
        />
        {allData.allContentfulBlogpost.nodes.map(
          (post: {
            [image: string]: any
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined
            normalText: {
              normalText:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined
            }
            id: string
          }) => {
            return (
              <>
                <div
                  className="col-start-2 col-end-4 grid grid-cols-sub gap-y-6"
                  key={post.id}
                >
                  <h2 className="col-start-1 col-end-3 md:col-end-3 text-2xl font-bold">
                    {post.title}
                  </h2>
                  <p className="col-start-1 col-end-3 md:col-end-2 text-xl">
                    {post.normalText.normalText}
                  </p>
                  <img
                    src={post.image.url}
                    alt={post.image.title}
                    className="col-start-1 md:col-start-2 col-end-3"
                  />
                </div>
                <StaticImage
                  src="../images/Eichel.webp"
                  alt="Illustration Eichel von Sascha Nabrotzky"
                  className="col-start-2 col-end-4 mx-auto"
                  placeholder="blurred"
                />
              </>
            )
          }
        )}
      </MainLayout>
    </>
  )
}

export default IndexPage

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
  <>
    <html lang="de" />
    <title>Blog/News | Waldschnecken</title>
    <meta
      name="description"
      content="Bekommt einen kleinen Einblick in unseren täglichen Erlebnissen"
    />
  </>
)
