import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from './data';
import BlogCard from './components/BlogCard';

export const metadata: Metadata = {
  title: 'Blogs | Hari Charan',
  description:
    'Dev notes, debugging stories, and workflow tricks. No fluff — just the stuff that actually came up while building real things.',
  icons: {
    icon: 'https://haricharanbonam.tech/pic.png',
  },
};

export default function BlogsPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0a0a0f',
        color: '#e8e8f0',
        fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
        padding: '0 0 80px',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid #1e1e2e',
          padding: '80px 48px 40px',
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        <p style={{ color: '#6366f1', fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>
          WRITING
        </p>
        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.15,
            margin: '0 0 16px',
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        >
          Things I figured out{' '}
          <span style={{ color: '#6366f1' }}>the hard way.</span>
        </h1>
        <p style={{ color: '#888', fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
          Dev notes, debugging stories, and workflow tricks. No fluff — just the stuff that
          actually came up while building real things.
        </p>
      </div>

      {/* Blog list */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 48px 0' }}>
        {allBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </main>
  );
}