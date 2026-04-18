import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from '../data';
import DevTricksBlog from '../components/DevTricksBlog';
import type { ReactNode } from 'react';

// ─── Map each slug to its content component ────────────────────────────────
const blogContentMap: Record<string, ReactNode> = {
  'dev-tricks-that-save-hours': <DevTricksBlog />,
};

// ─── Static params: pre-render all known slugs at build time ───────────────
export function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog.slug }));
}

// ─── Per-blog SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return { title: 'Not Found' };
  }

  return {
    title: `${blog.title} | Hari Charan`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://haricharanbonam.tech/blogs/${blog.slug}`,
      type: 'article',
    },
  };
}

// ─── Page component (Server Component) ────────────────────────────────────
export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = blogContentMap[slug];

  if (!content) {
    notFound();
  }

  return <>{content}</>;
}
