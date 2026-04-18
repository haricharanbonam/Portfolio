import { MetadataRoute } from 'next';
import { allBlogs } from './blogs/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = allBlogs.map((blog) => ({
    url: `https://haricharanbonam.tech/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://haricharanbonam.tech',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://haricharanbonam.tech/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogEntries,
  ];
}