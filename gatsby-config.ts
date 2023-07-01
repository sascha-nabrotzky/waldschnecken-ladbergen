/* eslint-disable @typescript-eslint/no-var-requires */
import type { GatsbyConfig } from "gatsby";

// require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
// });

const config: GatsbyConfig = {
    siteMetadata: {
        title: `waldschnecken-ladbergen`,
        siteUrl: `https://www.waldschnecken-ladbergen.de`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        // {
            // resolve: 'gatsby-source-contentful',
            // options: {
                // Artikel muss auf Contentful angelegt sein
                // "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
                // "spaceId": process.env.CONTENTFUL_API_KEY,
                // contentTypeFilter: contentType => !contentType.sys.id.startsWith('page'),
            // },
        // }, 
        "gatsby-plugin-image", 
        "gatsby-plugin-sharp", 
        "gatsby-transformer-sharp", 
        "gatsby-plugin-postcss", 
        "gatsby-plugin-sitemap", 
        "gatsby-plugin-mdx", 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }]
};

export default config;
