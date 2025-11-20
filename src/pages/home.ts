import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const HomePage = () => {
  return Layout('Inicio - Mi Blog', html`
    ${Header('/')}
    
    <main class="py-12">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Hero Section -->
        <section class="text-center py-16 animate-fade-in">
          <h1 class="text-6xl font-extrabold mb-4 gradient-text">
            Bienvenido a Mi Blog
          </h1>
          <p class="text-xl dark:text-slate-400 text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Descubre artículos sobre tecnología, desarrollo web y las últimas tendencias en programación.
          </p>
          <a 
            href="/blog" 
            class="inline-block bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Ver Artículos
          </a>
        </section>

        <!-- Features Section -->
        <section class="mt-20">
          <h2 class="text-4xl font-bold text-center mb-12">¿Por qué este blog?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div class="text-5xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-3">Contenido de Calidad</h3>
              <p class="dark:text-slate-400 text-slate-600 leading-relaxed">
                Artículos bien investigados y escritos con pasión por la tecnología.
              </p>
            </div>
            <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div class="text-5xl mb-4">💡</div>
              <h3 class="text-2xl font-bold mb-3">Tutoriales Prácticos</h3>
              <p class="dark:text-slate-400 text-slate-600 leading-relaxed">
                Aprende con ejemplos reales y código que puedes usar en tus proyectos.
              </p>
            </div>
            <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div class="text-5xl mb-4">🌟</div>
              <h3 class="text-2xl font-bold mb-3">Siempre Actualizado</h3>
              <p class="dark:text-slate-400 text-slate-600 leading-relaxed">
                Mantente al día con las últimas tecnologías y mejores prácticas.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="mt-20 text-center glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-12">
          <h2 class="text-3xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p class="dark:text-slate-400 text-slate-600 mb-8 text-lg">
            No dudes en contactarme. Estoy aquí para ayudarte.
          </p>
          <a 
            href="/contacto" 
            class="inline-block bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Contactar
          </a>
        </section>
      </div>
    </main>

    ${Footer()}
  `)
}
