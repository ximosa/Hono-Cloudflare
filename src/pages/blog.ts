import { html, raw } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Post } from '../types'

export const BlogPage = (posts: Post[]) => {
  return Layout('Blog - Mi Blog', html`
    ${Header('/blog')}
    
    <main class="py-12">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-5xl font-extrabold mb-4 text-center">
          Artículos del Blog
        </h1>
        <p class="dark:text-slate-400 text-slate-600 text-center text-lg mb-12">
          Explora todos los artículos publicados
        </p>

        ${posts.length === 0 ? html`
          <div class="text-center py-16">
            <p class="dark:text-slate-400 text-slate-600 text-xl">No hay artículos publicados todavía.</p>
          </div>
        ` : html`
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${posts.map(post => {
    // Extraer excerpt o primeros 150 caracteres sin HTML
    const excerpt = post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'

    // Usar diferentes imágenes de Unsplash basadas en el ID del post si no hay image_url
    const imageUrls = [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop', // Laptop
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop', // Code
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop', // Programming
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop', // Desk
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop', // Laptop code
    ]

    // Usar image_url de la base de datos o fallback a imágenes variadas
    const imageUrl = post.image_url || imageUrls[post.id % imageUrls.length]

    return html`
                <article class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-in flex flex-col">
                  <!-- Featured Image -->
                  <div class="relative h-48 overflow-hidden">
                    <img 
                      src="${imageUrl}" 
                      alt="${post.title}"
                      class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <!-- Content -->
                  <div class="p-6 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-3">
                      <h2 class="text-2xl font-bold flex-1">
                        <a href="/blog/${post.slug}" class="dark:text-slate-50 text-slate-900 dark:hover:text-primary-400 hover:text-slate-700 transition-colors">
                          ${post.title}
                        </a>
                      </h2>
                    </div>
                    
                    <div class="flex items-center gap-3 dark:text-slate-500 text-slate-500 text-sm mb-4">
                      ${post.author ? html`
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                          </svg>
                          ${post.author}
                        </span>
                      ` : ''}
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                        </svg>
                        ${new Date(post.created_at).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })}
                      </span>
                    </div>
                    
                    <p class="dark:text-slate-400 text-slate-600 mb-6 leading-relaxed flex-1">
                      ${excerpt}
                    </p>
                    
                    <a 
                      href="/blog/${post.slug}" 
                      class="inline-flex items-center gap-2 bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity self-start"
                    >
                      Leer más
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </article>
              `
  })}
          </div>
        `}
      </div>
    </main>

    ${Footer()}
  `)
}
