import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { allBlogs } from './data';

export const metadata: Metadata = {
  title: 'Blogs | Hari Charan',
  description:
    'Dev notes, debugging stories, and workflow tricks. No fluff — just the stuff that actually came up while building real things.',
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
            <article
              style={{
                borderBottom: '1px solid #1e1e2e',
                padding: '36px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 24,
                alignItems: 'start',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <div>
                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        letterSpacing: 1.5,
                        color: '#6366f1',
                        background: '#6366f110',
                        border: '1px solid #6366f130',
                        borderRadius: 4,
                        padding: '2px 8px',
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: 'clamp(16px, 2.5vw, 22px)',
                    fontWeight: 600,
                    lineHeight: 1.35,
                    margin: '0 0 10px',
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {blog.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: '#888',
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: '0 0 16px',
                    maxWidth: 560,
                  }}
                >
                  {blog.description}
                </p>

                {/* Meta */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <span
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#555', fontSize: 12 }}
                  >
                    <Calendar size={12} /> {blog.date}
                  </span>
                  <span
                    style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#555', fontSize: 12 }}
                  >
                    <Clock size={12} /> {blog.readTime}
                  </span>
                </div>
              </div>

              {/* Emoji + Arrow */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
                <span style={{ fontSize: 36 }}>{blog.coverEmoji}</span>
                <ArrowUpRight size={18} color="#6366f1" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}