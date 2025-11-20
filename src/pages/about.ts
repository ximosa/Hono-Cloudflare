import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const AboutPage = () => {
    return Layout('Sobre Mí - WebGae Dev', html`
    ${Header('/sobre-mi')}
    
    <main>
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1 text-center md:text-left animate-fade-in">
              <span class="inline-block py-1 px-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6 border border-slate-300 dark:border-slate-700 backdrop-blur-sm">
                Desarrollador Full Stack & Creador Digital
              </span>
              <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Creando experiencias digitales <span class="gradient-text">memorables</span>
              </h1>
              <p class="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Hola, soy Joaquín. Me apasiona transformar ideas complejas en software elegante, rápido y accesible. Especializado en el ecosistema moderno de la web.
              </p>
              <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="/contacto" 
                  class="bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Trabajemos Juntos
                </a>
                <a 
                  href="#skills" 
                  class="glass border dark:border-slate-700/50 border-slate-200 text-slate-700 dark:text-slate-300 font-bold px-8 py-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  Ver Habilidades
                </a>
              </div>
            </div>
            
            <div class="flex-1 relative">
              <div class="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div class="absolute inset-0 bg-gradient-to-tr dark:from-primary-500 dark:to-purple-500 from-slate-800 to-slate-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                  alt="Foto de perfil" 
                  class="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                />
                
                <!-- Floating Cards -->
                <div class="absolute -bottom-6 -right-6 glass p-4 rounded-xl border dark:border-slate-700/50 border-slate-200 shadow-xl animate-bounce" style="animation-duration: 3s;">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                      5+
                    </div>
                    <div>
                      <p class="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Años de Exp.</p>
                      <p class="font-bold text-slate-800 dark:text-slate-200">Desarrollo Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Herramientas y tecnologías que utilizo para construir productos digitales de alto rendimiento.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            ${[
            { name: 'JavaScript/TypeScript', icon: '⚡', desc: 'Lenguaje Principal' },
            { name: 'Hono & Cloudflare', icon: '🔥', desc: 'Backend & Edge' },
            { name: 'React & Next.js', icon: '⚛️', desc: 'Frontend Moderno' },
            { name: 'Tailwind CSS', icon: '🎨', desc: 'Estilos & Diseño' },
            { name: 'Node.js', icon: '🟢', desc: 'Runtime' },
            { name: 'Supabase/SQL', icon: '🗄️', desc: 'Base de Datos' },
            { name: 'Git & GitHub', icon: '📦', desc: 'Control de Versiones' },
            { name: 'UI/UX Design', icon: '✨', desc: 'Prototipado' }
        ].map(skill => html`
              <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">${skill.icon}</div>
                <h3 class="font-bold text-lg mb-1 text-slate-800 dark:text-slate-200">${skill.name}</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">${skill.desc}</p>
              </div>
            `)}
          </div>
        </div>
      </section>

      <!-- Experience/Philosophy Section -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="glass p-8 md:p-12 rounded-3xl border dark:border-slate-700/50 border-slate-200 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br dark:from-primary-500/10 dark:to-purple-500/10 from-slate-200/50 to-slate-300/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <h2 class="text-3xl font-bold mb-8 relative z-10">Mi Enfoque</h2>
            <div class="prose max-w-none relative z-10">
              <p class="text-lg leading-relaxed mb-6">
                Creo firmemente que el mejor código es aquel que no solo funciona, sino que es mantenible, escalable y, sobre todo, resuelve problemas reales de las personas.
              </p>
              <p class="text-lg leading-relaxed mb-6">
                Mi metodología de trabajo combina las mejores prácticas de ingeniería de software con un ojo agudo para el diseño. No solo escribo código; construyo soluciones completas pensando siempre en el usuario final.
              </p>
              <div class="grid md:grid-cols-2 gap-8 mt-12 not-prose">
                <div>
                  <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                    <span class="text-primary-500">01.</span> Rendimiento
                  </h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm">
                    Optimización obsesiva para asegurar tiempos de carga instantáneos y experiencias fluidas.
                  </p>
                </div>
                <div>
                  <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                    <span class="text-primary-500">02.</span> Accesibilidad
                  </h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm">
                    Construyendo para todos, asegurando que la web sea inclusiva y utilizable.
                  </p>
                </div>
                <div>
                  <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                    <span class="text-primary-500">03.</span> Diseño Limpio
                  </h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm">
                    Interfaces intuitivas que guían al usuario sin fricción ni distracciones innecesarias.
                  </p>
                </div>
                <div>
                  <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                    <span class="text-primary-500">04.</span> Código Moderno
                  </h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm">
                    Utilizando las últimas características y estándares para asegurar longevidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 text-center">
        <div class="max-w-3xl mx-auto px-6">
          <h2 class="text-4xl font-bold mb-6">¿Listo para empezar un proyecto?</h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>
          <a 
            href="/contacto" 
            class="inline-block bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Hablemos Ahora
          </a>
        </div>
      </section>
    </main>

    ${Footer()}
  `)
}
