const dotenv = require('dotenv');
const path = require(`path`);
dotenv.config({
  path: '.env',
});


module.exports = {
  siteMetadata: {
    title: `American Builds`,
    siteUrl: `https://americanbuilds.awbs.dev`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: 'gatsby-remark-related-posts',
      options: {
        doc_lang: 'en', // optional
        target_node: 'MarkdownRemark', // optional
        getMarkdown: (node) => node.rawMarkdownBody, // optional
        each_bow_size: 30, // optional
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: process.env.YOUR_HOTJAR_ID,
        sv: process.env.YOUR_HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90
      }
    },
    "gatsby-plugin-use-query-params",
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://americanbuilds.awbs.dev',
    //     sitemap: 'https://americanbuilds.awbs.dev/sitemap/sitemap-index.xml',
    //     policy: [{userAgent: '*', allow: '/'}]
    //   }
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //url: process.env.WPGRAPHQL_URL,
        "url": process.env.SERVER_QRAPHQL_URL,
        useACF: true,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1, // i cant remember if this was a fix or not, but i just killed all concurrency which the command line probably overrode
              maxFileSizeBytes: 100000000, // large images would die if they were larger than.. like, 5mb by default? undocumented and threw no warnings, just died.
            },
          },
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-apollo',
    //   options: {
    //     uri: process.env.SERVER_QRAPHQL_URL
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     defaults: {
    //       formats: [`auto`, `webp`],
    //       placeholder: `dominantColor`,
    //       quality: 100,
    //       breakpoints: [800, 1400, 1920],
    //       backgroundColor: `transparent`,
    //       tracedSVGOptions: {},
    //       blurredOptions: {},
    //       jpgOptions: {},
    //       pngOptions: {},
    //       webpOptions: {},
    //       avifOptions: {},
    //     }
    //   }
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "****"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `American Builds`,
        short_name: `American Builds`,
        start_url: '/',
        background_color: `#000000`,
        theme_color: `#F5F5F7`,
        display: `standalone`,
        icon: `src/assets/img/iconStat.png`,
        // icon: `src/assets/img/favicon.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //       },
    //       "gatsby-remark-lazy-load",
    //     ]
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/assets/img/"
    //   },
    //   __key: "images"
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //     //path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //     //path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns:  ['*.html'],
        },
      },
    },
  ]
};