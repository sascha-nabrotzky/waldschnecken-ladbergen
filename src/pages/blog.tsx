import * as React from 'react'
import { useStaticQuery, type HeadFC, type PageProps, graphql } from 'gatsby'
import MainLayout from '../components/MainLayout'

const IndexPage: React.FC<PageProps> = () => {
  // const data = useStaticQuery(graphql`
  //   query blogpost {
  //     contentfulBlogpost {
  //       title
  //     }
  //     contentfulBlogpostNormalTextTextNode {
  //       normalText
  //     }
  //   }
  // `)

  const allData = useStaticQuery(graphql`
    query AllBlogposts {
      allContentfulBlogpost {
        nodes {
          title
        }
      }
      allContentfulBlogpostNormalTextTextNode {
        nodes {
          normalText
        }
      }
    }
  `)

  console.log(allData.allContentfulBlogpost.nodes[0].title)

  return (
    <>
      <MainLayout pagetitle="Blog">
        {/* <h2 className="mt-12 mb-6 text-xl font-bold">
          {data.contentfulBlogpost.title}
        </h2>
        <p>{data.contentfulBlogpostNormalTextTextNode.normalText}</p> */}

        {}
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
