import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const HomePage = () => {
  return Layout('Inicio - WebGae Dev', html`
    ${Header('/')}
    
    <main>
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <!-- Background Effects -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <!-- Text Content -->
            <div class="text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 backdrop-blur-sm animate-fade-in-up">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="text-sm font-medium text-slate-600 dark:text-slate-300">Disponible para nuevos proyectos</span>
              </div>

              <h1 class="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight animate-fade-in-up" style="animation-delay: 0.1s;">
                <span class="block text-slate-900 dark:text-white">Código</span>
                <span class="gradient-text">Inteligente.</span>
              </h1>
              
              <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style="animation-delay: 0.2s;">
                Desarrollo aplicaciones web ultrarrápidas y escalables utilizando la última tecnología del Edge.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s;">
                <a 
                  href="/servicios" 
                  class="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  Explorar Servicios
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
                <a 
                  href="/contacto" 
                  class="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Hablemos
                </a>
              </div>

              <!-- Tech Stack Mini -->
              <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fade-in-up" style="animation-delay: 0.4s;">
                <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium uppercase tracking-wider">Potenciado por</p>
                <div class="flex flex-wrap gap-6 justify-center lg:justify-start opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <!-- Hono -->
                  <div class="flex items-center gap-2" title="Hono">
                    <span class="text-orange-500 font-bold text-xl">🔥 Hono</span>
                  </div>
                  <!-- Cloudflare -->
                  <div class="flex items-center gap-2" title="Cloudflare">
                    <span class="text-orange-400 font-bold text-xl">☁️ Workers</span>
                  </div>
                  <!-- TypeScript -->
                  <div class="flex items-center gap-2" title="TypeScript">
                    <span class="text-blue-500 font-bold text-xl">📘 TS</span>
                  </div>
                  <!-- Tailwind -->
                  <div class="flex items-center gap-2" title="Tailwind CSS">
                    <span class="text-cyan-400 font-bold text-xl">🎨 Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Visual Element -->
            <div class="relative hidden lg:block animate-fade-in" style="animation-delay: 0.5s;">
              <div class="relative z-10 glass border dark:border-slate-700/50 border-slate-200 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="bg-slate-900 rounded-2xl overflow-hidden aspect-[4/3] relative group">
                  <!-- Code Editor Mockup -->
                  <div class="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <div class="ml-4 text-xs text-slate-500 font-mono">app.ts</div>
                  </div>
                  <div class="p-6 font-mono text-sm text-slate-300 leading-relaxed">
                    <div class="flex"><span class="text-slate-600 w-6">1</span><span class="text-purple-400">import</span> { Hono } <span class="text-purple-400">from</span> <span class="text-green-400">'hono'</span></div>
                    <div class="flex"><span class="text-slate-600 w-6">2</span></div>
                    <div class="flex"><span class="text-slate-600 w-6">3</span><span class="text-purple-400">const</span> app = <span class="text-purple-400">new</span> <span class="text-yellow-400">Hono</span>()</div>
                    <div class="flex"><span class="text-slate-600 w-6">4</span></div>
                    <div class="flex"><span class="text-slate-600 w-6">5</span>app.<span class="text-blue-400">get</span>(<span class="text-green-400">'/'</span>, (c) => {</div>
                    <div class="flex"><span class="text-slate-600 w-6">6</span>  <span class="text-purple-400">return</span> c.<span class="text-blue-400">json</span>({</div>
                    <div class="flex"><span class="text-slate-600 w-6">7</span>    message: <span class="text-green-400">'Hello World!'</span>,</div>
                    <div class="flex"><span class="text-slate-600 w-6">8</span>    speed: <span class="text-green-400">'Ultra Fast ⚡️'</span></div>
                    <div class="flex"><span class="text-slate-600 w-6">9</span>  })</div>
                    <div class="flex"><span class="text-slate-600 w-6">10</span>})</div>
                    
                    <!-- Cursor Animation -->
                    <div class="absolute top-[168px] left-[60px] w-2 h-5 bg-blue-400 animate-pulse"></div>
                  </div>
                  
                  <!-- Overlay Gradient -->
                  <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
                </div>
              </div>

              <!-- Floating Badges -->
              <div class="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl animate-bounce" style="animation-duration: 3s;">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    ⚡️
                  </div>
                  <div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 font-bold">Performance</p>
                    <p class="text-lg font-bold text-slate-900 dark:text-white">100/100</p>
                  </div>
                </div>
              </div>

              <div class="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-xl animate-bounce" style="animation-duration: 4s;">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    🌐
                  </div>
                  <div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 font-bold">Global Edge</p>
                    <p class="text-lg font-bold text-slate-900 dark:text-white">Latency &lt; 50ms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Grid (Redesigned) -->
      <section class="py-24 bg-slate-50/50 dark:bg-slate-900/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir este stack?</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Combinamos las mejores herramientas modernas para crear experiencias web inigualables.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group">
              <div class="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🔥
              </div>
              <h3 class="text-xl font-bold mb-3">Hono Framework</h3>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ligero, rápido y diseñado para el Edge. Sin dependencias innecesarias, solo rendimiento puro.
              </p>
            </div>

            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group">
              <div class="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h3 class="text-xl font-bold mb-3">Cloudflare Workers</h3>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Tu código se ejecuta en cientos de servidores alrededor del mundo, cerca de tus usuarios.
              </p>
            </div>

            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 group">
              <div class="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h3 class="text-xl font-bold mb-3">Tailwind CSS</h3>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Diseños únicos y responsivos sin luchar contra el CSS. Estilos modernos y mantenibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- FAQ 1 -->
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200 hover:shadow-lg transition-shadow">
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg p-1 text-sm">🛠️</span> 
                ¿Qué tecnologías utilizas?
              </h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Me especializo en el stack moderno: Hono, Cloudflare Workers, React y TypeScript. Esto garantiza aplicaciones ultrarrápidas, seguras y escalables.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200 hover:shadow-lg transition-shadow">
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                <span class="bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg p-1 text-sm">🎯</span> 
                ¿Haces trabajos a medida?
              </h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Sí, desarrollo soluciones 100% personalizadas. No uso plantillas genéricas; diseño y programo pensando en las necesidades específicas de tu negocio.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200 hover:shadow-lg transition-shadow">
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                <span class="bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg p-1 text-sm">🤝</span> 
                ¿Ofreces soporte?
              </h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Absolutamente. Ofrezco planes de mantenimiento para asegurar que tu sitio funcione perfectamente, esté seguro y actualizado mes a mes.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200 hover:shadow-lg transition-shadow">
              <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                <span class="bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg p-1 text-sm">⏱️</span> 
                ¿Cuánto tiempo tarda?
              </h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Depende de la complejidad. Una landing page puede estar lista en 1 semana, mientras que un sitio corporativo completo suele tomar de 2 a 4 semanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="py-20">
        <div class="max-w-5xl mx-auto px-6">
          <div class="glass p-12 rounded-3xl border dark:border-slate-700/50 border-slate-200 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            
            <h2 class="text-4xl font-bold mb-6 relative z-10">¿Listo para lanzar tu proyecto?</h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
              Convierte tu idea en realidad con un desarrollo profesional y escalable.
            </p>
            <a 
              href="/contacto" 
              class="relative z-10 inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Empezar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>

    ${Footer()}
  `)
}
