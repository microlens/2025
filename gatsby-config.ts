import type { GatsbyConfig, PluginRef } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: `/2025`,
  siteMetadata: {
    siteTitle: `2025`,
    siteTitleAlt: `2025`,
    siteHeadline: `2025`,
    siteUrl: `https://microlens.github.io/2025`,
    siteDescription: '2025 is here.',
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2025`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2025`,
        short_name: `2025`,
        description: `2025 is here.`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
