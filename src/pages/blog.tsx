/* eslint-disable @typescript-eslint/indent */
import * as React from 'react'
import { useStaticQuery, type HeadFC, type PageProps, graphql } from 'gatsby'
import MainLayout from '../components/MainLayout'

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
      <MainLayout pagetitle="Blog">
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
              <div
                className="col-start-2 col-end-4"
                key={post.id}
              >
                <h2 className="mt-12 mb-6 text-xl font-bold">{post.title}</h2>
                <p>{post.normalText.normalText}</p>
                <img
                  src={post.image.url}
                  alt={post.image.title}
                />
              </div>
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
    <title>Blog | Waldschnecken</title>
    <meta
      name="description"
      content="Bekommt einen kleinen Einblick in unseren täglichen Erlebnissen"
    />
  </>
)
