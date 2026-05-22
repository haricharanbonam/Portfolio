'use client';

import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ─── Reusable components ──────────────────────────────────────────────────────

function CodeBlock({ code, lang = 'bash' }: { code: string; lang?: string }) {
  return (
    <div style={{ margin: '24px 0', borderRadius: 10, overflow: 'hidden', border: '1px solid #30363d' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '1px solid #30363d',
          background: '#1c2128',
        }}
      >
        <span style={{ fontSize: 12, color: '#8b949e', fontFamily: 'monospace' }}>{lang}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#30363d', display: 'inline-block' }} />
          ))}
        </div>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '20px 24px',
          background: '#161b22',
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

function Callout({ type = 'note', children }: { type?: 'note' | 'warning' | 'tip'; children: React.ReactNode }) {
  const map = {
    note:    { border: '#1f6feb', color: '#79c0ff', icon: 'ℹ️' },
    warning: { border: '#d29922', color: '#e3b341', icon: '⚠️' },
    tip:     { border: '#3fb950', color: '#56d364', icon: '💡' },
  };
  const s = map[type];
  return (
    <div
      style={{
        margin: '20px 0',
        borderLeft: `4px solid ${s.border}`,
        background: '#161b22',
        borderRadius: '0 6px 6px 0',
        padding: '12px 16px',
        color: s.color,
        fontSize: 14,
        lineHeight: 1.7,
      }}
    >
      <span style={{ marginRight: 8 }}>{s.icon}</span>
      {children}
    </div>
  );
}

function IC({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: 4,
        padding: '2px 6px',
        fontFamily: 'monospace',
        fontSize: '0.82em',
        color: '#e6edf3',
      }}
    >
      {children}
    </code>
  );
}

function Divider() {
  return <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #21262d' }} />;
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#1f6feb',
            color: '#fff',
            fontSize: 12,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {number}
        </div>
        <div style={{ width: 1, flex: 1, background: '#21262d' }} />
      </div>
      <div style={{ paddingBottom: 32, flex: 1 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f0f6fc', marginBottom: 12, marginTop: 4 }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

// ─── Series nav ───────────────────────────────────────────────────────────────

function SeriesBanner() {
  const parts = [
    { part: 1, title: 'EC2 + Nginx Setup', slug: 'how-vercel-works-part-1', current: true },
    { part: 2, title: 'Subdomain Mapping with Nginx', slug: 'how-vercel-works-part-2', current: false },
    { part: 3, title: 'File Upload + S3 Bucket', slug: 'how-vercel-works-part-3', current: false },
    { part: 4, title: 'Wiring It All Together', slug: 'how-vercel-works-part-4', current: false },
  ];
  return (
    <div style={{ margin: '32px 0', borderRadius: 8, border: '1px solid #30363d', background: '#161b22', overflow: 'hidden' }}>
      <div
        style={{
          padding: '8px 16px',
          borderBottom: '1px solid #30363d',
          background: '#1c2128',
          fontSize: 11,
          color: '#8b949e',
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Series — Building Our Own Vercel
      </div>
      {parts.map((item) => (
        <div
          key={item.part}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            fontSize: 14,
            borderBottom: '1px solid #21262d',
            background: item.current ? '#0d1117' : 'transparent',
            color: item.current ? '#58a6ff' : '#8b949e',
          }}
        >
          <span style={{ fontSize: 12, fontFamily: 'monospace', color: '#484f58', flexShrink: 0 }}>Part {item.part}</span>
          {item.current ? (
            <span style={{ fontWeight: 500 }}>{item.title} ← you are here</span>
          ) : (
            <span>{item.title}</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── P, H2 helpers ────────────────────────────────────────────────────────────

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9', margin: '0 0 20px' }}>{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 20, fontWeight: 600, color: '#f0f6fc', margin: '48px 0 16px', paddingTop: 8 }}>
      {children}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VercelBlog() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', color: '#c9d1d9', fontFamily: "'Segoe UI', sans-serif", padding: '0 0 100px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '56px 32px 0' }}>

        {/* Back */}
        <Link
          href="/blogs"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            color: '#8b949e',
            textDecoration: 'none',
            marginBottom: 40,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#58a6ff')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8b949e')}
        >
          ← Back to blog
        </Link>

        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span
              style={{
                padding: '2px 10px',
                borderRadius: 20,
                border: '1px solid #30363d',
                color: '#58a6ff',
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              Series · Part 1
            </span>
            <span style={{ fontSize: 13, color: '#8b949e' }}>May 1, 2025</span>
            <span style={{ color: '#8b949e' }}>·</span>
            <span style={{ fontSize: 13, color: '#8b949e' }}>7 min read</span>
          </div>

          <h1 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, color: '#f0f6fc', lineHeight: 1.3, margin: '0 0 16px' }}>
            Building Our Own Vercel
            <br />
            <span style={{ color: '#8b949e', fontWeight: 400, fontSize: 'clamp(18px, 3vw, 26px)' }}>
              Part 1: EC2 + Nginx Setup
            </span>
          </h1>

          <P>
            Have you ever wondered how Vercel generates a unique subdomain for every deployment
            and maps it to your project instantly? In this series, we build that exact system
            ourselves — from scratch. By the end, you&apos;ll have your own deployment platform running.
          </P>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #21262d', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #58a6ff, #1f6feb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              HC
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 500, color: '#f0f6fc', margin: 0 }}>Hari Charan</p>
              <p style={{ fontSize: 12, color: '#8b949e', margin: 0 }}>Full Stack Developer</p>
            </div>
          </div>
        </header>

        {/* Series nav */}
        <SeriesBanner />

        <Divider />

        {/* Body */}
        <article>

          <H2>What are we actually building?</H2>

          <P>
            Have you ever pushed a project to Vercel and noticed you get a URL like{' '}
            <IC>my-app-git-main-yourname.vercel.app</IC> within seconds? Each deployment
            gets its own subdomain, its own isolated environment, and it just works.
          </P>

          <P>
            Have you wondered what&apos;s actually happening under the hood? There&apos;s no magic —
            it&apos;s a combination of a reverse proxy, subdomain routing, and some smart
            file serving. And we&apos;re going to build exactly that ourselves, step by step,
            across this series.
          </P>

          <P>Here&apos;s the rough plan across the four parts:</P>

          <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '0 0 20px' }}>
            {[
              'Part 1 (this one) — spin up an EC2 instance, install Nginx, confirm it\'s running',
              'Part 2 — configure Nginx to route subdomains to different folders',
              'Part 3 — handle file uploads and connect an S3 bucket',
              'Part 4 — wire it all together into one working deployment flow',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 15, color: '#c9d1d9', lineHeight: 1.7 }}>
                <span style={{ color: '#58a6ff', flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <P>
            By the end of Part 1, your goal is simple: visit your EC2 instance&apos;s public IP
            in a browser and see the Nginx welcome page. That&apos;s it. Small win, solid foundation.
          </P>

          <Divider />

          <H2>Why Nginx?</H2>

          <P>
            Nginx (pronounced <em>engine-x</em>) is one of those tools that shows up everywhere
            once you start looking — and for good reason. It&apos;s open source, insanely
            performant, and used by some of the largest platforms in the world.
          </P>

          <P>For our purposes, Nginx does a few key things:</P>

          <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '0 0 20px' }}>
            {[
              'Reverse proxy — receives a request and forwards it to the right place',
              'Subdomain routing — checks the Host header and decides where to send traffic',
              'Static file serving — can serve HTML/CSS/JS directly without a Node process',
              'Load balancing — distribute traffic across multiple servers (we\'ll get there)',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 15, color: '#c9d1d9', lineHeight: 1.7 }}>
                <span style={{ color: '#3fb950', flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <P>
            For this series, Nginx is the core piece that makes subdomain mapping possible.
            When a request comes in for <IC>abc123.yourdomain.com</IC>, Nginx intercepts it,
            reads the subdomain, and serves the matching project files. That&apos;s the whole trick.
          </P>

          <Divider />

          <H2>Step 1 — Create an EC2 Instance</H2>

          <P>
            You need a server. For this series we&apos;ll use AWS EC2, but Google Cloud Compute or
            any VPS (DigitalOcean, Hetzner) works fine — the setup is identical once you&apos;re
            inside the terminal.
          </P>

          <Step number={1} title="Launch the instance">
            <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0 }}>
              Go to <strong style={{ color: '#f0f6fc' }}>AWS Console → EC2 → Launch Instance</strong>.
              Pick <strong style={{ color: '#f0f6fc' }}>Ubuntu 22.04 LTS</strong> as your AMI —
              it&apos;s free tier eligible and has the best community support. For instance type,{' '}
              <IC>t2.micro</IC> is fine to start.
            </p>
          </Step>

          <Step number={2} title="Download your .pem key">
            <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0 }}>
              When prompted to create a key pair, download the <IC>.pem</IC> file and keep it
              safe. You&apos;ll use this to SSH into the instance. You can&apos;t download it again.
            </p>
          </Step>

          <Step number={3} title="Set up the Security Group">
            <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, marginBottom: 12 }}>
              This is the firewall. You need to open two ports in the inbound rules:
            </p>
            <div style={{ borderRadius: 6, border: '1px solid #30363d', overflow: 'hidden', fontSize: 13 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  background: '#1c2128',
                  color: '#8b949e',
                  padding: '8px 16px',
                  fontWeight: 500,
                  fontSize: 12,
                  borderBottom: '1px solid #30363d',
                }}
              >
                <span>Type</span>
                <span>Port</span>
                <span>Source</span>
              </div>
              {[['HTTP', '80', '0.0.0.0/0'], ['SSH', '22', '0.0.0.0/0']].map(([type, port, source]) => (
                <div
                  key={port}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '10px 16px',
                    fontFamily: 'monospace',
                    color: '#e6edf3',
                    borderBottom: '1px solid #21262d',
                    fontSize: 12,
                  }}
                >
                  <span>{type}</span>
                  <span>{port}</span>
                  <span style={{ color: '#8b949e' }}>{source}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#8b949e', marginTop: 8 }}>
              In production you&apos;d restrict SSH to your own IP, but for now this is fine.
            </p>
          </Step>

          <Step number={4} title="SSH into the instance">
            <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, marginBottom: 8 }}>
              Once the instance is running, grab the public IP from the console and connect:
            </p>
            <CodeBlock
              lang="bash"
              code={`# Fix the key file permissions first (required)
chmod 400 your-key.pem

# Connect — replace with your actual public IP
ssh -i your-key.pem ubuntu@YOUR_PUBLIC_IP`}
            />
            <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              You should land in the Ubuntu terminal. If you&apos;re seeing a connection refused
              error, the instance is probably still initializing — wait 30 seconds and retry.
            </p>
          </Step>

          <Callout type="tip">
            Your public IP is on the EC2 console next to the instance. It looks like{' '}
            <IC>3.84.xx.xx</IC>. Note that it changes every time you stop and restart the
            instance — we&apos;ll deal with that in a later part using an Elastic IP.
          </Callout>

          <Divider />

          <H2>Step 2 — Run the Setup Script</H2>

          <P>
            Once you&apos;re inside the server, here&apos;s the setup script. It installs Nginx,
            Node.js 20, npm, git, and creates the directory structure we&apos;ll use to
            serve project files later.
          </P>

          <CodeBlock
            lang="bash"
            code={`#!/bin/bash
sudo apt update
sudo apt install -y nginx nodejs npm git

# Install Node.js 20 via the n version manager
sudo npm install -g n && sudo n 20

# Create the directory where project sites will live
sudo mkdir -p /var/www/sites
sudo chown -R ubuntu:ubuntu /var/www/sites

# Set up Nginx config
sudo cp nginx.conf /etc/nginx/sites-available/myplatform
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/myplatform /etc/nginx/sites-enabled/

# Apply the new config
sudo systemctl reload nginx`}
          />

          <P>You can either paste this line by line or save it as a <IC>setup.sh</IC> file and run it:</P>

          <CodeBlock
            lang="bash"
            code={`# Make it executable and run
chmod +x setup.sh
./setup.sh`}
          />

          <Callout type="note">
            We&apos;re referencing a <IC>nginx.conf</IC> file in this script — we&apos;ll write that
            properly in Part 2 when we set up subdomain routing. For now, Nginx&apos;s
            default config is already enough to confirm everything is working.
          </Callout>

          <Divider />

          <H2>Step 3 — Confirm Nginx Is Running</H2>

          <P>After the script finishes, check that Nginx started correctly:</P>

          <CodeBlock
            lang="bash"
            code={`sudo systemctl status nginx

# You should see something like:
# ● nginx.service - A high performance web server
#    Active: active (running) since ...`}
          />

          <P>
            If it says <IC>active (running)</IC> — you&apos;re good. Now open your browser and
            visit your EC2 instance&apos;s public IP:
          </P>

          <CodeBlock lang="bash" code={`http://YOUR_PUBLIC_IP`} />

          <div
            style={{
              margin: '24px 0',
              borderRadius: 8,
              border: '1px solid #3fb950',
              background: '#161b22',
              padding: '16px 20px',
            }}
          >
            <p style={{ fontSize: 14, color: '#56d364', fontWeight: 600, marginBottom: 4 }}>✓ What you should see</p>
            <p style={{ fontSize: 14, color: '#8b949e', margin: 0, lineHeight: 1.7 }}>
              A plain white page that says <strong style={{ color: '#c9d1d9' }}>&quot;Welcome to nginx!&quot;</strong>{' '}
              with some text below it. That&apos;s the default Nginx page. If you&apos;re seeing it —
              Nginx is running, your security group is open, and the server is reachable.
              That&apos;s everything we need for Part 1.
            </p>
          </div>

          <Callout type="warning">
            Make sure you&apos;re visiting <IC>http://</IC> not <IC>https://</IC> — we haven&apos;t
            set up SSL yet. Your browser might try to redirect you to HTTPS automatically.
            If the page doesn&apos;t load, force <IC>http://YOUR_IP</IC> in the address bar.
          </Callout>

          <Divider />

          <H2>Troubleshooting</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
            {[
              { problem: 'SSH: Permission denied', fix: 'Run chmod 400 your-key.pem first. The key file permissions have to be restricted.' },
              { problem: 'Browser: connection timed out', fix: 'Check your security group. Port 80 (HTTP) must be open with source 0.0.0.0/0.' },
              { problem: 'Nginx not starting', fix: 'Run sudo nginx -t to check for config errors. Also check sudo journalctl -u nginx for logs.' },
              { problem: 'Page loads but shows default Apache page', fix: 'Apache might already be installed. Run sudo systemctl stop apache2 && sudo systemctl start nginx.' },
            ].map((item) => (
              <div
                key={item.problem}
                style={{
                  borderRadius: 8,
                  border: '1px solid #30363d',
                  background: '#161b22',
                  padding: '12px 16px',
                  fontSize: 14,
                }}
              >
                <p style={{ fontWeight: 600, color: '#e3b341', marginBottom: 4 }}>{item.problem}</p>
                <p style={{ color: '#8b949e', margin: 0 }}>{item.fix}</p>
              </div>
            ))}
          </div>

          <Divider />

          <H2>Where We Are</H2>

          <P>
            That&apos;s Part 1 done. You have a live Ubuntu server on EC2, Nginx is installed
            and running, and you can hit it from a browser. It&apos;s not doing anything useful
            yet — but the foundation is in place.
          </P>

          <P>
            In Part 2, we get into the actual interesting part: configuring Nginx to read
            the subdomain from an incoming request and route it to the right folder. That&apos;s
            the core mechanism behind how Vercel (and tools like it) work. See you there.
          </P>

        </article>

        <Divider />

        {/* Bottom series nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, color: '#484f58' }}>Part 1 of 4</span>
          <Link
            href="/blog/how-vercel-works-part-2"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#58a6ff', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'underline')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'none')}
          >
            Part 2: Subdomain Mapping →
          </Link>
        </div>

        <Divider />

        {/* Author footer */}
        <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #58a6ff, #1f6feb)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              HC
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 500, color: '#f0f6fc', margin: 0 }}>Hari Charan</p>
              <a href="https://haricharanbonam.tech" style={{ fontSize: 12, color: '#58a6ff', textDecoration: 'none' }}>
                haricharanbonam.tech
              </a>
            </div>
          </div>
          <Link
            href="/blog"
            style={{ fontSize: 14, color: '#8b949e', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#58a6ff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8b949e')}
          >
            ← All posts
          </Link>
        </footer>

      </div>
    </main>
  );
}