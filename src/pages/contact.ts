import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const ContactPage = (success?: boolean) => {
  return Layout({
    title: 'Contacto - Hablemos de tu Proyecto | WebGae Dev',
    description: 'Ponte en contacto para discutir tu proyecto web. Respuesta rápida y presupuesto sin compromiso. Desarrollo web profesional.',
    keywords: 'contacto desarrollo web, presupuesto web, consulta web, contratar desarrollador',
    canonicalUrl: 'https://mi-app-hono.ximosa.workers.dev/contacto'
  }, html`
    ${Header('/contacto')}
    
    <main class="py-12">
      <div class="max-w-2xl mx-auto px-6">
        <h1 class="text-5xl font-extrabold mb-4 text-center">
          Contacto
        </h1>
        <p class="dark:text-slate-400 text-slate-600 text-center text-lg mb-12">
          ¿Tienes alguna pregunta o sugerencia? Envíame un mensaje
        </p>

        ${success ? html`
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-green-400">
            ✓ Mensaje enviado correctamente. Te responderé pronto.
          </div>
        ` : ''}

        <div class="glass border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8">
          <form method="POST" action="/contacto" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 font-semibold dark:text-slate-200 text-slate-900">
                Nombre
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                class="w-full px-4 py-3 dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-300 rounded-lg dark:text-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label for="email" class="block mb-2 font-semibold dark:text-slate-200 text-slate-900">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                class="w-full px-4 py-3 dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-300 rounded-lg dark:text-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label for="subject" class="block mb-2 font-semibold dark:text-slate-200 text-slate-900">
                Asunto
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required
                class="w-full px-4 py-3 dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-300 rounded-lg dark:text-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label for="message" class="block mb-2 font-semibold dark:text-slate-200 text-slate-900">
                Mensaje
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                required
                class="w-full px-4 py-3 dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-300 rounded-lg dark:text-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-y"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="mt-12 text-center">
          <h3 class="text-xl font-bold mb-4">Otras formas de contacto</h3>
          <div class="flex gap-8 justify-center flex-wrap">
            <a href="mailto:tu@email.com" class="dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
              <span>📧</span>
              <span>tu@email.com</span>
            </a>
            <a href="#" class="dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
              <span>🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" class="dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </main>

    ${Footer()}
  `)
}
