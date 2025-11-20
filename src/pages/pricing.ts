import { html } from 'hono/html'
import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const PricingPage = () => {
    return Layout('Precios - WebGae Dev', html`
    ${Header('/precios')}
    
    <main>
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden text-center">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <span class="inline-block py-1 px-3 rounded-full bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold mb-6 border border-green-200 dark:border-green-800 backdrop-blur-sm">
            Inversión Transparente
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Planes que escalan <br/>
            <span class="gradient-text">con tu negocio</span>
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Elige el plan perfecto para tus necesidades. Sin costos ocultos ni sorpresas.
          </p>
          
          <!-- Toggle (Visual only for now) -->
          <div class="flex justify-center items-center gap-4 mb-12">
            <span class="text-slate-600 dark:text-slate-400 font-medium">Mensual</span>
            <div class="w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full p-1 relative cursor-pointer">
              <div class="w-6 h-6 bg-white dark:bg-primary-500 rounded-full shadow-md transform translate-x-6 transition-transform"></div>
            </div>
            <span class="text-slate-900 dark:text-white font-bold">Anual <span class="text-xs text-green-500 ml-1">-20%</span></span>
          </div>
        </div>
      </section>

      <!-- Pricing Cards -->
      <section class="pb-24">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <!-- Basic Plan -->
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 relative">
              <h3 class="text-xl font-bold mb-2">Inicial</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Perfecto para sitios personales y blogs.</p>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-extrabold">$499</span>
                <span class="text-slate-500 dark:text-slate-400">/proyecto</span>
              </div>
              <a href="/contacto" class="block w-full py-3 px-6 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold hover:border-slate-900 dark:hover:border-white transition-colors mb-8">
                Empezar
              </a>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Landing Page (1 página)
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Diseño Responsivo
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Optimización Básica SEO
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Formulario de Contacto
                </li>
                <li class="flex items-center gap-3 text-slate-400">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  CMS Autoadministrable
                </li>
              </ul>
            </div>

            <!-- Pro Plan (Highlighted) -->
            <div class="glass p-8 rounded-3xl border-2 border-primary-500 dark:border-primary-400 hover:-translate-y-2 transition-transform duration-300 relative transform md:-translate-y-4 shadow-2xl shadow-primary-500/10">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Más Popular
              </div>
              <h3 class="text-xl font-bold mb-2">Profesional</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Para negocios que buscan crecer.</p>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-extrabold">$999</span>
                <span class="text-slate-500 dark:text-slate-400">/proyecto</span>
              </div>
              <a href="/contacto" class="block w-full py-3 px-6 text-center rounded-xl bg-gradient-to-r dark:from-primary-400 dark:to-red-500 from-slate-900 to-slate-700 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 mb-8">
                Elegir Profesional
              </a>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Sitio Web Completo (hasta 5 páginas)
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  CMS (Blog/Noticias)
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  SEO Avanzado & Analytics
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Integración con Redes Sociales
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  1 Mes de Soporte Gratis
                </li>
              </ul>
            </div>

            <!-- Enterprise Plan -->
            <div class="glass p-8 rounded-3xl border dark:border-slate-700/50 border-slate-200 hover:-translate-y-2 transition-transform duration-300 relative">
              <h3 class="text-xl font-bold mb-2">Empresarial</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Soluciones a medida de gran escala.</p>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-extrabold">Personalizado</span>
              </div>
              <a href="/contacto" class="block w-full py-3 px-6 text-center rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold hover:border-slate-900 dark:hover:border-white transition-colors mb-8">
                Contactar Ventas
              </a>
              <ul class="space-y-4 text-sm">
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Desarrollo Full Stack a Medida
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  E-commerce / Tienda Online
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Integraciones API Complejas
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Soporte Prioritario 24/7
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  Consultoría Técnica
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div class="max-w-3xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          
          <div class="space-y-6">
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200">
              <h3 class="font-bold text-lg mb-2">¿Qué incluye el mantenimiento?</h3>
              <p class="text-slate-600 dark:text-slate-400">Incluye actualizaciones de seguridad, copias de seguridad diarias, monitoreo de tiempo de actividad y pequeños cambios de contenido mensuales.</p>
            </div>
            
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200">
              <h3 class="font-bold text-lg mb-2">¿Cuánto tiempo toma desarrollar una web?</h3>
              <p class="text-slate-600 dark:text-slate-400">Depende de la complejidad. Una landing page puede estar lista en 1 semana, mientras que un sitio corporativo completo puede tomar de 3 a 5 semanas.</p>
            </div>
            
            <div class="glass p-6 rounded-2xl border dark:border-slate-700/50 border-slate-200">
              <h3 class="font-bold text-lg mb-2">¿Hay costos recurrentes?</h3>
              <p class="text-slate-600 dark:text-slate-400">Solo el dominio (aprox. $15/año) y el hosting. Si eliges mi plan de mantenimiento, yo me encargo de todo por una cuota mensual fija.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Guarantee Section -->
      <section class="py-20 text-center">
        <div class="max-w-4xl mx-auto px-6">
          <div class="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            <svg class="w-12 h-12 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h2 class="text-3xl font-bold mb-4">Garantía de Satisfacción</h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mi objetivo es superar tus expectativas. Si no estás satisfecho con el diseño inicial, trabajaré contigo hasta que sea perfecto.
          </p>
        </div>
      </section>
    </main>

    ${Footer()}
  `)
}
