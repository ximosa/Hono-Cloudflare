import { html } from 'hono/html'

export const Footer = () => html`
  <footer class="dark:bg-slate-800 bg-slate-100 border-t dark:border-slate-700/50 border-slate-200 mt-16">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="text-center">
        <p class="dark:text-slate-300 text-slate-700 mb-2">
          &copy; ${new Date().getFullYear()} Mi Blog. Todos los derechos reservados.
        </p>
        <p class="dark:text-slate-500 text-slate-500 mb-4">
          Desarrollado con Hono + Cloudflare Workers + Supabase
        </p>
        <div class="flex gap-6 justify-center mt-4">
          <a href="#" class="dark:text-slate-400 dark:hover:text-primary-400 text-slate-600 hover:text-slate-900 transition-colors" aria-label="Twitter">
            Twitter
          </a>
          <a href="#" class="dark:text-slate-400 dark:hover:text-primary-400 text-slate-600 hover:text-slate-900 transition-colors" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://dev.webgae.com/admin" class="dark:text-slate-400 dark:hover:text-primary-400 text-slate-600 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
            Admin
          </a>
        </div>
      </div>
    </div>
  </footer>
`
