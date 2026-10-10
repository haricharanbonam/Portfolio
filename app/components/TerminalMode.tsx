'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Minus, Square } from 'lucide-react';

// ─── Portfolio data duplicated (lean subset) ──────────────────────────────────

const data = {
  personal: {
    name: 'Hari Charan Bonam',
    title: 'MERN Stack Developer',
    email: 'haricharanbonam@gmail.com',
    phone: '+91 8328044665',
    location: 'Bhimavaram, Andhra Pradesh, India',
    bio: 'Computer Science undergraduate with hands-on experience in MERN stack development within a real-world product development environment. Strong exposure to backend systems, REST API development, database design, and application testing.',
  },
  socials: {
    github: 'https://github.com/haricharanbonam',
    linkedin: 'https://www.linkedin.com/in/haricharanbonam',
    leetcode: 'https://leetcode.com/u/haricharanbonam',
    hackerrank: 'https://www.hackerrank.com/haricharanbonam',
    website: 'https://haricharanbonam.tech',
  },
  projects: [
    {
      name: 'BlogX',
      desc: 'Full-stack blogging platform with secure auth, email verification, and interest-based curation',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/haricharanbonam/blog',
      live: null,
    },
    {
      name: 'Exam Portal',
      desc: 'Online exam system with AI-powered cheating detection using YOLO-based object recognition',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Flask', 'YOLO'],
      github: 'https://github.com/haricharanbonam/exam',
      live: null,
      status: 'Ongoing',
    },
    {
      name: 'Harcel',
      desc: 'Lightweight deployment platform — deploy static sites and React apps in seconds from GitHub or file upload',
      tech: ['React', 'Vite', 'Node.js', 'Express.js'],
      github: 'https://github.com/haricharanbonam/harcel',
      live: 'https://harcel.vercel.app',
    },
    {
      name: 'GPT Hashtag Templates',
      desc: 'Chrome extension that supercharges ChatGPT with instant reusable prompt templates triggered by #',
      tech: ['JavaScript', 'Chrome Extensions MV3', 'Chrome Storage API', 'CSS'],
      github: 'https://github.com/haricharanbonam/gpt-extension',
      live: null,
    },
    {
      name: 'Portfolio Website',
      desc: 'This portfolio — built with Next.js, TypeScript, canvas particles, and a secret terminal mode ;)',
      tech: ['Next.js', 'TypeScript', 'CSS'],
      github: 'https://github.com/haricharanbonam/whoami',
      live: 'https://haricharanbonam.tech',
    },
  ],
  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'],
    web: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'HTML', 'CSS'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman', 'CI/CD', 'VS Code', 'Linux'],
  },
  experience: [
    {
      role: 'Founding Engineer (MERN Stack)',
      company: 'GenZ Galaxy Tech Solutions — Plexis CRM',
      duration: 'July 2025 – Present',
      highlights: [
        'Owned full-stack features across 10+ modules of an AI-powered CRM (dashboard, leads, gallery, client mgmt)',
        'Eliminated 10+ redundant API calls — cut network overhead significantly',
        'Built gallery module with lazy-loading + perceptual hashing, cut load time from ~30s to <3s (90% improvement)',
        'Integrated AWS Rekognition facial recognition pipeline for identity verification',
        'Contributed to Agile sprint planning with weekend deployment cycles',
      ],
    },
  ],
  education: [
    { degree: 'B.Tech CSE', institution: 'SRKR Engineering College, Bhimavaram', duration: '2023–2027', score: 'CGPA: 9.26' },
    { degree: 'Intermediate (MPC)', institution: 'Veda Junior College', duration: '2021–2023', score: '968/1000' },
    { degree: 'SSC (Class 10)', institution: 'Narayana High School', duration: '2020–2021', score: '591/600' },
  ],
  certifications: [
    'Postman API Student Expert — Postman (Feb 2025)',
    'Data Structures and Algorithms using Python — NPTEL (Mar 2025)',
    'Introduction to C & Python Essentials — Cisco (Feb 2024, Dec 2024)',
    'Employee Salary Prediction Project — ML XPLORE Workshop by ACE (Jan 2025)',
    'Green Internship Program — 1M1B Foundation (May–June 2025)',
  ],
  achievements: [
    '4★ rating in C, Java, Python, and SQL on HackerRank',
    '2nd Place — Code Wars, SPURTHI 2K25, CSE Dept, SRKREC',
    '5th Place — Hack \'N\' Clash 2025 Coding Contest, CSI, SRKREC',
  ],
};

// ─── Types ────────────────────────────────────────────────────────────────────

type LineKind = 'input' | 'output' | 'error' | 'system' | 'link';

interface TerminalLine {
  id: number;
  kind: LineKind;
  text: string;
  href?: string;
}

// ─── Command definitions ──────────────────────────────────────────────────────

const COMMANDS = [
  'help', 'about', 'whoami', 'pwd', 'ls', 'cat',
  'projects', 'skills', 'experience', 'education',
  'contact', 'socials', 'achievements', 'certifications',
  'echo', 'date', 'clear', 'man', 'exit',
];

function runCommand(raw: string): { lines: TerminalLine[]; shouldClose?: boolean } {
  let id = Date.now();
  const nextId = () => id++;
  const out = (text: string, kind: LineKind = 'output'): TerminalLine => ({ id: nextId(), kind, text });
  const link = (text: string, href: string): TerminalLine => ({ id: nextId(), kind: 'link', text, href });
  const err = (text: string): TerminalLine => out(text, 'error');
  const blank = (): TerminalLine => out('');

  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return {
        lines: [
          out('╭─────────────────────────────────────────────────────╮'),
          out('│              Available Commands                     │'),
          out('╰─────────────────────────────────────────────────────╯'),
          blank(),
          out('  \x1bGREEN\x1babout\x1bRESET          → who is Hari Charan?'),
          out('  \x1bGREEN\x1bwhoami\x1bRESET         → alias for about'),
          out('  \x1bGREEN\x1bprojects\x1bRESET       → list all projects'),
          out('  \x1bGREEN\x1bprojects <name>\x1bRESET → details for a specific project'),
          out('  \x1bGREEN\x1bskills\x1bRESET         → tech stack & tools'),
          out('  \x1bGREEN\x1bexperience\x1bRESET     → work experience'),
          out('  \x1bGREEN\x1beducation\x1bRESET      → academic background'),
          out('  \x1bGREEN\x1bcertifications\x1bRESET → all certifications'),
          out('  \x1bGREEN\x1bachievements\x1bRESET   → awards & rankings'),
          out('  \x1bGREEN\x1bcontact\x1bRESET        → email & phone'),
          out('  \x1bGREEN\x1bsocials\x1bRESET        → GitHub, LinkedIn, etc.'),
          blank(),
          out('  \x1bDIM\x1bls\x1bRESET               → list sections'),
          out('  \x1bDIM\x1bcat <section>\x1bRESET    → same as running that command'),
          out('  \x1bDIM\x1bpwd\x1bRESET              → current directory'),
          out('  \x1bDIM\x1becho <text>\x1bRESET      → print text'),
          out('  \x1bDIM\x1bdate\x1bRESET             → current date/time'),
          out('  \x1bDIM\x1bman <cmd>\x1bRESET        → manual page for a command'),
          out('  \x1bDIM\x1bclear\x1bRESET            → clear the terminal'),
          out('  \x1bDIM\x1bexit\x1bRESET             → close the terminal'),
          blank(),
          out('  Tip: use ↑↓ for history, Tab to autocomplete'),
        ],
      };

    case 'about':
    case 'whoami':
      return {
        lines: [
          out(`  \x1bACCENT\x1b${data.personal.name}\x1bRESET`),
          out(`  ${data.personal.title}`),
          blank(),
          out(`  \x1bDIM\x1b${data.personal.bio}\x1bRESET`),
          blank(),
          out(`  📍 ${data.personal.location}`),
        ],
      };

    case 'pwd':
      return { lines: [out('/home/haricharanbonam/portfolio')] };

    case 'ls':
      return {
        lines: [
          out('\x1bGREEN\x1babout\x1bRESET     \x1bGREEN\x1bprojects\x1bRESET    \x1bGREEN\x1bskills\x1bRESET       \x1bGREEN\x1bexperience\x1bRESET'),
          out('\x1bGREEN\x1beducation\x1bRESET  \x1bGREEN\x1bcertifications\x1bRESET  \x1bGREEN\x1bachievements\x1bRESET  \x1bGREEN\x1bcontact\x1bRESET'),
          out('\x1bGREEN\x1bsocials\x1bRESET   \x1bDIM\x1breadme.md\x1bRESET   \x1bDIM\x1b.env\x1bRESET  \x1bDIM\x1b.gitignore\x1bRESET'),
        ],
      };

    case 'cat': {
      if (!args[0]) return { lines: [err('cat: missing operand. Usage: cat <section>')] };
      const sub = args[0].toLowerCase();
      if (sub === 'readme.md') {
        return {
          lines: [
            out('# Hari Charan Bonam — Portfolio'),
            blank(),
            out('Full-stack MERN developer, CS undergrad, builder of things.'),
            out('Check `projects`, `experience`, `skills` for the full story.'),
          ],
        };
      }
      if (sub === '.env') return { lines: [err('.env: Permission denied')] };
      if (sub === '.gitignore') return { lines: [out('node_modules/\n.next/\n.env.local')] };
      // delegate to sub-command
      return runCommand(sub);
    }

    case 'projects': {
      if (args[0]) {
        const query = args.join(' ').toLowerCase();
        const proj = data.projects.find((p) => p.name.toLowerCase().includes(query));
        if (!proj) return { lines: [err(`projects: '${args.join(' ')}' not found. Run \`projects\` to list all.`)] };
        const lines: TerminalLine[] = [
          out(`╭── \x1bACCENT\x1b${proj.name}\x1bRESET ${proj.status ? `\x1bWARN\x1b[${proj.status}]\x1bRESET` : ''}`),
          blank(),
          out(`  ${proj.desc}`),
          blank(),
          out(`  \x1bDIM\x1bStack:\x1bRESET  ${proj.tech.join(' · ')}`),
          blank(),
          link(`  \x1bDIM\x1b⎇  GitHub →\x1bRESET \x1bLINK\x1b${proj.github}\x1bRESET`, proj.github),
        ];
        if (proj.live) lines.push(link(`  \x1bDIM\x1b🌐 Live   →\x1bRESET \x1bLINK\x1b${proj.live}\x1bRESET`, proj.live));
        return { lines };
      }
      const lines: TerminalLine[] = [
        out('  \x1bDIM\x1bName                      Tech Stack\x1bRESET'),
        out('  ─────────────────────────────────────────────────────────'),
      ];
      data.projects.forEach((p) => {
        lines.push(
          out(`  \x1bGREEN\x1b${p.name.padEnd(26)}\x1bRESET${p.tech.slice(0, 3).join(', ')}${p.tech.length > 3 ? ' …' : ''}${p.status ? ` \x1bWARN\x1b[${p.status}]\x1bRESET` : ''}`)
        );
      });
      lines.push(blank(), out(`  Tip: run \x1bDIM\x1bprojects <name>\x1bRESET for full details`));
      return { lines };
    }

    case 'skills':
      return {
        lines: [
          out('  \x1bACCENT\x1bLanguages\x1bRESET'),
          out(`    ${data.skills.languages.join('  ·  ')}`),
          blank(),
          out('  \x1bACCENT\x1bWeb / Frameworks\x1bRESET'),
          out(`    ${data.skills.web.join('  ·  ')}`),
          blank(),
          out('  \x1bACCENT\x1bDatabases\x1bRESET'),
          out(`    ${data.skills.databases.join('  ·  ')}`),
          blank(),
          out('  \x1bACCENT\x1bTools & DevOps\x1bRESET'),
          out(`    ${data.skills.tools.join('  ·  ')}`),
        ],
      };

    case 'experience': {
      const lines: TerminalLine[] = [];
      data.experience.forEach((e) => {
        lines.push(
          out(`  \x1bACCENT\x1b${e.role}\x1bRESET`),
          out(`  \x1bDIM\x1b${e.company}\x1bRESET   ${e.duration}`),
          blank()
        );
        e.highlights.forEach((h) => lines.push(out(`    \x1bGREEN\x1b▸\x1bRESET ${h}`)));
        lines.push(blank());
      });
      return { lines };
    }

    case 'education': {
      const lines: TerminalLine[] = [];
      data.education.forEach((e) => {
        lines.push(
          out(`  \x1bACCENT\x1b${e.degree}\x1bRESET`),
          out(`  \x1bDIM\x1b${e.institution}\x1bRESET`),
          out(`  ${e.duration}   \x1bGREEN\x1b${e.score}\x1bRESET`),
          blank()
        );
      });
      return { lines };
    }

    case 'certifications': {
      const lines: TerminalLine[] = [out('  \x1bACCENT\x1bCertifications\x1bRESET'), blank()];
      data.certifications.forEach((c, i) =>
        lines.push(out(`  \x1bDIM\x1b${String(i + 1).padStart(2)}.\x1bRESET  ${c}`))
      );
      return { lines };
    }

    case 'achievements': {
      const lines: TerminalLine[] = [out('  \x1bACCENT\x1bAchievements\x1bRESET'), blank()];
      data.achievements.forEach((a) => lines.push(out(`  \x1bGREEN\x1b🏆\x1bRESET  ${a}`)));
      return { lines };
    }

    case 'contact':
      return {
        lines: [
          out('  \x1bACCENT\x1bContact\x1bRESET'),
          blank(),
          out(`  📧  ${data.personal.email}`),
          out(`  📱  ${data.personal.phone}`),
          out(`  📍  ${data.personal.location}`),
        ],
      };

    case 'socials':
      return {
        lines: [
          out('  \x1bACCENT\x1bSocials\x1bRESET'),
          blank(),
          link(`  \x1bDIM\x1bGitHub     →\x1bRESET \x1bLINK\x1b${data.socials.github}\x1bRESET`, data.socials.github),
          link(`  \x1bDIM\x1bLinkedIn   →\x1bRESET \x1bLINK\x1b${data.socials.linkedin}\x1bRESET`, data.socials.linkedin),
          link(`  \x1bDIM\x1bLeetCode   →\x1bRESET \x1bLINK\x1b${data.socials.leetcode}\x1bRESET`, data.socials.leetcode),
          link(`  \x1bDIM\x1bHackerRank →\x1bRESET \x1bLINK\x1b${data.socials.hackerrank}\x1bRESET`, data.socials.hackerrank),
          link(`  \x1bDIM\x1bWebsite    →\x1bRESET \x1bLINK\x1b${data.socials.website}\x1bRESET`, data.socials.website),
        ],
      };

    case 'echo':
      return { lines: [out(args.join(' '))] };

    case 'date':
      return { lines: [out(new Date().toString())] };

    case 'man': {
      if (!args[0]) return { lines: [err('man: What manual page do you want? Usage: man <command>')] };
      const subject = args[0].toLowerCase();
      const manPages: Record<string, string> = {
        about: 'about(1)  —  Display personal bio and location',
        whoami: 'whoami(1) —  Alias for `about`',
        projects: 'projects(1) — List all projects. Use `projects <name>` for details.',
        skills: 'skills(1) — Display full tech stack grouped by category',
        experience: 'experience(1) — Show work experience and highlights',
        education: 'education(1) — Show academic background and scores',
        certifications: 'certifications(1) — List all certifications',
        achievements: 'achievements(1) — List awards and competitive rankings',
        contact: 'contact(1) — Show email, phone, and location',
        socials: 'socials(1) — List all social profile links',
        echo: 'echo(1) — Print arguments to the terminal',
        date: 'date(1) — Print current system date and time',
        ls: 'ls(1) — List available portfolio sections',
        cat: 'cat(1) — Read a section (e.g. cat projects). Also works on readme.md',
        pwd: 'pwd(1) — Print the working directory (always /home/haricharanbonam/portfolio)',
        clear: 'clear(1) — Clear all terminal output',
        exit: 'exit(1) — Close the terminal and return to portfolio',
        man: 'man(1) — Display this manual. Usage: man <command>',
        help: 'help(1) — Show all available commands with brief descriptions',
      };
      if (manPages[subject]) return { lines: [blank(), out(`  ${manPages[subject]}`), blank()] };
      return { lines: [err(`man: no entry for '${subject}'`)] };
    }

    case 'clear':
      return { lines: [] }; // handled specially in the component

    case 'exit':
      return { lines: [out('Goodbye 👋  Redirecting you back to the portfolio…')], shouldClose: true };

    case '':
      return { lines: [] };

    default:
      return {
        lines: [
          err(`command not found: ${cmd}`),
          out(`  Run \x1bDIM\x1bhelp\x1bRESET to see available commands.`),
        ],
      };
  }
}

// ─── Render a text string with colour tokens ──────────────────────────────────

function renderText(text: string): React.ReactNode {
  const COLOR: Record<string, string> = {
    GREEN: '#4ec994',
    ACCENT: '#e5c07b',
    DIM: '#5c6370',
    WARN: '#e06c75',
    LINK: '#61afef',
    RESET: '',
  };

  const parts = text.split(/\\x1b([A-Z]+)\\x1b/g);
  // The split produces: [normal, TOKEN, normal, TOKEN, …]
  // But our delimiter is literally \x1b not the escape char, so split on it:
  const segments = text.split(/\x1b([A-Z]+)\x1b/g);

  let currentColor = '';
  return (
    <>
      {segments.map((seg, i) => {
        if (i % 2 === 1) {
          // This is a token
          currentColor = seg === 'RESET' ? '' : (COLOR[seg] ?? '');
          return null;
        }
        if (!seg) return null;
        return (
          <span key={i} style={currentColor ? { color: currentColor } : undefined}>
            {seg}
          </span>
        );
      })}
    </>
  );
}

// ─── Terminal Component ───────────────────────────────────────────────────────

interface TerminalModeProps {
  onClose: () => void;
}

export default function TerminalMode({ onClose }: TerminalModeProps) {
  const BOOT_LINES: TerminalLine[] = [
    { id: 1, kind: 'system', text: '  ██╗  ██╗ ██████╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ ' },
    { id: 2, kind: 'system', text: '  ██║  ██║██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗' },
    { id: 3, kind: 'system', text: '  ███████║██║         ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║' },
    { id: 4, kind: 'system', text: '  ██╔══██║██║         ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║' },
    { id: 5, kind: 'system', text: '  ██║  ██║╚██████╗    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝' },
    { id: 6, kind: 'system', text: '  ╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ' },
    { id: 7, kind: 'system', text: '' },
    { id: 8, kind: 'system', text: '  Welcome to haricharanbonam.tech — Interactive Terminal v1.0.0' },
    { id: 9, kind: 'system', text: '  Type \x1bGREEN\x1bhelp\x1bRESET to see all commands.' },
    { id: 10, kind: 'system', text: '' },
  ];

  const [lines, setLines] = useState<TerminalLine[]>(BOOT_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isClosing, setIsClosing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lineIdRef = useRef(100);

  const nextId = () => lineIdRef.current++;

  const addLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines.map((l) => ({ ...l, id: nextId() }))]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  // Auto-focus input on mount
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const submit = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      const echo: TerminalLine = {
        id: nextId(),
        kind: 'input',
        text: trimmed,
      };

      if (trimmed === 'clear') {
        setLines([]);
        setInput('');
        if (trimmed) setHistory((h) => [trimmed, ...h]);
        setHistoryIdx(-1);
        return;
      }

      const result = runCommand(trimmed);

      if (result.shouldClose) {
        setLines((prev) => [...prev, echo, ...result.lines.map((l) => ({ ...l, id: nextId() }))]);
        setInput('');
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(onClose, 400);
        }, 1200);
        return;
      }

      setLines((prev) => [
        ...prev,
        ...(trimmed ? [echo] : []),
        ...result.lines.map((l) => ({ ...l, id: nextId() })),
      ]);

      if (trimmed) {
        setHistory((h) => [trimmed, ...h.slice(0, 49)]);
      }
      setHistoryIdx(-1);
      setInput('');
    },
    [onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(input);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(newIdx);
      setInput(history[newIdx] ?? '');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? '' : (history[newIdx] ?? ''));
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const prefix = input.toLowerCase().trim();
      if (!prefix) return;
      const match = COMMANDS.find((c) => c.startsWith(prefix));
      if (match) setInput(match);
      return;
    }
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
      return;
    }
  };

  return (
    <div
      className={`tm-overlay ${isClosing ? 'tm-closing' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) inputRef.current?.focus();
      }}
    >
      <div className="tm-window">
        {/* Title bar */}
        <div className="tm-titlebar">
          <div className="tm-dots">
            <button className="tm-dot tm-dot-close" onClick={onClose} title="Close" aria-label="Close terminal">
              <X size={8} />
            </button>
            <button className="tm-dot tm-dot-min" title="Minimise" aria-label="Minimise" onClick={onClose}>
              <Minus size={8} />
            </button>
            <button className="tm-dot tm-dot-max" title="Full screen" aria-label="Full screen">
              <Square size={7} />
            </button>
          </div>
          <span className="tm-title">haricharanbonam@portfolio — bash</span>
          <div style={{ width: 66 }} />
        </div>

        {/* Output */}
        <div className="tm-output" onClick={() => inputRef.current?.focus()}>
          {lines.map((line) => (
            <div key={line.id} className={`tm-line tm-line-${line.kind}`}>
              {line.kind === 'input' ? (
                <span className="tm-prompt-echo">
                  <span className="tm-ps1-user">haricharanbonam</span>
                  <span className="tm-ps1-sep">@</span>
                  <span className="tm-ps1-host">portfolio</span>
                  <span className="tm-ps1-colon">:</span>
                  <span className="tm-ps1-path">~/portfolio</span>
                  <span className="tm-ps1-dollar"> $</span>
                  <span className="tm-input-text"> {line.text}</span>
                </span>
              ) : line.kind === 'link' ? (
                <span>
                  {renderText(line.text.replace(/https?:\/\/[^\s]+/, ''))}
                  {line.href && (
                    <a href={line.href} target="_blank" rel="noopener noreferrer" className="tm-link">
                      {line.href}
                    </a>
                  )}
                </span>
              ) : (
                <span className="tm-text">{renderText(line.text)}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input row */}
        <div className="tm-input-row">
          <span className="tm-ps1-user">haricharanbonam</span>
          <span className="tm-ps1-sep">@</span>
          <span className="tm-ps1-host">portfolio</span>
          <span className="tm-ps1-colon">:</span>
          <span className="tm-ps1-path">~/portfolio</span>
          <span className="tm-ps1-dollar"> $ </span>
          <input
            ref={inputRef}
            className="tm-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
