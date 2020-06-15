const narativeMdxConfig = require("@narative/gatsby-theme-novela/gatsby-config.js")(
  {}
).plugins.find((i) => i.resolve == "gatsby-plugin-mdx");

module.exports = {
  siteMetadata: {
    title: `MIT CDDL Blog`,
    name: `MIT Civic Data Design Lab`,
    siteUrl: `https://blog.civicdatadesignlab.mit.edu`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `We are a group of multidisciplinary researchers enthusiastic about the intersection of data, design and the city.`,
      maxWidth: 730,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/civic-data-design-lab`,
      },
    ],
  },
  plugins: [
    `gatsby-transformer-yaml`,
    /*{
    resolve: `gatsby-plugin-mdx`,
    options: {
      ...narativeMdxConfig.options,
      gatsbyRemarkPlugins: [
           ...narativeMdxConfig.options.gatsbyRemarkPlugins,
           {
             resolve: require.resolve(`${__dirname}/plugins/gatsby-remark-oembed-innocent`),
             options: {
               // usePrefix defaults to false
               // usePrefix: true is the same as ["oembed"]
               usePrefix: false,
               providers: {
                 include: [
           'Twitter',
           'Instagram',
         ],
                 // Important to exclude providers
                 // that adds js to the page.
                 // If you do not need them.
                 exclude: ["Reddit"]
               }
             }
           }
      ],
      plugins: [
        {
          resolve: require.resolve(`${__dirname}/plugins/gatsby-remark-oembed-innocent`),
          options: {
            // usePrefix defaults to false
            // usePrefix: true is the same as ["oembed"]
            usePrefix: false,
            providers: {
              include: [
        'Twitter',
        'Instagram',
      ],
              // Important to exclude providers
              // that adds js to the page.
              // If you do not need them.
              exclude: ["Reddit"]
            }
          }
        }
      ]
    },
  },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: require.resolve(`${__dirname}/plugins/gatsby-remark-oembed-innocent`),
          options: {
            // usePrefix defaults to false
            // usePrefix: true is the same as ["oembed"]
            usePrefix: false,
            providers: {
              include: [
        'Twitter',
        'Instagram',
      ],
              // Important to exclude providers
              // that adds js to the page.
              // If you do not need them.
              exclude: ["Reddit"]
            }
          }
        },
      ]
    }
  },*/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@weknow/gatsby-remark-twitter`,
            options: { debug: true },
          },
        ],
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MIT CDDL Blog`,
        short_name: `MIT CDDL Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/fv_logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
