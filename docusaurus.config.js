const config = {
  title: 'MarketplaceIQ Documentation',
  tagline: 'AI-Powered Product Content Enrichment',
  url: 'https://marketplaceiq-docs.vercel.app', // This will be updated automatically by Vercel
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'marketplaceiq',
  projectName: 'documentation',

  themes: [
    // Add local search
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Makes docs the root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change any paths you want to your blog posts
          blogTitle: 'MarketplaceIQ Blog',
          blogDescription: 'Updates and news about MarketplaceIQ',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Add search configuration
    navbar: {
      title: 'Guides', 
      logo: {
        alt: 'MarketplaceIQ Logo',
        src: 'img/logo.svg', // For light theme
        height: 32, // Adjust this value to resize your logo
      },
   
      items: [
    
        {
          to: '/api',  // This points to our new API page
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MarketplaceIQ.`,
    },
  },
};

module.exports = config;