import { html } from 'hono/html'

interface SEOMetadata {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  author?: string
  structuredData?: any
}

export const Layout = (metadata: SEOMetadata, content: any) => {
  const {
    title,
    description,
    keywords = 'desarrollo web, Hono, Cloudflare Workers, TypeScript, React, aplicaciones web, edge computing',
    ogImage = 'https://mi-app-hono.ximosa.workers.dev/og-image.jpg',
    ogType = 'website',
    canonicalUrl = 'https://mi-app-hono.ximosa.workers.dev',
    author = 'WebGae Dev',
    structuredData
  } = metadata

  return html`
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="${author}">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Spanish">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${ogType}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:site_name" content="WebGae Dev">
    <meta property="og:locale" content="es_ES">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="${ogImage}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Stylesheet -->
    <link href="/styles.css" rel="stylesheet">
    
    ${structuredData ? html`
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
      ${JSON.stringify(structuredData)}
    </script>
    ` : ''}
    <style>
      body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }
      
      /* Animaciones personalizadas */
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out;
      }
      
      /* Glassmorphism effect */
      .glass {
        background: rgba(30, 41, 59, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      
      /* Gradient text */
      .gradient-text {
        background: linear-gradient(to right, #f59e0b, #ef4444);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      html:not(.dark) .gradient-text {
        background: linear-gradient(to right, #0f172a, #334155);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      /* Prose styles for blog content */
      .prose {
        color: #cbd5e1;
        line-height: 1.75;
      }
      
      .prose h1, .prose h2, .prose h3, .prose h4 {
        color: #f8fafc;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        line-height: 1.3;
      }
      
      .prose h1 { font-size: 2.25rem; }
      .prose h2 { font-size: 1.875rem; }
      .prose h3 { font-size: 1.5rem; }
      .prose h4 { font-size: 1.25rem; }
      
      .prose p {
        margin-bottom: 1.5rem;
        color: #cbd5e1;
      }
      
      .prose a {
        color: #f59e0b;
        text-decoration: underline;
        transition: color 0.2s;
      }
      
      .prose a:hover {
        color: #d97706;
      }
      
      html:not(.dark) .prose a {
        color: #0f172a;
      }
      
      html:not(.dark) .prose a:hover {
        color: #334155;
      }
      
      .prose strong {
        color: #e2e8f0;
        font-weight: 600;
      }
      
      .prose ul, .prose ol {
        margin: 1.5rem 0;
        padding-left: 1.5rem;
        color: #cbd5e1;
      }
      
      .prose li {
        margin: 0.5rem 0;
      }
      
      .prose img {
        border-radius: 0.75rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        margin: 2rem 0;
        max-width: 100%;
        height: auto;
      }
      
      .prose code {
        background: rgba(251, 191, 36, 0.1);
        color: #fbbf24;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-size: 0.875em;
        font-family: 'Courier New', monospace;
      }
      
      html:not(.dark) .prose code {
        background: rgba(15, 23, 42, 0.1);
        color: #0f172a;
      }
      
      .prose pre {
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        padding: 1rem;
        overflow-x: auto;
        margin: 1.5rem 0;
      }
      
      .prose pre code {
        background: none;
        padding: 0;
        color: #cbd5e1;
      }
      
      html:not(.dark) .prose pre {
        background: rgba(15, 23, 42, 0.05);
        border-color: rgba(15, 23, 42, 0.1);
      }
      
      html:not(.dark) .prose pre code {
        color: #0f172a;
      }
      
      .prose blockquote {
        border-left: 4px solid #f59e0b;
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #94a3b8;
        font-style: italic;
      }
      
      html:not(.dark) .prose blockquote {
        border-left-color: #0f172a;
        color: #475569;
      }
      
      /* Light mode styles */
      html:not(.dark) {
        --bg-primary: #ffffff;
        --bg-secondary: #f8fafc;
        --bg-card: rgba(248, 250, 252, 0.8);
        --text-primary: #0f172a;
        --text-secondary: #475569;
        --text-muted: #64748b;
      }
      
      html:not(.dark) body {
        background: linear-gradient(to bottom, #f1f5f9, #ffffff);
      }
      
      html:not(.dark) .glass {
        background: rgba(255, 255, 255, 0.7);
        border-color: rgba(0, 0, 0, 0.1);
      }
      
      html:not(.dark) .prose {
        color: #334155;
      }
      
      html:not(.dark) .prose h1,
      html:not(.dark) .prose h2,
      html:not(.dark) .prose h3,
      html:not(.dark) .prose h4 {
        color: #0f172a;
      }
      
      html:not(.dark) .prose p {
        color: #334155;
      }
      
      html:not(.dark) .prose strong {
        color: #1e293b;
      }
      
      html:not(.dark) .prose code {
        background: rgba(251, 191, 36, 0.2);
      }
      
      html:not(.dark) .prose pre {
        background: rgba(15, 23, 42, 0.05);
        border-color: rgba(0, 0, 0, 0.1);
      }
      
      html:not(.dark) .prose blockquote {
        color: #64748b;
        border-left-color: #0f172a;
      }

      /* Fixes for Lists in Light Mode */
      html:not(.dark) .prose ul, 
      html:not(.dark) .prose ol {
        color: #334155;
      }
      
      html:not(.dark) .prose li {
        color: #334155;
      }

      html:not(.dark) .prose ul > li::before {
        background-color: #94a3b8; /* Bullet color */
      }

      html:not(.dark) .prose ol > li::before {
        color: #64748b; /* Number color */
      }

      /* Fixes for Inline Code in Light Mode */
      html:not(.dark) .prose code {
        background-color: #f1f5f9;
        color: #0f172a;
        border: 1px solid #e2e8f0;
        font-weight: 600;
      }
    </style>
    <script>
      // Theme toggle functionality
      (function() {
        const theme = localStorage.getItem('theme') || 'light';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      })();
    </script>
  </head>
  <body class="dark:bg-slate-900 dark:text-slate-50 bg-white text-slate-900 min-h-screen transition-colors duration-300">
    <div class="dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      ${content}
    </div>
  </body>
  </html>
`
}
