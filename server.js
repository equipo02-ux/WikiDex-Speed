import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const APP_TITLE = 'WikiSpeed — WikiDex SpeedSonic';
const APP_DESCRIPTION =
  'Enciclopedia interactiva de alta velocidad sobre el universo, personajes, videojuegos por eras, cómics, series y Chao Garden de Sonic the Hedgehog.';

const ROUTES = {
  '/': {
    file: 'wikispeed_inicio/code.html',
    title: `${APP_TITLE} | Inicio`,
  },
  '/inicio': {
    file: 'wikispeed_inicio/code.html',
    title: `${APP_TITLE} | Inicio`,
  },
  '/buscar': {
    file: 'b_squeda_y_filtros_avanzados_wikispeed/code.html',
    title: `Búsqueda y Filtros — ${APP_TITLE}`,
  },
  '/personajes': {
    file: 'ficha_de_personaje_sonic_the_hedgehog/code.html',
    title: `Personajes Canon y No canons — ${APP_TITLE}`,
  },
  '/personajes/sonic': {
    file: 'ficha_de_personaje_sonic_the_hedgehog/code.html',
    title: `Sonic the Hedgehog — ${APP_TITLE}`,
  },
  '/personajes/tails': {
    file: 'ficha_de_personaje_sonic_the_hedgehog/code.html',
    title: `Miles "Tails" Prower — ${APP_TITLE}`,
  },
  '/personajes/shadow': {
    file: 'ficha_de_personaje_sonic_the_hedgehog/code.html',
    title: `Shadow the Hedgehog — ${APP_TITLE}`,
  },
  '/archivo-exe': {
    file: 'archivo_central_sonic_exe/code.html',
    title: `Archivo Central: Sonic.exe — ${APP_TITLE}`,
  },
  '/sonic-exe': {
    file: 'archivo_central_sonic_exe/code.html',
    title: `Archivo Central: Sonic.exe — ${APP_TITLE}`,
  },
  '/exe': {
    file: 'archivo_central_sonic_exe/code.html',
    title: `Archivo Central: Sonic.exe — ${APP_TITLE}`,
  },
  '/archivo-tails-doll': {
    file: 'archivo_central_tails_doll/code.html',
    title: `Archivo Central: Tails Doll — ${APP_TITLE}`,
  },
  '/tails-doll': {
    file: 'archivo_central_tails_doll/code.html',
    title: `Archivo Central: Tails Doll — ${APP_TITLE}`,
  },
  '/archivo-el-primas': {
    file: 'archivo_central_el_primas/code.html',
    title: `Archivo Central: El Primas — ${APP_TITLE}`,
  },
  '/el-primas': {
    file: 'archivo_central_el_primas/code.html',
    title: `Archivo Central: El Primas — ${APP_TITLE}`,
  },
  '/juegos': {
    file: 'cat_logo_de_videojuegos_por_eras_wikispeed/code.html',
    title: `Catálogo de Videojuegos — ${APP_TITLE}`,
  },
  '/medios': {
    file: 'medios_c_mics_y_series/code.html',
    title: `Cómics y Series — ${APP_TITLE}`,
  },
  '/lore-y-mas': {
    file: 'lore_curiosidades_y_personajes_no_can_nicos/code.html',
    title: `Lore y Curiosidades — ${APP_TITLE}`,
  },
  '/chao-garden': {
    file: 'chao_garden_minijuegos_wikispeed/code.html',
    title: `Chao Garden & Minijuegos — ${APP_TITLE}`,
  },
  '/calculadora-chao': {
    file: 'calculadora_de_estad_sticas_chao_wikispeed/code.html',
    title: `Calculadora Chao — ${APP_TITLE}`,
  },
  '/mercado-negro': {
    file: 'cat_logo_de_frutas_y_mercado_negro_wikispeed/code.html',
    title: `Mercado Negro Chao — ${APP_TITLE}`,
  },
  '/perfil': {
    file: 'perfil_de_usuario_y_marcadores_offline/code.html',
    title: `Perfil y Marcadores Offline — ${APP_TITLE}`,
  },
};

async function renderPage(routeConfig, res) {
  const fullPath = path.join(__dirname, routeConfig.file);
  let html = await fs.readFile(fullPath, 'utf-8');

  const metaTags = [
    `<title>${routeConfig.title}</title>`,
    `<meta name="description" content="${APP_DESCRIPTION}" />`,
    `<meta property="og:title" content="${routeConfig.title}" />`,
    `<meta property="og:description" content="${APP_DESCRIPTION}" />`,
  ].join('\n');

  const scrollFixStyle = `<style id="wikispeed-scroll-fix">html{width:100%;overflow-y:auto!important;overflow-x:clip!important;}body{width:100%;overflow-y:visible!important;overflow-x:clip!important;overscroll-behavior-y:auto!important;}</style>`;
  const dataScriptTag = `<script src="/characters-data.js"></script>`;

  if (!/<title>/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>\n${metaTags}`);
  }

  html = html.replace(/width:100vw;?/g, 'width:100%;');

  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${scrollFixStyle}\n${dataScriptTag}\n</head>`);
  }

  if (html.includes('</body>')) {
    html = html.replace('</body>', '<script src="/nav.js"></script></body>');
  } else {
    html += '<script src="/nav.js"></script>';
  }

  res.type('html').send(html);
}

for (const [routePath, config] of Object.entries(ROUTES)) {
  app.get(routePath, async (_req, res, next) => {
    try {
      await renderPage(config, res);
    } catch (err) {
      next(err);
    }
  });
}

app.get('/personajes/:slug', async (_req, res, next) => {
  try {
    await renderPage(ROUTES['/personajes'], res);
  } catch (err) {
    next(err);
  }
});

app.get('/characters-data.js', (_req, res) => {
  res.sendFile(path.join(__dirname, 'characters-data.js'));
});

app.get('/nav.js', (_req, res) => {
  res.sendFile(path.join(__dirname, 'nav.js'));
});

app.use(express.static(__dirname, { index: false }));

app.use(async (_req, res, next) => {
  try {
    await renderPage(ROUTES['/'], res);
  } catch (err) {
    next(err);
  }
});

app.use((err, _req, res, _next) => {
  console.error('[WikiSpeed] Server error:', err);
  res.status(500).send('Internal Server Error');
});

const server = app.listen(PORT, HOST, () => {
  console.log(`WikiSpeed server running at http://${HOST}:${PORT}`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0));
  });
}
