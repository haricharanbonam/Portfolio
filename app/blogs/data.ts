export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  coverEmoji: string;
}

// ✏️ Add every new blog here — this is the only place you need to edit
export const allBlogs: BlogMeta[] = [
  {
    slug: 'dev-tricks-that-save-hours',
    title: 'Small things I wish someone told me before I wasted hours debugging nothing',
    description:
      'Port conflicts, silent 404s, missing logs, repetitive terminal commands — the embarrassingly simple fixes that make dev life actually bearable.',
    date: 'April 17, 2025',
    readTime: '6 min read',
    tags: ['Node.js', 'DX', 'Productivity'],
    coverEmoji: '🛠️',
  },
  // add more blogs here later
];
