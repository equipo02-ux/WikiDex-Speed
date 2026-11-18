(function () {
  const PATH_MAP = {
    inicio: '/',
    'wikispeed---inicio': '/',
    personajes: '/personajes',
    medios: '/medios',
    'lore-y-mas': '/lore-y-mas',
    'perfil-de-usuario': '/perfil',
    'marcadores-y-guardados': '/perfil',
    'lectura-offline': '/perfil',
    'chao-garden-minijuegos-wikispeed': '/chao-garden',
    'calculadora-de-estadisticas-chao-wikispeed': '/calculadora-chao',
    'catalogo-de-frutas-y-mercado-negro-wikispeed': '/mercado-negro',
  };

  function navigateTo(url) {
    if (!url || window.location.pathname === url) return;
    window.location.href = url;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    // 1. Wire all data-path links (bottom nav & profile links)
    document.querySelectorAll('a[data-path]').forEach((anchor) => {
      const key = anchor.getAttribute('data-path');
      const target = key && PATH_MAP[key];
      if (target) {
        anchor.setAttribute('href', target);
      }
    });

    // 2. Wire header logo -> home
    const header = document.querySelector('header');
    if (header) {
      const logoImg = header.querySelector('img[alt="WikiSpeed Logo"]');
      if (logoImg && logoImg.parentElement) {
        const brandEl = logoImg.parentElement;
        brandEl.style.cursor = 'pointer';
        brandEl.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            navigateTo('/');
          }
        });
      }

      // Wire header search buttons -> /buscar
      header
        .querySelectorAll('button[aria-label*="Buscar" i]')
        .forEach((btn) => {
          btn.addEventListener('click', () => navigateTo('/buscar'));
        });

      // Wire header profile avatar -> /perfil
      header.querySelectorAll('div, a, button').forEach((el) => {
        const icon = el.querySelector(':scope > .material-symbols-outlined');
        if (icon && icon.textContent.trim() === 'person' && !el.closest('a[data-path]')) {
          el.style.cursor = 'pointer';
          el.addEventListener('click', () => navigateTo('/perfil'));
        }
      });

      // Fallback for back/close buttons if no history exists
      header
        .querySelectorAll('button[onclick*="history.back"]')
        .forEach((btn) => {
          btn.removeAttribute('onclick');
          btn.addEventListener('click', () => {
            if (window.history.length > 1 && document.referrer) {
              window.history.back();
            } else {
              navigateTo('/');
            }
          });
        });
    }

    // 3. Home screen (/) interactive routing
    if (currentPath === '/' || currentPath === '/inicio') {
      const searchInput = document.getElementById('wiki-search-input');
      if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const q = searchInput.value.trim();
            const low = q.toLowerCase();
            if (low === 'exe' || low === '.exe' || low === 'sonic.exe' || low === 'sonic exe') {
              navigateTo('/archivo-exe');
            } else {
              navigateTo(q ? `/buscar?q=${encodeURIComponent(q)}` : '/buscar');
            }
          }
        });
      }

      const filterTrigger = document.getElementById('filter-trigger');
      if (filterTrigger) {
        filterTrigger.addEventListener('click', () => navigateTo('/buscar'));
      }

      // Shortcut cards & text links on home
      document.querySelectorAll('main a[href="#"]').forEach((link) => {
        const text = (link.textContent || '').toLowerCase();
        if (text.includes('juegos')) {
          link.setAttribute('href', '/juegos');
        } else if (text.includes('cómics') || text.includes('películas')) {
          link.setAttribute('href', '/medios');
        } else if (text.includes('personajes') || text.includes('ver roster')) {
          link.setAttribute('href', '/personajes/sonic');
        }
      });

      // Featured article button
      document.querySelectorAll('main button').forEach((btn) => {
        const text = (btn.textContent || '').toLowerCase();
        if (text.includes('leer ficha')) {
          btn.addEventListener('click', () => navigateTo('/juegos'));
        }
      });

      // Popular character cards -> individual Sonic / Tails / Shadow pages
      document.querySelectorAll('main .snap-start').forEach((card) => {
        card.style.cursor = 'pointer';
        const text = (card.textContent || '').toLowerCase();
        card.addEventListener('click', () => {
          if (text.includes('tails')) {
            navigateTo('/personajes/tails');
          } else if (text.includes('shadow')) {
            navigateTo('/personajes/shadow');
          } else if (text.includes('knuckles')) {
            navigateTo('/buscar?q=Knuckles');
          } else {
            navigateTo('/personajes/sonic');
          }
        });
      });

      // Curiosidades & Creación rows -> /lore-y-mas
      document.querySelectorAll('main h4').forEach((h4) => {
        const text = (h4.textContent || '').toLowerCase();
        if (
          text.includes('creadores') ||
          text.includes('no canónicos') ||
          text.includes('doblaje')
        ) {
          const card = h4.closest('.rounded-xl');
          if (card) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => navigateTo('/lore-y-mas'));
          }
        }
      });
    }

    // 4. Search screen (/buscar) manages its own live query & dynamic result navigation

    // 5. Character sheet (/personajes) cross-links
    if (currentPath === '/personajes') {
      document.querySelectorAll('main button').forEach((btn) => {
        const label = (btn.getAttribute('aria-label') || '').toLowerCase();
        if (label.includes('universo expandido')) {
          btn.addEventListener('click', () => navigateTo('/lore-y-mas'));
        }
      });
    }

    // 6. Games catalog (/juegos) cross-links (including Chao Garden)
    if (currentPath === '/juegos') {
      document.querySelectorAll('main article').forEach((article) => {
        const text = (article.textContent || '').toLowerCase();
        article.querySelectorAll('button').forEach((btn) => {
          if (text.includes('chao garden') || text.includes('chao karate')) {
            btn.addEventListener('click', () => navigateTo('/chao-garden'));
          } else {
            btn.addEventListener('click', () => navigateTo('/personajes'));
          }
        });
      });
    }

    // 7. Chao Garden (/chao-garden) -> Calculator & Black Market
    if (currentPath === '/chao-garden') {
      document.querySelectorAll('section[data-section="market"] .rounded-xl').forEach((card) => {
        const text = (card.textContent || '').toLowerCase();
        if (text.includes('tienda secreta')) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => navigateTo('/mercado-negro'));
        }
      });
      document.querySelectorAll('main button').forEach((btn) => {
        const text = (btn.textContent || '').toLowerCase();
        if (text.includes('aportar')) {
          btn.addEventListener('click', () => navigateTo('/calculadora-chao'));
        }
      });
      document.querySelectorAll('section[data-section="stats-items"] .rounded-xl').forEach((card) => {
        const text = (card.textContent || '').toLowerCase();
        if (text.includes('natación (swim)')) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => navigateTo('/calculadora-chao'));
        }
      });
    }

    // 8. Lore & Más (/lore-y-mas) -> Chao Garden shortcut on Chao mentions
    if (currentPath === '/lore-y-mas') {
      document.querySelectorAll('main button, main a').forEach((el) => {
        const text = (el.textContent || '').toLowerCase();
        if (text.includes('chao')) {
          el.addEventListener('click', () => navigateTo('/chao-garden'));
        }
      });
    }
  });
})();
