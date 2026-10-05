// Mejoras progresivas: la página funciona igual sin JavaScript (se ve en español).
(function () {
  'use strict';

  /* ==========================================================
     Traducciones ES · EN · FR
     ========================================================== */
  var I18N = {
    es: {
      'doc.title': 'Sarah Yahine Cohen Angongo · Directora Comercial',
      'doc.desc': 'Tarjeta de visita digital de Sarah Yahine Cohen Angongo — Directora Comercial de Canal+ Bioko, representante de Canal+ International y de Axaer Europa en Guinea Ecuatorial.',
      'og.title': 'Sarah Yahine Cohen Angongo · Directora Comercial Canal+ Bioko',
      'og.desc': 'Guarda mi contacto y conoce mis proyectos.',

      'role': 'Directora Comercial · <strong>Canal+ Bioko</strong>',
      'location': 'Guinea Ecuatorial',

      'q.call': 'Llamar',
      'q.email': 'Email',
      'q.wa': 'WhatsApp',
      'q.share': 'Compartir',

      't.about': 'Sobre mí',
      'about': 'Directora Comercial de Canal+ Bioko y Representante Oficial de Canal+ International en Guinea Ecuatorial. Represento también a Axaer Europa en África Central.',
      'tag.tv': 'Televisión',
      'tag.trade': 'Comercio internacional',
      'tag.mgmt': 'Dirección',

      't.jobs': 'Cargos y empresas',
      'job.canal': 'Directora Comercial · Representante Oficial de Canal+ International en Guinea Ecuatorial.',
      'job.axaer': 'Representante para África Central. Central de compras y exportación con sede en Valencia (España).',
      'job.egidra': 'Secretaria de Dirección. Buceo industrial y acceso por cuerda para el sector offshore de petróleo y gas.',
      'job.vemix': 'Directora General.',

      't.contact': 'Contacto',
      'd.email': 'Email',
      'd.emailEgidra': 'Email EGIDRA',
      'd.wa': 'WhatsApp',
      'copy': 'Copiar',
      'copied': 'Copiado',
      'foot': 'Encantada de conocerte 👋',

      'wa.text': 'Hola Sarah, ',
      'share.text': 'Te comparto mi tarjeta de contacto',

      'aria.lang': 'Idioma',
      'aria.quick': 'Contacto rápido',
      'aria.tags': 'Ámbitos',
      'aria.copy': 'Copiar email',
      'alt.photo': 'Foto de Sarah Yahine Cohen Angongo',
      'alt.canal': 'Logo de Canal+ Bioko',
      'alt.axaer': 'Logo de Axaer Europa',
      'alt.egidra': 'Logo de EGIDRA',
      'alt.vemix': 'Logo de Vemix Solutions'
    },

    en: {
      'doc.title': 'Sarah Yahine Cohen Angongo · Sales Director',
      'doc.desc': 'Digital business card of Sarah Yahine Cohen Angongo — Sales Director at Canal+ Bioko, representative of Canal+ International and Axaer Europa in Equatorial Guinea.',
      'og.title': 'Sarah Yahine Cohen Angongo · Sales Director, Canal+ Bioko',
      'og.desc': 'Save my details and discover what I do.',

      'role': 'Sales Director · <strong>Canal+ Bioko</strong>',
      'location': 'Equatorial Guinea',

      'q.call': 'Call',
      'q.email': 'Email',
      'q.wa': 'WhatsApp',
      'q.share': 'Share',

      't.about': 'About me',
      'about': 'Sales Director at Canal+ Bioko and Official Representative of Canal+ International in Equatorial Guinea. I also represent Axaer Europa across Central Africa.',
      'tag.tv': 'Television',
      'tag.trade': 'International trade',
      'tag.mgmt': 'Management',

      't.jobs': 'Roles & companies',
      'job.canal': 'Sales Director · Official Representative of Canal+ International in Equatorial Guinea.',
      'job.axaer': 'Representative for Central Africa. Purchasing and export group based in Valencia (Spain).',
      'job.egidra': 'Executive Assistant. Industrial diving and rope access for the offshore oil and gas sector.',
      'job.vemix': 'General Manager.',

      't.contact': 'Contact',
      'd.email': 'Email',
      'd.emailEgidra': 'EGIDRA email',
      'd.wa': 'WhatsApp',
      'copy': 'Copy',
      'copied': 'Copied',
      'foot': 'Lovely to meet you 👋',

      'wa.text': 'Hello Sarah, ',
      'share.text': "Here's my contact card",

      'aria.lang': 'Language',
      'aria.quick': 'Quick contact',
      'aria.tags': 'Areas',
      'aria.copy': 'Copy email address',
      'alt.photo': 'Photo of Sarah Yahine Cohen Angongo',
      'alt.canal': 'Canal+ Bioko logo',
      'alt.axaer': 'Axaer Europa logo',
      'alt.egidra': 'EGIDRA logo',
      'alt.vemix': 'Vemix Solutions logo'
    },

    fr: {
      'doc.title': 'Sarah Yahine Cohen Angongo · Directrice Commerciale',
      'doc.desc': "Carte de visite numérique de Sarah Yahine Cohen Angongo — Directrice Commerciale de Canal+ Bioko, représentante de Canal+ International et d'Axaer Europa en Guinée équatoriale.",
      'og.title': 'Sarah Yahine Cohen Angongo · Directrice Commerciale Canal+ Bioko',
      'og.desc': 'Enregistrez mes coordonnées et découvrez mes activités.',

      'role': 'Directrice Commerciale · <strong>Canal+ Bioko</strong>',
      'location': 'Guinée équatoriale',

      'q.call': 'Appeler',
      'q.email': 'E-mail',
      'q.wa': 'WhatsApp',
      'q.share': 'Partager',

      't.about': 'À propos',
      'about': "Directrice Commerciale de Canal+ Bioko et Représentante Officielle de Canal+ International en Guinée équatoriale. Je représente également Axaer Europa en Afrique centrale.",
      'tag.tv': 'Télévision',
      'tag.trade': 'Commerce international',
      'tag.mgmt': 'Direction',

      't.jobs': 'Postes et entreprises',
      'job.canal': 'Directrice Commerciale · Représentante Officielle de Canal+ International en Guinée équatoriale.',
      'job.axaer': "Représentante pour l'Afrique centrale. Centrale d'achat et d'exportation basée à Valence (Espagne).",
      'job.egidra': "Secrétaire de Direction. Plongée industrielle et accès sur corde pour le secteur offshore pétrolier et gazier.",
      'job.vemix': 'Directrice Générale.',

      't.contact': 'Contact',
      'd.email': 'E-mail',
      'd.emailEgidra': 'E-mail EGIDRA',
      'd.wa': 'WhatsApp',
      'copy': 'Copier',
      'copied': 'Copié',
      'foot': 'Enchantée de vous rencontrer 👋',

      'wa.text': 'Bonjour Sarah, ',
      'share.text': 'Je vous partage ma carte de visite',

      'aria.lang': 'Langue',
      'aria.quick': 'Contact rapide',
      'aria.tags': 'Domaines',
      'aria.copy': "Copier l'adresse e-mail",
      'alt.photo': 'Photo de Sarah Yahine Cohen Angongo',
      'alt.canal': 'Logo de Canal+ Bioko',
      'alt.axaer': 'Logo d’Axaer Europa',
      'alt.egidra': 'Logo d’EGIDRA',
      'alt.vemix': 'Logo de Vemix Solutions'
    }
  };

  var WA_NUMBER = '240551800000';
  var STORE_KEY = 'tarjeta-idioma';
  var current = 'es';

  /* ---------- Idioma: ?lang= > elección guardada > idioma del móvil ---------- */
  function pickLang() {
    var qs = (new URLSearchParams(location.search).get('lang') || '').slice(0, 2).toLowerCase();
    if (I18N[qs]) return qs;

    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (I18N[saved]) return saved;
    } catch (e) { /* almacenamiento bloqueado */ }

    var prefs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (I18N[code]) return code;
    }
    return 'es';
  }

  function setMeta(sel, value) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute('content', value);
  }

  function apply(lang) {
    var t = I18N[lang] || I18N.es;
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    // Textos con etiquetas dentro (p. ej. el <strong> del cargo)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-alt')];
      if (v != null) el.setAttribute('alt', v);
    });

    // Cabecera del documento y vista previa al compartir
    document.title = t['doc.title'];
    setMeta('meta[name="description"]', t['doc.desc']);
    setMeta('meta[property="og:title"]', t['og.title']);
    setMeta('meta[property="og:description"]', t['og.desc']);

    // Mensaje de WhatsApp en el idioma elegido
    var wa = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t['wa.text']);
    document.querySelectorAll('.js-wa').forEach(function (a) { a.href = wa; });

    document.querySelectorAll('#lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
  }

  apply(pickLang());

  document.getElementById('lang').addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-lang]');
    if (!btn) return;
    apply(btn.dataset.lang);
    try { localStorage.setItem(STORE_KEY, current); } catch (e) { /* ignorar */ }
  });

  /* ---------- Aviso flotante ---------- */
  var toast = document.getElementById('toast');
  var toastTimer;

  function notify(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }

  /* ---------- Compartir con el menú nativo del móvil ---------- */
  var shareBtn = document.getElementById('share');
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener('click', function () {
      navigator.share({
        title: document.title,
        text: I18N[current]['share.text'],
        // Se comparte el idioma que se está viendo
        url: location.origin + location.pathname + '?lang=' + current
      }).catch(function () { /* el usuario canceló */ });
    });
  }

  /* ---------- Botones "Copiar" ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          notify(I18N[current]['copied']);
        });
      } else {
        notify(text);
      }
    });
  });
})();
