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

  const LANGUAGES = [
    { code: 'es-LA', short: 'ES-LA', label: 'Español (Latinoamérica)', htmlLang: 'es-419' },
    { code: 'es-ES', short: 'ES-ES', label: 'Español (España)', htmlLang: 'es-ES' },
    { code: 'fr', short: 'FR', label: 'Francés', htmlLang: 'fr' },
    { code: 'ja-zh', short: 'JA/ZH', label: 'Japonés/China', htmlLang: 'ja' },
    { code: 'en-US', short: 'EN-US', label: 'Inglés (EU)', htmlLang: 'en-US' },
  ];

  const I18N = {
    'es-LA': {
      menuTitle: 'Idioma de WikiSpeed',
      navHome: 'Inicio',
      navChars: 'Personajes',
      navMedia: 'Medios',
      navLore: 'Lore & Más',
      heroTitle: 'Tu Enciclopedia de Alta Velocidad',
      heroSub: 'El archivo definitivo en español latino sobre el universo, cronología y secretos de Sonic the Hedgehog.',
      searchPlaceholder: 'Buscar en WikiSpeed (ej. Shadow, Tails, Exe, El Primas...)',
      exploreTitle: 'Exploración Principal',
      featuredTitle: 'Artículo Destacado',
      popularTitle: 'Personajes Populares',
      curiositiesTitle: 'Curiosidades y Creación',
      readCard: 'Leer Ficha',
      welcomeTitle: 'Bienvenidos a la WikiSpeed. La enciclopedia virtual de Sonic',
      welcomeNoticeHeading: 'Aviso.',
      welcomeNoticeBody: 'Esta app no es oficial de SEGA. Fue hecha por fans.',
      welcomeBtn: 'Entrar a WikiSpeed',
      welcomeArtCredit: 'Arte Fan 2D tributo · Créditos a SEGA, Sonic Team y artistas de Sonic',
      langChanged: 'Idioma cambiado a Español (Latinoamérica)',
    },
    'es-ES': {
      menuTitle: 'Idioma de WikiSpeed',
      navHome: 'Inicio',
      navChars: 'Personajes',
      navMedia: 'Medios',
      navLore: 'Lore y Más',
      heroTitle: 'Tu Enciclopedia de Alta Velocidad',
      heroSub: 'El archivo definitivo en castellano sobre el universo, la cronología y los secretos de Sonic the Hedgehog.',
      searchPlaceholder: 'Buscar en WikiSpeed (p. ej. Shadow, Tails, Exe, Tails Doll...)',
      exploreTitle: 'Exploración Principal',
      featuredTitle: 'Artículo Destacado',
      popularTitle: 'Personajes Populares',
      curiositiesTitle: 'Curiosidades y Creación',
      readCard: 'Leer Ficha',
      welcomeTitle: 'Bienvenidos a la WikiSpeed. La enciclopedia virtual de Sonic',
      welcomeNoticeHeading: 'Aviso.',
      welcomeNoticeBody: 'Esta app no es oficial de SEGA. Fue hecha por fans.',
      welcomeBtn: 'Entrar en WikiSpeed',
      welcomeArtCredit: 'Arte Fan 2D tributo · Créditos a SEGA, Sonic Team e ilustradores de Sonic',
      langChanged: 'Idioma cambiado a Español (España)',
    },
    fr: {
      menuTitle: 'Langue de WikiSpeed',
      navHome: 'Accueil',
      navChars: 'Personnages',
      navMedia: 'Médias',
      navLore: 'Lore & Plus',
      heroTitle: 'Votre Encyclopédie Haute Vitesse',
      heroSub: "L'archive communautaire sur l'univers, la chronologie et les secrets de Sonic the Hedgehog.",
      searchPlaceholder: 'Rechercher dans WikiSpeed (ex. Shadow, Tails, Exe...)',
      exploreTitle: 'Exploration Principale',
      featuredTitle: 'Article en Vedette',
      popularTitle: 'Personnages Populaires',
      curiositiesTitle: 'Curiosités & Création',
      readCard: 'Lire la Fiche',
      welcomeTitle: "Bienvenue sur WikiSpeed. L'encyclopédie virtuelle de Sonic",
      welcomeNoticeHeading: 'Avis.',
      welcomeNoticeBody: "Cette application n'est pas officielle de SEGA. Elle a été créée par des fans.",
      welcomeBtn: 'Entrer dans WikiSpeed',
      welcomeArtCredit: 'Fan-Art 2D hommage · Crédits à SEGA, Sonic Team et artistes Sonic',
      langChanged: 'Langue changée en Français',
    },
    'ja-zh': {
      menuTitle: '言語 / 语言 (WikiSpeed)',
      navHome: 'ホーム / 首页',
      navChars: 'キャラ / 角色',
      navMedia: 'メディア / 媒体',
      navLore: '設定 / 传说',
      heroTitle: '超音速ソニック百科事典 / 索尼克极速百科',
      heroSub: 'ソニック・ザ・ヘッジホッグの世界・歴史・秘密をまとめたファン百科事典。',
      searchPlaceholder: 'WikiSpeedを検索 / 搜索 (Shadow, Tails, Exe...)',
      exploreTitle: 'メイン探索 / 主要探索',
      featuredTitle: '注目記事 / 精选文章',
      popularTitle: '人気キャラクター / 热门角色',
      curiositiesTitle: 'トリビアと制作 / 趣闻与创作',
      readCard: '記事を読む / 阅读',
      welcomeTitle: 'WikiSpeedへようこそ・ソニック仮想百科事典 (欢迎来到索尼克百科)',
      welcomeNoticeHeading: 'お知らせ / 提示。',
      welcomeNoticeBody: 'このアプリはSEGA公式ではありません。ファンによって制作されました。(非SEGA官方，由粉丝制作)',
      welcomeBtn: 'WikiSpeedへ入る / 进入',
      welcomeArtCredit: '2Dファンアート · SEGA / Sonic Team・歴代公式イラストレーターに敬意を表して',
      langChanged: '日本語 / 中文 に切り替えました',
    },
    'en-US': {
      menuTitle: 'WikiSpeed Language',
      navHome: 'Home',
      navChars: 'Characters',
      navMedia: 'Media',
      navLore: 'Lore & More',
      heroTitle: 'Your High-Speed Sonic Encyclopedia',
      heroSub: 'The fan-made virtual archive covering the universe, timeline, and secrets of Sonic the Hedgehog.',
      searchPlaceholder: 'Search WikiSpeed (e.g. Shadow, Tails, Exe, Tails Doll...)',
      exploreTitle: 'Main Exploration',
      featuredTitle: 'Featured Article',
      popularTitle: 'Popular Characters',
      curiositiesTitle: 'Trivia & Creation',
      readCard: 'Read Entry',
      welcomeTitle: 'Welcome to WikiSpeed. The Virtual Sonic Encyclopedia',
      welcomeNoticeHeading: 'Notice.',
      welcomeNoticeBody: 'This app is not official from SEGA. It was made by fans.',
      welcomeBtn: 'Enter WikiSpeed',
      welcomeArtCredit: '2D Fan-Art Tribute · Credits to SEGA, Sonic Team & Sonic illustrators',
      langChanged: 'Language switched to English (US)',
    },
  };

  function navigateTo(url) {
    if (!url || window.location.pathname === url) return;
    window.location.href = url;
  }

  function getSavedLang() {
    try {
      const saved = localStorage.getItem('wikispeed_lang');
      if (saved && I18N[saved]) return saved;
    } catch (_) {}
    return 'es-LA';
  }

  function saveLang(code) {
    try {
      localStorage.setItem('wikispeed_lang', code);
    } catch (_) {}
  }

  function injectGlobalWidgetStyles() {
    if (document.getElementById('wikispeed-global-ui-styles')) return;
    const style = document.createElement('style');
    style.id = 'wikispeed-global-ui-styles';
    style.textContent = `
      @keyframes wsFadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes wsModalPop {
        0% { opacity: 0; transform: translateY(18px) scale(0.95); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes wsCharBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes wsRingSpin {
        0% { transform: rotateY(0deg) translateY(0px); }
        50% { transform: rotateY(180deg) translateY(-5px); }
        100% { transform: rotateY(360deg) translateY(0px); }
      }
      @keyframes wsSpeedDash {
        0% { transform: translateX(-110%); opacity: 0; }
        35% { opacity: 0.7; }
        100% { transform: translateX(130%); opacity: 0; }
      }
      .ws-welcome-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(1, 10, 26, 0.86);
        backdrop-filter: blur(10px);
        animation: wsFadeIn 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .ws-welcome-card {
        position: relative;
        width: 100%;
        max-width: 540px;
        border-radius: 20px;
        overflow: hidden;
        background: linear-gradient(165deg, #112340 0%, #07162e 65%, #030d1f 100%);
        border: 1px solid rgba(105, 207, 255, 0.35);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.75);
        color: #d6e3ff;
        animation: wsModalPop 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .ws-speed-streak {
        position: absolute;
        height: 3px;
        border-radius: 999px;
        pointer-events: none;
        animation: wsSpeedDash 2.6s linear infinite;
      }
      .ws-char-chip {
        animation: wsCharBounce 2.4s ease-in-out infinite;
      }
      .ws-char-chip:nth-child(2) { animation-delay: 0.25s; }
      .ws-char-chip:nth-child(3) { animation-delay: 0.5s; }
      .ws-char-chip:nth-child(4) { animation-delay: 0.75s; }
      .ws-ring-float {
        animation: wsRingSpin 3.6s linear infinite;
      }
      .ws-lang-popover {
        position: fixed;
        z-index: 9990;
        width: 248px;
        border-radius: 14px;
        background: #0d1c32;
        border: 1px solid rgba(105, 207, 255, 0.35);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.65);
        padding: 8px;
        color: #d6e3ff;
        animation: wsModalPop 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .ws-lang-toast {
        position: fixed;
        bottom: 84px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9995;
        padding: 10px 16px;
        border-radius: 12px;
        background: #1c2a41;
        border: 1px solid rgba(105, 207, 255, 0.45);
        color: #d6e3ff;
        font-size: 13px;
        font-weight: 600;
        box-shadow: 0 12px 30px rgba(0,0,0,0.55);
        pointer-events: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .ws-welcome-overlay, .ws-welcome-card, .ws-char-chip, .ws-ring-float, .ws-speed-streak, .ws-lang-popover {
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  let toastTimer = null;
  function showLangToast(msg) {
    let el = document.getElementById('ws-lang-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ws-lang-toast';
      el.className = 'ws-lang-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.display = 'block';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.style.display = 'none';
    }, 2200);
  }

  function applyTranslations(code) {
    const dict = I18N[code] || I18N['es-LA'];
    const langObj = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
    document.documentElement.lang = langObj.htmlLang;

    // Update bottom navigation labels
    document.querySelectorAll('nav a[data-path]').forEach((a) => {
      const p = a.getAttribute('data-path');
      const spans = a.querySelectorAll('span');
      const labelSpan = spans.length > 1 ? spans[1] : null;
      if (!labelSpan) return;
      if (p === 'inicio') labelSpan.textContent = dict.navHome;
      else if (p === 'personajes') labelSpan.textContent = dict.navChars;
      else if (p === 'medios') labelSpan.textContent = dict.navMedia;
      else if (p === 'lore-y-mas') labelSpan.textContent = dict.navLore;
    });

    // Update Home specific texts
    const homeHeaderLabel = document.querySelector('[data-i18n="header.home"]');
    if (homeHeaderLabel) homeHeaderLabel.textContent = dict.navHome;

    const searchInput = document.getElementById('wiki-search-input');
    if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

    const heroH1 = document.querySelector('main h1');
    if (
      heroH1 &&
      (window.location.pathname === '/' || window.location.pathname === '/inicio')
    ) {
      heroH1.textContent = dict.heroTitle;
      const heroP = heroH1.nextElementSibling;
      if (heroP && heroP.tagName === 'P') heroP.textContent = dict.heroSub;
    }

    if (window.location.pathname === '/' || window.location.pathname === '/inicio') {
      const h2s = document.querySelectorAll('main h2');
      if (h2s[0]) h2s[0].textContent = dict.exploreTitle;
      if (h2s[1]) h2s[1].textContent = dict.featuredTitle;
      if (h2s[2]) h2s[2].textContent = dict.popularTitle;
      if (h2s[3]) h2s[3].textContent = dict.curiositiesTitle;

      document.querySelectorAll('main button').forEach((btn) => {
        const sp = btn.querySelector('span');
        if (sp && /leer ficha|read entry|lire la fiche|記事を読む/i.test(sp.textContent || '')) {
          sp.textContent = dict.readCard;
        }
      });
    }

    // Update translate button tooltips
    document.querySelectorAll('button').forEach((btn) => {
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon && icon.textContent.trim() === 'translate') {
        btn.setAttribute('title', `${dict.menuTitle}: ${langObj.label}`);
      }
    });

    // Update welcome modal if open
    const wTitle = document.getElementById('ws-welcome-title');
    const wNoticeH = document.getElementById('ws-welcome-notice-heading');
    const wNoticeB = document.getElementById('ws-welcome-notice-body');
    const wBtn = document.getElementById('ws-welcome-enter-btn');
    const wCredit = document.getElementById('ws-welcome-art-credit');
    if (wTitle) wTitle.textContent = dict.welcomeTitle;
    if (wNoticeH) wNoticeH.textContent = dict.welcomeNoticeHeading;
    if (wNoticeB) wNoticeB.textContent = dict.welcomeNoticeBody;
    if (wBtn) wBtn.textContent = dict.welcomeBtn;
    if (wCredit) wCredit.textContent = dict.welcomeArtCredit;
  }

  function setupLanguageSwitcher() {
    let activePopover = null;
    let activeAnchor = null;

    function closePopover() {
      if (activePopover) {
        activePopover.remove();
        activePopover = null;
        activeAnchor = null;
      }
    }

    function openPopover(anchorBtn) {
      if (activePopover && activeAnchor === anchorBtn) {
        closePopover();
        return;
      }
      closePopover();

      const currentLang = getSavedLang();
      const dict = I18N[currentLang] || I18N['es-LA'];
      const rect = anchorBtn.getBoundingClientRect();

      const pop = document.createElement('div');
      pop.className = 'ws-lang-popover';
      pop.setAttribute('role', 'menu');
      pop.setAttribute('aria-label', dict.menuTitle);

      const topPos = Math.min(rect.bottom + 8, window.innerHeight - 290);
      const rightPos = Math.max(12, window.innerWidth - rect.right);
      pop.style.top = `${Math.max(56, topPos)}px`;
      pop.style.right = `${rightPos}px`;

      pop.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px 8px;border-bottom:1px solid rgba(136,146,153,0.22);margin-bottom:4px;">
          <span style="font-family:Outfit,sans-serif;font-size:12px;font-weight:700;color:#69cfff;letter-spacing:0.04em;">${dict.menuTitle}</span>
          <span style="font-size:11px;color:#bec8cf;">5 idiomas</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:3px;">
          ${LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang;
            return `
              <button type="button" role="menuitemradio" aria-checked="${isSelected}" data-lang-code="${lang.code}"
                style="display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:9px 10px;border-radius:10px;border:none;cursor:pointer;text-align:left;font-size:13px;font-weight:${isSelected ? '700' : '500'};background:${isSelected ? 'rgba(105,207,255,0.18)' : 'transparent'};color:${isSelected ? '#ffffff' : '#d6e3ff'};transition:background 140ms ease;">
                <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${lang.label}</span>
                <span style="font-family:Outfit,sans-serif;font-size:11px;font-weight:700;color:${isSelected ? '#fdd000' : '#889299'};flex-shrink:0;">${isSelected ? '✓ ' + lang.short : lang.short}</span>
              </button>
            `;
          }).join('')}
        </div>
      `;

      pop.querySelectorAll('button[data-lang-code]').forEach((item) => {
        item.addEventListener('mouseenter', () => {
          if (item.getAttribute('aria-checked') !== 'true') {
            item.style.background = 'rgba(39,53,76,0.75)';
          }
        });
        item.addEventListener('mouseleave', () => {
          if (item.getAttribute('aria-checked') !== 'true') {
            item.style.background = 'transparent';
          }
        });
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const chosen = item.getAttribute('data-lang-code');
          saveLang(chosen);
          applyTranslations(chosen);
          const nextDict = I18N[chosen] || I18N['es-LA'];
          showLangToast(nextDict.langChanged);
          closePopover();
        });
      });

      document.body.appendChild(pop);
      activePopover = pop;
      activeAnchor = anchorBtn;
    }

    document.querySelectorAll('button').forEach((btn) => {
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon && icon.textContent.trim() === 'translate') {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          openPopover(btn);
        });
      }
    });

    // Also wire the Home quick ES/EN buttons if present to open/switch
    document.querySelectorAll('main button').forEach((btn) => {
      const t = (btn.textContent || '').trim();
      if (t === 'ES') {
        btn.addEventListener('click', () => {
          saveLang('es-LA');
          applyTranslations('es-LA');
          showLangToast(I18N['es-LA'].langChanged);
        });
      } else if (t === 'EN') {
        btn.addEventListener('click', () => {
          saveLang('en-US');
          applyTranslations('en-US');
          showLangToast(I18N['en-US'].langChanged);
        });
      }
    });

    document.addEventListener('click', (e) => {
      if (activePopover && !activePopover.contains(e.target) && activeAnchor && !activeAnchor.contains(e.target)) {
        closePopover();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePopover();
    });
  }

  function showWelcomeModal(force) {
    try {
      if (!force && sessionStorage.getItem('wikispeed_welcome_seen') === '1') return;
    } catch (_) {}

    const existing = document.getElementById('ws-welcome-modal');
    if (existing) existing.remove();

    const code = getSavedLang();
    const dict = I18N[code] || I18N['es-LA'];

    const overlay = document.createElement('div');
    overlay.id = 'ws-welcome-modal';
    overlay.className = 'ws-welcome-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'ws-welcome-title');

    overlay.innerHTML = `
      <div class="ws-welcome-card">
        <div class="ws-speed-streak" style="top:18px;left:0;width:160px;background:linear-gradient(90deg,transparent,#69cfff,transparent);"></div>
        <div class="ws-speed-streak" style="top:34px;left:0;width:120px;animation-delay:0.9s;background:linear-gradient(90deg,transparent,#fdd000,transparent);"></div>

        <!-- Animated Banner with Sonic & Friends Fan-Art -->
        <div style="position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;background:#010e24;">
          <img src="/src/assets/images/fanart_welcome_squad_2d_1795018770283.jpg" alt="Sonic, Tails, Knuckles y Shadow — Arte Fan 2D" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover;display:block;"/>
          <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(1,14,36,0.12) 0%,rgba(4,19,41,0.5) 65%,rgba(7,22,46,0.98) 100%);"></div>

          <!-- Floating Animated Golden Rings -->
          <svg class="ws-ring-float" style="position:absolute;top:12px;left:14px;width:30px;height:30px;" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="11" stroke="#fdd000" stroke-width="4.2"/>
            <circle cx="16" cy="16" r="11" stroke="#fff7c2" stroke-width="1.2" stroke-dasharray="10 26"/>
          </svg>
          <svg class="ws-ring-float" style="position:absolute;top:14px;right:14px;width:26px;height:26px;animation-delay:1.1s;" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="11" stroke="#69cfff" stroke-width="4"/>
            <circle cx="16" cy="16" r="11" stroke="#e0f4ff" stroke-width="1.2" stroke-dasharray="10 26"/>
          </svg>

          <!-- Animated Mini Character Roster Strip -->
          <div style="position:absolute;bottom:10px;left:14px;right:14px;display:flex;align-items:center;justify-content:center;gap:10px;">
            <div class="ws-char-chip" style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:10px;background:rgba(1,14,36,0.86);border:1px solid rgba(105,207,255,0.45);">
              <img src="/src/assets/images/fanart_sonic_2d_1795018769924.jpg" alt="Sonic" referrerpolicy="no-referrer" style="width:28px;height:28px;border-radius:7px;object-fit:cover;"/>
              <span style="font-family:Outfit,sans-serif;font-size:11px;font-weight:700;color:#69cfff;">Sonic</span>
            </div>
            <div class="ws-char-chip" style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:10px;background:rgba(1,14,36,0.86);border:1px solid rgba(253,208,0,0.45);">
              <img src="/src/assets/images/fanart_tails_2d_1795018769917.jpg" alt="Tails" referrerpolicy="no-referrer" style="width:28px;height:28px;border-radius:7px;object-fit:cover;"/>
              <span style="font-family:Outfit,sans-serif;font-size:11px;font-weight:700;color:#fdd000;">Tails</span>
            </div>
            <div class="ws-char-chip" style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:10px;background:rgba(1,14,36,0.86);border:1px solid rgba(255,180,171,0.45);">
              <img src="/src/assets/images/fanart_knuckles_2d_1795018770326.jpg" alt="Knuckles" referrerpolicy="no-referrer" style="width:28px;height:28px;border-radius:7px;object-fit:cover;"/>
              <span style="font-family:Outfit,sans-serif;font-size:11px;font-weight:700;color:#ffb4ab;">Knuckles</span>
            </div>
            <div class="ws-char-chip" style="display:flex;align-items:center;gap:6px;padding:4px 8px 4px 4px;border-radius:10px;background:rgba(1,14,36,0.86);border:1px solid rgba(204,226,255,0.4);">
              <img src="/src/assets/images/fanart_shadow_2d_1795018770546.jpg" alt="Shadow" referrerpolicy="no-referrer" style="width:28px;height:28px;border-radius:7px;object-fit:cover;"/>
              <span style="font-family:Outfit,sans-serif;font-size:11px;font-weight:700;color:#d6e3ff;">Shadow</span>
            </div>
          </div>
        </div>

        <!-- Content Body -->
        <div style="padding:20px 22px 22px;display:flex;flex-direction:column;gap:14px;text-align:center;">
          <div style="display:flex;align-items:center;justify-content:center;gap:10px;">
            <img src="/src/assets/images/wikispeed-fan-logo.svg" alt="WikiSpeed Logo" style="width:36px;height:36px;object-fit:contain;"/>
            <span style="font-family:Outfit,sans-serif;font-size:20px;font-weight:800;color:#69cfff;letter-spacing:-0.01em;">WikiSpeed</span>
          </div>

          <h2 id="ws-welcome-title" style="margin:0;font-family:Outfit,sans-serif;font-size:21px;line-height:1.3;font-weight:800;color:#ffffff;text-wrap:balance;">
            ${dict.welcomeTitle}
          </h2>

          <div style="padding:12px 14px;border-radius:12px;background:rgba(253,208,0,0.09);border:1px solid rgba(253,208,0,0.35);display:flex;flex-direction:column;gap:4px;">
            <strong id="ws-welcome-notice-heading" style="font-family:Outfit,sans-serif;font-size:14px;font-weight:800;color:#fdd000;letter-spacing:0.03em;">
              ${dict.welcomeNoticeHeading}
            </strong>
            <p id="ws-welcome-notice-body" style="margin:0;font-size:14px;line-height:1.45;color:#fff0c8;font-weight:500;">
              ${dict.welcomeNoticeBody}
            </p>
          </div>

          <p id="ws-welcome-art-credit" style="margin:0;font-size:11.5px;color:#bec8cf;line-height:1.4;">
            ${dict.welcomeArtCredit}
          </p>

          <button id="ws-welcome-enter-btn" type="button"
            style="width:100%;height:46px;border:none;border-radius:12px;background:#69cfff;color:#001e2b;font-family:Outfit,sans-serif;font-size:15px;font-weight:800;cursor:pointer;letter-spacing:0.02em;box-shadow:0 8px 24px rgba(105,207,255,0.35);transition:transform 140ms ease,background 140ms ease;">
            ${dict.welcomeBtn}
          </button>
        </div>
      </div>
    `;

    function dismiss() {
      try {
        sessionStorage.setItem('wikispeed_welcome_seen', '1');
      } catch (_) {}
      overlay.remove();
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) dismiss();
    });
    const enterBtn = overlay.querySelector('#ws-welcome-enter-btn');
    if (enterBtn) {
      enterBtn.addEventListener('click', dismiss);
      enterBtn.addEventListener('mouseenter', () => {
        enterBtn.style.background = '#8ddbff';
      });
      enterBtn.addEventListener('mouseleave', () => {
        enterBtn.style.background = '#69cfff';
      });
    }
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        dismiss();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
    document.body.appendChild(overlay);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    injectGlobalWidgetStyles();
    setupLanguageSwitcher();
    applyTranslations(getSavedLang());

    // Show animated welcome modal when entering the app
    showWelcomeModal(false);

    // Replay welcome modal button (on Home credits)
    const replayWelcomeBtn = document.getElementById('replay-welcome-btn');
    if (replayWelcomeBtn) {
      replayWelcomeBtn.addEventListener('click', () => showWelcomeModal(true));
    }

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
        if (icon && icon.textContent.trim() === 'person' && !el.closest('a[data-path]') && el.tagName !== 'A') {
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
            } else if (low === 'tails doll' || low === 'tailsdoll') {
              navigateTo('/archivo-tails-doll');
            } else if (low === 'el primas' || low === 'primas') {
              navigateTo('/archivo-el-primas');
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
        if (text.includes('leer ficha') || text.includes('read entry') || text.includes('lire la fiche')) {
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

    // 4. Character sheet (/personajes) cross-links
    if (currentPath === '/personajes') {
      document.querySelectorAll('main button').forEach((btn) => {
        const label = (btn.getAttribute('aria-label') || '').toLowerCase();
        if (label.includes('universo expandido')) {
          btn.addEventListener('click', () => navigateTo('/lore-y-mas'));
        }
      });
    }

    // 5. Games catalog (/juegos) cross-links (including Chao Garden)
    if (currentPath === '/juegos') {
      document.querySelectorAll('main article').forEach((article) => {
        const text = (article.textContent || '').toLowerCase();
        article.querySelectorAll('button').forEach((btn) => {
          if (text.includes('chao garden') || text.includes('chao karate')) {
            btn.addEventListener('click', () => navigateTo('/chao-garden'));
          } else {
            btn.addEventListener('click', () => navigateTo('/personajes/sonic'));
          }
        });
      });
    }

    // 6. Chao Garden (/chao-garden) -> Calculator & Black Market
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

    // 7. Lore & Más (/lore-y-mas) -> Chao Garden shortcut on Chao mentions
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
