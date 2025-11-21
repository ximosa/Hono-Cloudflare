import { html, raw } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Post, Comment } from '../types'

export const BlogPostPage = (post: Post, comments: Comment[], showSuccessMessage: boolean = false) => {
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
        <section id="comments" class="mt-12">
          <h2 class="text-3xl font-bold mb-6">
            Comentarios (${comments.length})
          </h2>

          ${showSuccessMessage ? html`
            <div id="success-message" class="mb-8 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 flex items-center gap-3 animate-fade-in transition-opacity duration-500">
              <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="font-bold">¡Comentario enviado con éxito!</p>
                <p class="text-sm opacity-90">Tu comentario está pendiente de moderación y será publicado en breve.</p>
              </div>
            </div>
            <script>
              // Desaparecer el mensaje después de 5 segundos
              setTimeout(() => {
                const msg = document.getElementById('success-message');
                if (msg) {
                  msg.style.opacity = '0';
                  setTimeout(() => msg.remove(), 500); // Esperar a que termine la transición
                  
                  // Limpiar la URL para que no vuelva a salir al recargar
                  const url = new URL(window.location);
                  url.searchParams.delete('comment_success');
                  window.history.replaceState({}, '', url);
                }
              }, 5000);
            </script>
          ` : ''}
          
          ${comments.length === 0 ? html`
            <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8">
              <p class="dark:text-slate-400 text-slate-600">No hay comentarios todavía. ¡Sé el primero en comentar!</p>
            </div>
          ` : html`
            <div class="space-y-6">
              ${comments.map(comment => html`
                <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-6">
                  <div class="flex justify-between mb-3">
                    <strong class="dark:text-slate-200 text-slate-900">${comment.author_name}</strong>
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

        <!-- Comment Form -->
        <section class="mt-12 mb-20">
          <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-6">Deja un comentario</h3>
            
            <form action="/blog/${post.slug}/comment" method="POST" class="space-y-6">
              <input type="hidden" name="post_id" value="${post.id}">
              
              <div>
                <label for="author_name" class="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="author_name" 
                  name="author_name" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-400 outline-none transition-all"
                  placeholder="Tu nombre"
                >
              </div>

              <div>
                <label for="author_email" class="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Correo Electrónico (No será publicado)</label>
                <input 
                  type="email" 
                  id="author_email" 
                  name="author_email" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-400 outline-none transition-all"
                  placeholder="tu@email.com"
                >
              </div>
              
              <div>
                <label for="content" class="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Comentario</label>
                <textarea 
                  id="content" 
                  name="content" 
                  rows="4" 
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-400 outline-none transition-all resize-none"
                  placeholder="Escribe tu comentario aquí..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full md:w-auto bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Publicar Comentario
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>

    ${Footer()}
  `)
}
