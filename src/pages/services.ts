import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const ServicesPage = () => {
    return Layout('Servicios - WebGae Dev', html`
    ${Header('/servicios')}
    
    <main>
      <!-- Hero Section -->
      <section class="relative py-24 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 pointer-events-none"></div>
        
        <!-- Decorative blobs -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span class="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
            Soluciones Digitales a Medida
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Impulsa tu negocio con <br/>
            <span class="gradient-text">tecnología de vanguardia</span>
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Transformo tus ideas en productos digitales excepcionales. Desde sitios web ultrarrápidos hasta aplicaciones complejas, ofrezco soluciones que escalan con tu éxito.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contacto" 
              class="bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors"></div>
              
              <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h3 class="text-2xl font-bold mb-4">Desarrollo Web</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Sitios web modernos, rápidos y responsivos construidos con las últimas tecnologías (React, Hono, Tailwind). Optimizados para SEO y conversión.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Landing Pages de Alta Conversión
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Webs Corporativas
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Blogs y Portafolios
                </li>
              </ul>
            </div>

            <!-- Service 2 -->
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-colors"></div>
              
              <div class="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 class="text-2xl font-bold mb-4">Aplicaciones Web</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Sistemas complejos y dashboards interactivos. Transformo procesos manuales en software eficiente y fácil de usar.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Paneles de Administración
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  SaaS (Software as a Service)
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Integración de APIs
                </li>
              </ul>
            </div>

            <!-- Service 3 -->
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-colors"></div>
              
              <div class="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 class="text-2xl font-bold mb-4">Optimización & SEO</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Mejora la velocidad y visibilidad de tu sitio. Auditorías de rendimiento, optimización de Core Web Vitals y SEO técnico.
              </p>
              <ul class="space-y-2 mb-8">
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Auditoría de Performance
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  SEO Técnico
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Mejora de Accesibilidad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-24">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Mi Proceso de Trabajo</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Un flujo de trabajo transparente y eficiente para asegurar resultados de calidad.
            </p>
          </div>

          <div class="relative">
            <!-- Connecting Line (Desktop) -->
            <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <!-- Step 1 -->
              <div class="text-center">
                <div class="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800 border-4 border-white dark:border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg relative">
                  1
                </div>
                <h3 class="text-xl font-bold mb-2">Descubrimiento</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400">Entender tus objetivos, audiencia y requerimientos técnicos.</p>
              </div>

              <!-- Step 2 -->
              <div class="text-center">
                <div class="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800 border-4 border-white dark:border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg relative">
                  2
                </div>
                <h3 class="text-xl font-bold mb-2">Diseño</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400">Prototipado y diseño visual centrado en la experiencia de usuario.</p>
              </div>

              <!-- Step 3 -->
              <div class="text-center">
                <div class="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800 border-4 border-white dark:border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg relative">
                  3
                </div>
                <h3 class="text-xl font-bold mb-2">Desarrollo</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400">Código limpio, modular y testeado. Construcción robusta.</p>
              </div>

              <!-- Step 4 -->
              <div class="text-center">
                <div class="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800 border-4 border-white dark:border-slate-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg relative">
                  4
                </div>
                <h3 class="text-xl font-bold mb-2">Lanzamiento</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400">Despliegue, configuración de dominio y soporte post-lanzamiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20">
        <div class="max-w-5xl mx-auto px-6">
          <div class="glass p-12 rounded-3xl border dark:border-slate-700/50 border-slate-200 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            
            <h2 class="text-4xl font-bold mb-6 relative z-10">¿Tienes un proyecto en mente?</h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
              Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales. Presupuesto sin compromiso.
            </p>
            <a 
              href="/contacto" 
              class="relative z-10 inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `)
}
