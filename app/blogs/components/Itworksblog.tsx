'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

// ─── Reusable components (same as DevTricksBlog) ───────────────────────────

function Code({ children, lang = 'js' }: { children: string; lang?: string }) {
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

function TabCode({ tabs }: { tabs: { label: string; lang: string; code: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{ margin: '24px 0', borderRadius: 10, overflow: 'hidden', border: '1px solid #1e1e2e' }}>
      <div style={{ background: '#12121a', display: 'flex', borderBottom: '1px solid #1e1e2e' }}>
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

function C({ children }: { children: React.ReactNode }) {
  return <code style={{ color: '#6366f1', fontFamily: "'IBM Plex Mono', monospace", fontSize: 14 }}>{children}</code>;
}

// ─── Blog ──────────────────────────────────────────────────────────────────

export default function ItWorksBlog() {
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
      {/* Back */}
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
          {['Deployment', 'Node.js', 'Debugging'].map((tag) => (
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
          &ldquo;It works on my machine&rdquo; — and then you deploy it.
        </h1>

        <div style={{ display: 'flex', gap: 20, color: '#555', fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Calendar size={12} /> April 21, 2025
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock size={12} /> 8 min read
          </span>
        </div>
      </header>

      {/* Content */}
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
          The app is running. Auth works. Data loads. You click around for ten minutes, everything
          feels good, and you push it to a test server feeling pretty confident about yourself.
        </P>
        <P>
          Then someone opens the link and cookies aren&apos;t being set. The frontend is redirecting
          to <C>localhost:5173</C>. The &ldquo;today&apos;s events&rdquo; section is showing
          tomorrow&apos;s data. And your API calls are getting blocked by CORS even though you
          literally have CORS set up.
        </P>
        <P>
          Nothing in your code changed. But your environment did — and your code had no idea it was
          always depending on the environment staying the same.
        </P>
        <P>
          These are the things that only show up after you leave localhost. Every single one of them
          I&apos;ve either hit myself or watched someone else lose hours to.
        </P>

        {/* 1. Cookies */}
        <H2>1. Your cookies were never going to survive deployment</H2>
        <P>
          Locally, your frontend and backend are both on the same machine. The browser doesn&apos;t
          care much about cookie restrictions when everything&apos;s on localhost. So your auth
          works perfectly — cookies get set, requests carry them, life is good.
        </P>
        <P>
          Then you deploy. Your frontend is on one domain, your backend is on another. Suddenly{' '}
          <C>sameSite: &apos;strict&apos;</C> is blocking cookies from being sent cross-site.{' '}
          <C>secure: true</C> is killing them if you&apos;re not on HTTPS yet. And you get zero
          error messages — the cookie just quietly doesn&apos;t arrive, and your entire auth flow
          breaks silently.
        </P>
        <P>
          The fix is to make your cookie config aware of which environment it&apos;s running in.
          Don&apos;t hardcode these values:
        </P>

        <Code lang="js">{`
// config/cookieConfig.js
const isProduction = process.env.NODE_ENV === 'production';

export const COOKIE_OPTIONS = {
  httpOnly: true,       // always on — keeps JS from touching the cookie
  secure: isProduction, // HTTPS only in prod, relaxed in local
  sameSite: isProduction ? 'strict' : 'lax', // strict in prod, lax locally
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};
        `}</Code>

        <P>
          Then use <C>COOKIE_OPTIONS</C> everywhere you set a cookie instead of writing the options
          inline. One file, one place to update, works correctly in both environments.
        </P>
        <Callout>
          Make sure <C>NODE_ENV=production</C> is actually set on your deployment server. If it
          isn&apos;t, <C>isProduction</C> will be false and you&apos;ll be running prod with local
          cookie settings — which is a security issue, not just a bug.
        </Callout>

        {/* 2. Hardcoded URLs */}
        <H2>2. You hardcoded localhost somewhere and you don&apos;t remember where</H2>
        <P>
          Somewhere in your codebase is a URL that has <C>localhost:5173</C> or{' '}
          <C>localhost:3000</C> written directly in it. Maybe it&apos;s in an OAuth redirect.
          Maybe it&apos;s in a <C>navigate()</C> call. Maybe it&apos;s in a link you generate
          dynamically. Locally it works perfectly because that&apos;s where your app actually is.
          After deploy your users are getting sent to your laptop.
        </P>
        <P>
          On the frontend — stop constructing absolute URLs manually. Use <C>window.location.origin</C>{' '}
          to always get the current domain, whatever it is:
        </P>

        <Code lang="tsx">{`
const [origin, setOrigin] = useState('');

useEffect(() => {
  setOrigin(window.location.origin); // reads the actual domain at runtime
}, []);

// now use it wherever you need a full URL
navigate(origin + '/dashboard');
navigate(origin + '/profile?github=success');
        `}</Code>

        <P>
          On the backend — keep your frontend URL in <C>.env</C> and use it everywhere you
          redirect:
        </P>

        <Code lang="js">{`
// .env
FRONTEND_URL=https://yourapp.com

// anywhere in your backend
res.redirect(process.env.FRONTEND_URL + '/profile?github=success');
        `}</Code>

        <P>
          This sounds obvious until you&apos;re staring at a production redirect going to
          localhost and trying to figure out where the hell it&apos;s coming from.
        </P>

        {/* 3. Timezone */}
        <H2>3. Your server thinks it&apos;s in America</H2>
        <P>
          This one is less common but when it hits you, it&apos;s genuinely confusing. You have a
          feature that fetches data based on today&apos;s date — events, logs, daily summaries,
          whatever. Works perfectly local. After deploy, the results are off by hours. Sometimes
          you&apos;re getting yesterday&apos;s data, sometimes tomorrow&apos;s.
        </P>
        <P>
          The reason is that most deployment platforms (Render, Railway, AWS, Vercel serverless)
          default to UTC or a US timezone. If your users are in IST, that&apos;s a 5 hour 30
          minute difference. At 11pm IST your server thinks it&apos;s still the previous day.
        </P>
        <P>
          Install <C>luxon</C> and always work in the user&apos;s timezone, converting to UTC only
          when you actually query the DB:
        </P>

        <Code lang="bash">{`npm install luxon`}</Code>

        <Code lang="js">{`
import { DateTime } from 'luxon';

app.get('/events/today', async (req, res) => {
  // get this from user profile or send it from frontend
  const userTimeZone = 'Asia/Kolkata';

  // calculate start and end of day in the USER's timezone
  const startOfDay = DateTime.now().setZone(userTimeZone).startOf('day');
  const endOfDay   = DateTime.now().setZone(userTimeZone).endOf('day');

  // convert to UTC before hitting the DB (DB stores UTC)
  const startUTC = startOfDay.toUTC().toJSDate();
  const endUTC   = endOfDay.toUTC().toJSDate();

  const events = await Event.find({
    eventDate: { $gte: startUTC, $lte: endUTC }
  });

  res.json(events);
});
        `}</Code>

        <Callout>
          The timezone should ideally come from the user&apos;s profile or be sent from the
          frontend via <C>Intl.DateTimeFormat().resolvedOptions().timeZone</C>. Hardcoding{' '}
          <C>&apos;Asia/Kolkata&apos;</C> works if your entire user base is in one region, but
          if you ever go wider, you&apos;ll want it dynamic.
        </Callout>

        {/* 4. CORS */}
        <H2>4. CORS that works locally but breaks the moment you deploy</H2>
        <P>
          You have CORS set up. You know you do. But after deploy every API call from the frontend
          is getting blocked. Postman works fine — it&apos;s just the browser that&apos;s angry.
        </P>
        <P>
          Two reasons this usually happens. First — your CORS origin is still set to{' '}
          <C>localhost:5173</C> and your frontend is now on a real domain. Second — you have{' '}
          <C>credentials: true</C> on the backend but forgot <C>withCredentials: true</C> on the
          frontend, so cookies are never actually sent with requests.
        </P>

        <Code lang="js">{`
// backend — use env variable, not a hardcoded URL
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
        `}</Code>

        <Code lang="js">{`
// frontend — add this once in your axios config file
import axios from 'axios';
axios.defaults.withCredentials = true;
        `}</Code>

        <Callout>
          <C>credentials: true</C> on CORS and <C>withCredentials: true</C> on Axios both have to
          be set. One without the other and cookies won&apos;t travel. This is the most common auth
          bug after deployment and it looks completely unrelated to cookies when you first see it.
        </Callout>

        {/* 5. env checklist */}
        <H2>5. You added a new .env key and forgot to add it on the server</H2>
        <P>
          You built a feature locally, added a new environment variable, everything works. You push
          the code. The feature throws a 500 in prod. You check your code for twenty minutes before
          realizing <C>process.env.SOME_NEW_KEY</C> is just <C>undefined</C> on the server because
          you never added it there.
        </P>
        <P>
          The error has nothing to do with the actual problem. It usually looks like a null reference
          or a failed API call — not &ldquo;hey your env variable is missing.&rdquo;
        </P>
        <P>
          Simple habit — keep an <C>.env.example</C> file in your repo. Every time you add a key
          to <C>.env</C>, add it here too with an empty value:
        </P>

        <Code lang="bash">{`
# .env.example — commit this, not your actual .env
MONGO_URI=
JWT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
FRONTEND_URL=
NODE_ENV=
        `}</Code>

        <P>
          When you deploy, this file is your checklist. Go through it line by line and make sure
          every key exists on your prod server. Takes thirty seconds and saves you from that
          specific brand of confusion where everything looks fine but nothing works.
        </P>

        {/* 6. Build preview */}
        <H2>6. Test your prod build before you actually push to prod</H2>
        <P>
          The dev server hides a lot. Vite&apos;s hot reload doesn&apos;t care about broken
          imports, missing env variables that get baked in at build time, or components that only
          fail during compilation. You&apos;ll find all of this the hard way if you push straight
          to prod without building first.
        </P>
        <P>
          Before pushing, run this in your frontend folder:
        </P>

        <Code lang="bash">{`
npm run build   # builds the app — shows linting errors, missing imports, etc.
npm run preview # serves the built app at localhost:4173
        `}</Code>

        <P>
          Then temporarily add <C>http://localhost:4173</C> to your backend CORS, point your
          frontend API URL to your local backend, and actually use the app on port 4173. This is
          as close to prod as you can get without actually deploying.
        </P>

        <Code lang="js">{`
// temporarily while testing the build
app.use(cors({
  origin: ['http://localhost:4173', process.env.FRONTEND_URL],
  credentials: true,
}));
        `}</Code>

        <Callout>
          Remove <C>localhost:4173</C> from CORS before you actually deploy. It&apos;s a testing
          tool, not something that should be in your production config.
        </Callout>

        {/* 7. withCredentials */}
        <H2>7. MongoDB Atlas is silently rejecting your server</H2>
        <P>
          This one catches everyone at least once. Your app deploys, the server starts, and every
          DB query just hangs and eventually times out. Locally your DB connection is fine. In prod
          it looks like a connection issue but the error message is vague enough that you&apos;ll
          probably check your connection string three times before figuring it out.
        </P>
        <P>
          Atlas has an IP whitelist. By default it&apos;s locked down. Your local IP is probably
          added from when you set it up. Your deployment server&apos;s IP is not.
        </P>
        <P>
          Go to Atlas → Network Access → Add IP Address. Either add your server&apos;s specific IP
          or — if your deployment IP changes (like on Render free tier) — allow access from
          anywhere (<C>0.0.0.0/0</C>) and rely on your connection string credentials for security.
        </P>
        <Callout>
          If you&apos;re on Render&apos;s free tier, your server IP changes on every deploy. In
          that case <C>0.0.0.0/0</C> is the practical choice. Just make sure your MongoDB
          username and password are strong and not reused anywhere.
        </Callout>

        {/* Closing */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: '1px solid #1e1e2e',
            color: '#666',
            fontSize: 15,
            lineHeight: 1.85,
          }}
        >
          <P>
            None of these are code bugs. That&apos;s what makes them annoying. Your logic is
            correct, your feature works, your tests pass — and then the environment changes and
            everything falls apart.
          </P>
          <P>
            The pattern across all of these is the same: your local setup was covering for
            assumptions your code was making. Cookies on the same origin. URLs that always start
            with localhost. A server that&apos;s in your timezone. A DB that trusts your IP.
          </P>
          <P>
            Write code that doesn&apos;t assume where it&apos;s running. Use environment variables.
            Build before you push. And maybe keep this list open the next time something works
            perfectly on your machine.
          </P>
        </div>
      </div>
    </main>
  );
}