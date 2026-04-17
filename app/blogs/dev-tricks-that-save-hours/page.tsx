'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

// ─── Reusable components ───────────────────────────────────────────────────

function Code({
  children,
  lang = 'js',
}: {
  children: string;
  lang?: string;
}) {
  return (
    <div style={{ margin: '24px 0', borderRadius: 10, overflow: 'hidden', border: '1px solid #1e1e2e' }}>
      <div
        style={{
          background: '#12121a',
          padding: '8px 16px',
          fontSize: 11,
          color: '#555',
          letterSpacing: 1.5,
          borderBottom: '1px solid #1e1e2e',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {lang.toUpperCase()}
      </div>
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '20px 24px',
          background: '#0d0d14',
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

// Tab switcher for OS-specific commands
function TabCode({ tabs }: { tabs: { label: string; lang: string; code: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ margin: '24px 0', borderRadius: 10, overflow: 'hidden', border: '1px solid #1e1e2e' }}>
      <div
        style={{
          background: '#12121a',
          display: 'flex',
          borderBottom: '1px solid #1e1e2e',
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              padding: '8px 18px',
              fontSize: 11,
              letterSpacing: 1.5,
              fontFamily: "'IBM Plex Mono', monospace",
              background: 'none',
              border: 'none',
              borderBottom: active === i ? '2px solid #6366f1' : '2px solid transparent',
              color: active === i ? '#e8e8f0' : '#555',
              cursor: 'pointer',
              transition: 'color 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <SyntaxHighlighter
        language={tabs[active].lang}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '20px 24px',
          background: '#0d0d14',
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {tabs[active].code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 16, lineHeight: 1.85, color: '#c8c8d8', margin: '0 0 20px' }}>
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: '#e8e8f0',
        margin: '52px 0 16px',
        fontFamily: "'IBM Plex Sans', sans-serif",
        borderLeft: '3px solid #6366f1',
        paddingLeft: 16,
      }}
    >
      {children}
    </h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#6366f110',
        border: '1px solid #6366f130',
        borderLeft: '3px solid #6366f1',
        borderRadius: 8,
        padding: '14px 20px',
        margin: '20px 0',
        fontSize: 14,
        color: '#aaa',
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

// ─── Blog content ──────────────────────────────────────────────────────────

export default function BlogPost() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0a0a0f',
        color: '#e8e8f0',
        fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif",
        padding: '0 0 100px',
      }}
    >
      {/* Back link */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 32px 0' }}>
        <Link
          href="/blogs"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: '#555',
            fontSize: 13,
            textDecoration: 'none',
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: 1,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#6366f1')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#555')}
        >
          <ArrowLeft size={14} /> BACK TO BLOGS
        </Link>
      </div>

      {/* Header */}
      <header style={{ maxWidth: 720, margin: '0 auto', padding: '40px 32px 48px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {['Node.js', 'DX', 'Productivity'].map((tag) => (
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

        <h1
          style={{
            fontSize: 'clamp(24px, 4vw, 38px)',
            fontWeight: 700,
            lineHeight: 1.25,
            margin: '0 0 20px',
          }}
        >
          Small things I wish someone told me before I wasted hours debugging nothing
        </h1>

        <div style={{ display: 'flex', gap: 20, color: '#555', fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Calendar size={12} /> April 17, 2025
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock size={12} /> 6 min read
          </span>
        </div>
      </header>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 32px',
          borderTop: '1px solid #1e1e2e',
          paddingTop: 48,
        }}
      >
        {/* Intro */}
        <P>
          You know that feeling when you&apos;ve been staring at a bug for two hours and it turns
          out the server you &quot;stopped&quot; was never actually stopped? Yeah. This is that post.
        </P>
        <P>
          These aren&apos;t framework tricks or DSA patterns. These are the embarrassingly simple
          things that&apos;ll make your day-to-day dev life actually bearable. The stuff nobody puts
          in tutorials because it&apos;s &quot;too basic&quot; — except it isn&apos;t, because
          everyone runs into it.
        </P>

        {/* Tip 1 */}
        <H2>1. Your Node server is lying to you about the port</H2>
        <P>
          Vite is honest. When port 5173 is already taken, it tells you — &quot;hey, something&apos;s
          already running here, want me to use 5174?&quot; Clean, helpful, done.
        </P>
        <P>
          Node doesn&apos;t do that. By default it either crashes with a wall of text you have to
          decode, or worse — it silently runs the old instance while you&apos;re testing the new one.
          You&apos;ll spend 30 minutes wondering why your changes aren&apos;t reflecting. They are
          reflecting — just on a zombie process you forgot about.
        </P>
        <P>Add this when you start your server. Two lines:</P>

        <Code lang="js">{`
const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error("❌ Port 3000 is already in use. Kill it first.");
    process.exit(1);
  }
});
        `}</Code>

        <P>
          Now it yells at you immediately instead of pretending everything is fine. And if you want
          to actually find what process is squatting on your port:
        </P>

        <TabCode
          tabs={[
            {
              label: 'WINDOWS (CMD)',
              lang: 'bash',
              code: `netstat -ano | findstr :3000
# gives you a PID like 24496

# then in PowerShell:
Get-Process -Id 24496 | Format-List *`,
            },
            {
              label: 'MAC / LINUX',
              lang: 'bash',
              code: `lsof -i :3000
# shows the process name and PID

kill -9 <PID>`,
            },
          ]}
        />

        <Callout>
          The PID you get from <code style={{ color: '#6366f1' }}>netstat</code> is the process ID.
          Plug it into Task Manager or PowerShell and you&apos;ll see exactly what&apos;s holding
          the port. Usually it&apos;s a previous Node process that didn&apos;t exit cleanly.
        </Callout>

        {/* Tip 2 */}
        <H2>2. Add one route that saves you every time</H2>
        <P>
          How many times have you hit an API, gotten nothing back, and spent ten minutes checking
          Postman, checking the controller, checking the route file — only to realize you had a typo
          in the URL?
        </P>
        <P>
          Express doesn&apos;t tell you &quot;that route doesn&apos;t exist.&quot; It just hangs. Or
          times out. Or gives you whatever the last middleware returned.
        </P>
        <P>
          Put this at the very bottom of your <code style={{ color: '#6366f1' }}>app.js</code>.
          After every other route:
        </P>

        <Code lang="js">{`
// ✅ This goes at the VERY END of app.js — after all your routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
        `}</Code>

        <P>
          That&apos;s it. Now when you hit a wrong URL you immediately know — it&apos;s not your
          logic, it&apos;s not your controller, it&apos;s the route itself. Express reads top to
          bottom, so this only fires when nothing else matched.
        </P>
        <Callout>
          Order matters here. If you put this before your actual routes, every request returns 404.
          It must be the last thing in the file.
        </Callout>

        {/* Tip 3 */}
        <H2>3. Morgan — just add it, seriously</H2>
        <P>
          You&apos;re probably doing <code style={{ color: '#6366f1' }}>console.log(&quot;hit&quot;)</code>{' '}
          inside your controllers to check if a route is being called. Stop that. There&apos;s a
          package that does this automatically, for every single request, with timing info included.
        </P>

        <Code lang="bash">{`npm install morgan`}</Code>

        <Code lang="js">{`
import morgan from "morgan";
app.use(morgan("dev")); // add this early, before your routes
        `}</Code>

        <P>Now every request logs itself automatically:</P>

        <Code lang="bash">{`
GET  /user/profile       200  12.453 ms
POST /test/submit        401   3.201 ms
GET  /api/nonexistent    404   1.102 ms
        `}</Code>

        <P>
          The <code style={{ color: '#6366f1' }}>&quot;dev&quot;</code> format colors it — green
          for 200s, yellow for 300s, red for 400s and 500s. You see the full picture at a glance
          without touching a single controller.
        </P>

        <Callout>
          For production, swap <code style={{ color: '#6366f1' }}>&quot;dev&quot;</code> for{' '}
          <code style={{ color: '#6366f1' }}>&quot;combined&quot;</code> — it logs IP addresses,
          user agents, and timestamps in Apache format. Useful when you need to debug what actually
          hit your server in deployment.
        </Callout>

        {/* Tip 4 */}
        <H2>4. You&apos;re typing the same four commands every single day</H2>
        <P>
          Every time you start your project you open three terminals and type the same thing. CD
          here, npm run dev, CD there, npm run dev again, CD somewhere else, py app.py. Every single
          time.
        </P>
        <P>
          Make a file. Two letters. Put it in your project root. Never type those commands again.
        </P>

        <TabCode
          tabs={[
            {
              label: 'WINDOWS (s.bat)',
              lang: 'bat',
              code: `@echo off
start cmd /k "cd client && npm run dev"
start cmd /k "cd server && npm run dev"
start cmd /k "cd object-detection && py app.py"`,
            },
            {
              label: 'MAC / LINUX (s.sh)',
              lang: 'bash',
              code: `#!/bin/bash
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/client && npm run dev"'
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/server && npm run dev"'
osascript -e 'tell app "Terminal" to do script "cd '$(pwd)'/object-detection && py app.py"'`,
            },
            {
              label: 'USING CONCURRENTLY',
              lang: 'bash',
              code: `# npm install -g concurrently
# then in your root package.json scripts:

"dev": "concurrently \\"cd client && npm run dev\\" \\"cd server && npm run dev\\""`,
            },
          ]}
        />

        <P>
          Save it as <code style={{ color: '#6366f1' }}>s.bat</code> on Windows or{' '}
          <code style={{ color: '#6366f1' }}>s.sh</code> on Mac/Linux. Type{' '}
          <code style={{ color: '#6366f1' }}>s</code>, hit enter, everything starts.
        </P>
        <P>
          The point isn&apos;t the script itself — it&apos;s the habit. Any command you find
          yourself typing more than twice a day deserves a shortcut. Your fingers will thank you
          sometime around the 200th time you would have typed{' '}
          <code style={{ color: '#6366f1' }}>cd client && npm run dev</code>.
        </P>

        {/* Closing */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: '1px solid #1e1e2e',
            color: '#666',
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          <P>
            None of this is groundbreaking. But the hours I&apos;ve lost to port conflicts, silent
            404s, and repetitive terminal commands — I&apos;d like them back. Hope this saves you
            some of yours.
          </P>
        </div>
      </div>
    </main>
  );
}