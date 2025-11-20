import { html, raw } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Post, Comment } from '../types'

export const BlogPostPage = (post: Post, comments: Comment[]) => {
  return Layout(`${post.title} - Mi Blog`, html`
    ${Header('/blog')}
    
    <main class="py-12">
      <div class="max-w-4xl mx-auto px-6">
        <article>
          <header class="mb-8">
            <a href="/blog" class="dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-primary-400 text-sm inline-block mb-4 transition-colors">
              ← Volver al blog
            </a>
            <h1 class="text-5xl font-extrabold mb-4 leading-tight">
              ${post.title}
            </h1>
            <div class="flex gap-4 dark:text-slate-500 text-slate-500 text-sm">
              ${post.author ? html`<span>Por ${post.author}</span>` : ''}
              ${post.author ? html`<span>•</span>` : ''}
              <time datetime="${post.created_at}">
                ${new Date(post.created_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
              </time>
            </div>
          </header>

          <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-12">
            <div class="prose max-w-none">
              ${raw(post.content)}
            </div>
          </div>
        </article>

        <!-- Comments Section -->
        <section class="mt-12">
          <h2 class="text-3xl font-bold mb-6">
            Comentarios (${comments.length})
          </h2>
          
          ${comments.length === 0 ? html`
            <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8">
              <p class="dark:text-slate-400 text-slate-600">No hay comentarios todavía. ¡Sé el primero en comentar!</p>
            </div>
          ` : html`
            <div class="space-y-6">
              ${comments.map(comment => html`
                <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-6">
                  <div class="flex justify-between mb-3">
                    <strong class="dark:text-slate-200 text-slate-900">${comment.author}</strong>
                    <span class="dark:text-slate-500 text-slate-500 text-sm">
                      ${new Date(comment.created_at).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                  <p class="dark:text-slate-400 text-slate-600">${comment.content}</p>
                </div>
              `)}
            </div>
          `}
        </section>
      </div>
    </main>

    ${Footer()}
  `)
}
