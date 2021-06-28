
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// })

require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: 'henriquers Blog',
    description: '...',
    author: 'Henrique Rocha Serrano',
    position: 'Software Engineer',
    siteUrl: 'https://henriquers.blog'
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/assets/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: { name: 'uploads' }
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 960, linkImagesToOriginal: false }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Henrique Rocha Serrano',
        short_name: 'henriquers',
        start_url: '/',
        background_color: ' #16202c',
        theme_color: ' #16202c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}'
          ]
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true
          }
        }
      }
    }
  ]
}
