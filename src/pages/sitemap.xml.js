import React from 'react';
import { getDatabase } from '@lib/notion';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://girfansyah.site</loc>
    </url>
    <url>
      <loc>https://girfansyah.site/projetcs</loc>
    </url>
    <url>
      <loc>https://girfansyah.site/blog</loc>
    </url>
    <url>
      <loc>https://girfansyah.site/snippets</loc>
    </url>
    <url>
      <loc>https://girfansyah.site/about</loc>
    </url>
    <url>
      <loc>https://girfansyah.site/social</loc>
    </url>

    ${posts
      .map(({ slug, type }) => {
        return type === 'Article'
          ? `<url>
              <loc>${`https://girfansyah.site/blog/${slug}`}</loc>
          </url>`
          : (type = 'Projects'
              ? `<url>
            <loc>${`https://girfansyah.site/projects/${slug}`}</loc>
          </url>`
              : type === 'Snippets'
              ? `<url>
              <loc>${`https://girfansyah.site/snippets/${slug}`}</loc>
            </url>`
              : `<url>
            <loc>https://girfansyah.site</loc>
          </url>`);
      })
      .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await getDatabase();
    const posts = request
      .filter(({ status }) => status === 'Published')
      .filter(({ slug }) => slug != undefined)
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;
