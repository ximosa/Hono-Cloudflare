import { html } from 'hono/html'

export const Header = (currentPath: string = '/') => html`
  <header class="glass border-b dark:border-slate-700/50 border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="text-2xl font-extrabold gradient-text hover:opacity-80 transition-opacity">
          WebGae Dev
        </a>
        
        <div class="flex items-center gap-4">
          <!-- Desktop Navigation -->
          <nav class="hidden md:block">
            <ul class="flex gap-8 list-none">
              <li>
                <a 
                  href="/" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/servicios" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/servicios' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="/precios" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/precios' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Precios
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/blog' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/sobre-mi" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/sobre-mi' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a 
                  href="/contacto" 
                  class="dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors ${currentPath === '/contacto' ? 'dark:text-slate-50 text-slate-900' : ''}"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          
          <!-- Theme Toggle Button -->
          <button 
            id="theme-toggle" 
            class="p-2 rounded-lg dark:bg-slate-700 bg-slate-200 dark:hover:bg-slate-600 hover:bg-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            <svg id="theme-toggle-dark-icon" class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
          
          <!-- Mobile Menu Button -->
          <button 
            id="mobile-menu-toggle" 
            class="md:hidden p-2 rounded-lg dark:bg-slate-700 bg-slate-200 dark:hover:bg-slate-600 hover:bg-slate-300 transition-colors"
            aria-label="Toggle menu"
          >
            <svg id="menu-open-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg id="menu-close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <nav id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
        <ul class="flex flex-col gap-4 list-none">
          <li>
            <a 
              href="/" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="/servicios" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/servicios' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Servicios
            </a>
          </li>
          <li>
            <a 
              href="/precios" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/precios' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Precios
            </a>
          </li>
          <li>
            <a 
              href="/blog" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/blog' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="/sobre-mi" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/sobre-mi' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a 
              href="/contacto" 
              class="block dark:text-slate-400 dark:hover:text-slate-50 text-slate-600 hover:text-slate-900 font-medium transition-colors py-2 ${currentPath === '/contacto' ? 'dark:text-slate-50 text-slate-900' : ''}"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  <script>
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', function() {
      const html = document.documentElement;
      
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    
    mobileMenuToggle.addEventListener('click', function() {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
      }
    });
  </script>
`
