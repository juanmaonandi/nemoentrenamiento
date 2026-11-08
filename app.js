/**
 * NEMO ENTRENAMIENTO - Script Principal
 * Dinamismo, tienda, interactividad, renderizado desde data.js, canvas neuronal y diagrama de Venn
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar renderizado de datos
  renderHistoria();
  renderFilosofia();
  renderMetodologia();
  renderEntrenamientos();
  renderTienda();
  renderEquipo();
  renderHorarios();
  renderGaleria();
  renderTestimonios();
  renderContactoInfo();
  
  // 2. Inicializar interactividad
  initNeuralCanvas();
  initHeader();
  initMobileMenu();
  initScrollSpyAndAnimations();
  initLightbox();
  initTestimonialsSlider();
  
  // 3. Inicializar iconos Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Helper para generar URL de WhatsApp
function getWhatsAppUrl(customMessage) {
  const number = NEMO_DATA.contacto.whatsappNumber;
  const message = encodeURIComponent(customMessage || NEMO_DATA.contacto.mensajeDefault);
  return `https://wa.me/${number}?text=${message}`;
}

// --------------------------------------------------------------------------
// RENDER: Información de Contacto
// --------------------------------------------------------------------------
function renderContactoInfo() {
  const wppButtons = document.querySelectorAll('[data-wpp-btn]');
  wppButtons.forEach(btn => {
    btn.href = getWhatsAppUrl(btn.getAttribute('data-wpp-msg') || NEMO_DATA.contacto.mensajeDefault);
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });

  const igLinks = document.querySelectorAll('[data-ig-link]');
  igLinks.forEach(link => {
    link.href = NEMO_DATA.contacto.instagramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

// --------------------------------------------------------------------------
// RENDER: TIENDA OFICIAL NEMO (Todos los productos siempre visibles)
// Camperones, Remeras, Pelotas Panther, Yorugua, Fobal
// --------------------------------------------------------------------------
function renderTienda() {
  const container = document.getElementById('tienda-container');
  if (!container) return;

  // Siempre renderizamos la colección completa para que ningún producto desaparezca
  container.innerHTML = NEMO_DATA.tienda.map(item => `
    <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between reveal group">
      
      <!-- Imagen del producto con efecto y Lightbox -->
      <div 
        class="relative h-64 sm:h-72 bg-slate-900 overflow-hidden cursor-pointer"
        onclick="openLightbox('${item.imagen}', '${item.nombre}', '${item.descripcion.replace(/'/g, "\\'")}')"
        title="Hacé clic para ampliar la imagen"
      >
        <img 
          src="${item.imagen}" 
          alt="${item.nombre}" 
          class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="badge-celeste shadow-md">${item.categoria}</span>
        </div>
        ${item.destacado ? `
          <div class="absolute top-4 right-4">
            <span class="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              ★ Oficial
            </span>
          </div>
        ` : ''}
        <div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <i data-lucide="maximize-2" class="w-4 h-4"></i>
        </div>
      </div>

      <!-- Información del Producto -->
      <div class="p-6 md:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">${item.nombre}</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-6">${item.descripcion}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <a href="${getWhatsAppUrl(item.mensajeWpp)}" target="_blank" rel="noopener noreferrer" class="btn-celeste w-full text-center text-xs py-3 px-4 shadow-sm">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Consultar / Comprar</span>
          </a>
        </div>
      </div>

    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// RENDER: Línea de Tiempo (Nuestra Historia)
// --------------------------------------------------------------------------
function renderHistoria() {
  const container = document.getElementById('historia-container');
  if (!container) return;

  container.innerHTML = NEMO_DATA.historia.map((item, index) => {
    const isEven = index % 2 === 0;
    return `
      <div class="timeline-item flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12 reveal">
        
        <!-- Contenido textual -->
        <div class="w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}">
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div class="flex items-center gap-3 mb-3 ${isEven ? 'md:justify-start' : 'md:justify-end'}">
              <span class="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight">${item.anio}</span>
              <span class="badge-celeste">${item.tag}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3">${item.titulo}</h3>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${item.descripcion}</p>
          </div>
        </div>

        <!-- Punto central del Timeline -->
        <div class="timeline-dot"></div>

        <!-- Tarjeta de Imagen -->
        <div class="w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}">
          <div 
            class="relative overflow-hidden rounded-3xl shadow-lg border border-slate-200/80 bg-slate-900 group cursor-pointer h-72 sm:h-84 md:h-96"
            onclick="openLightbox('${item.imagen}', 'NEMO ${item.anio} · ${item.titulo}', '${item.descripcion.replace(/'/g, "\\'")}')"
            title="Hacé clic para ampliar la foto"
          >
            <img 
              src="${item.imagen}" 
              alt="${item.titulo}" 
              class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              loading="lazy" 
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-5">
              <div>
                <span class="badge-celeste text-[10px] mb-1">${item.tag}</span>
                <span class="text-white text-xs sm:text-sm font-bold block">${item.titulo}</span>
              </div>
              <div class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i data-lucide="maximize-2" class="w-4 h-4"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// RENDER: Filosofía (4 Pilares)
// --------------------------------------------------------------------------
function renderFilosofia() {
  const container = document.getElementById('filosofia-container');
  if (!container) return;

  container.innerHTML = NEMO_DATA.filosofiaPilares.map(pilar => `
    <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 reveal flex flex-col justify-between group">
      <div>
        <div class="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          <i data-lucide="${pilar.icono}" class="w-7 h-7"></i>
        </div>
        <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-wide group-hover:text-sky-600 transition-colors">${pilar.titulo}</h3>
        <p class="text-sky-700 font-bold text-sm mb-4 leading-snug">${pilar.resumen}</p>
        <p class="text-slate-600 text-sm leading-relaxed">${pilar.detalle}</p>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// RENDER: Metodología Interactiva con Diagrama de Venn
// --------------------------------------------------------------------------
function renderMetodologia() {
  const detailContainer = document.getElementById('metodologia-detail');
  if (!detailContainer) return;
  updateDimensionDetail('centro');
}

window.selectVennSection = function(sectionId) {
  document.querySelectorAll('.venn-circle-btn').forEach(btn => {
    btn.classList.remove('active', 'border-sky-400', 'bg-sky-500/20');
  });

  const activeBtn = document.querySelector(`[data-venn-id="${sectionId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'border-sky-400', 'bg-sky-500/20');
  }

  document.querySelectorAll('.venn-svg-circle').forEach(c => {
    c.classList.remove('stroke-white', 'stroke-[4]');
    c.classList.add('stroke-sky-300/40', 'stroke-[2]');
  });

  const activeSvg = document.getElementById(`svg-circle-${sectionId}`);
  if (activeSvg) {
    activeSvg.classList.remove('stroke-sky-300/40', 'stroke-[2]');
    activeSvg.classList.add('stroke-white', 'stroke-[4]');
  }

  updateDimensionDetail(sectionId);
};

function updateDimensionDetail(sectionId) {
  const detailContainer = document.getElementById('metodologia-detail');
  if (!detailContainer) return;

  if (sectionId === 'centro') {
    detailContainer.innerHTML = `
      <div class="animate-fadeIn bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white p-8 md:p-10 rounded-3xl border border-sky-500/30 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 opacity-10 text-white">
          <i data-lucide="users" class="w-64 h-64"></i>
        </div>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-sky-500 text-white font-black text-xs uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-md">
              Intersección Central
            </span>
            <span class="text-sky-300 text-xs font-semibold">Metodología Integrada</span>
          </div>

          <h3 class="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            NEMO / LA PERSONA
          </h3>
          <p class="text-sky-300 text-base md:text-lg font-bold mb-5">
            ${NEMO_DATA.metodologia.centroLema}
          </p>
          <p class="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            ${NEMO_DATA.metodologia.centroDetalle}
          </p>

          <div class="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/80 text-center">
            <div class="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span class="text-xs font-black text-sky-400 block mb-0.5">01</span>
              <span class="text-xs font-bold text-white uppercase">Socioafectivo</span>
            </div>
            <div class="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span class="text-xs font-black text-sky-400 block mb-0.5">02</span>
              <span class="text-xs font-bold text-white uppercase">Juego</span>
            </div>
            <div class="bg-white/5 p-3 rounded-2xl border border-white/10">
              <span class="text-xs font-black text-sky-400 block mb-0.5">03</span>
              <span class="text-xs font-bold text-white uppercase">Funcional</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    const dim = NEMO_DATA.metodologia.dimensiones.find(d => d.id === sectionId);
    if (!dim) return;

    detailContainer.innerHTML = `
      <div class="animate-fadeIn bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-10 rounded-3xl border border-sky-500/20 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 opacity-10 text-white">
          <i data-lucide="${dim.icono}" class="w-64 h-64"></i>
        </div>
        <div class="relative z-10">
          <div class="flex items-center justify-between gap-3 mb-4">
            <span class="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase px-3 py-1 rounded-full">
              Dimensión Metodológica
            </span>
            <button onclick="selectVennSection('centro')" class="text-xs text-sky-300 hover:text-white flex items-center gap-1 underline underline-offset-4">
              <span>Ver intersección central</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <h3 class="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            ${dim.nombre}
          </h3>
          <p class="text-sky-300 text-base md:text-lg font-bold mb-5 leading-snug">
            "${dim.lema}"
          </p>
          <div class="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal space-y-3">
            ${dim.descripcion.split('\n\n').map(par => `<p>${par}</p>`).join('')}
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-700/80">
            ${dim.tags.map(tag => `
              <span class="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// RENDER: Entrenamientos (Con los nuevos textos y botones a WhatsApp e Instagram)
// --------------------------------------------------------------------------
function renderEntrenamientos() {
  const container = document.getElementById('entrenamientos-container');
  if (!container) return;

  container.innerHTML = NEMO_DATA.entrenamientos.map(prog => `
    <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col reveal group">
      <div 
        class="relative h-64 overflow-hidden cursor-pointer"
        onclick="openLightbox('${prog.imagen}', '${prog.nombre}', '${prog.descripcion.replace(/'/g, "\\'")}')"
        title="Hacé clic para ampliar"
      >
        <img src="${prog.imagen}" alt="${prog.nombre}" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="badge-celeste shadow-sm">${prog.categoria}</span>
        </div>
        ${prog.badge ? `
          <div class="absolute bottom-4 left-4 right-4">
            <span class="bg-sky-500/95 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full inline-block">
              ${prog.badge}
            </span>
          </div>
        ` : ''}
      </div>

      <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">${prog.destacado}</span>
          <h3 class="text-2xl font-black text-slate-900 mb-3">${prog.nombre}</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">${prog.descripcion}</p>
          
          <ul class="space-y-2 mb-6 text-sm text-slate-700">
            ${prog.items.map(item => `
              <li class="flex items-start gap-2.5">
                <i data-lucide="check" class="w-4 h-4 text-sky-600 shrink-0 mt-0.5"></i>
                <span class="text-xs sm:text-sm leading-relaxed">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
          <a href="${getWhatsAppUrl(prog.mensajeWpp)}" target="_blank" rel="noopener noreferrer" class="btn-celeste flex-1 text-center text-xs sm:text-sm py-3 px-4">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Quiero participar</span>
          </a>
          <a href="${NEMO_DATA.contacto.instagramUrl}" target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-600 flex items-center justify-center shrink-0 transition-colors" title="Ver en Instagram @nemoentrenamiento">
            <i data-lucide="instagram" class="w-5 h-5"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// RENDER: Nuestro Equipo (Inés, Juan, Camilo / Enzo, Lautaro)
// --------------------------------------------------------------------------
function renderEquipo() {
  const container = document.getElementById('equipo-container');
  if (!container) return;

  const cardHtml = (profe) => `
    <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center reveal">
      <div class="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-sky-100 shadow-md bg-sky-50">
        <img src="${profe.imagen}" alt="${profe.nombre}" class="w-full h-full object-cover ${profe.fotoPosicion || 'object-center'}" loading="lazy" />
      </div>

      <h3 class="text-2xl font-extrabold text-slate-900 mb-1">${profe.nombre}</h3>
      <span class="text-sky-600 font-bold text-sm mb-4 block">${profe.rol}</span>

      <div class="space-y-1.5 mb-5 w-full bg-slate-50 p-4 rounded-2xl flex-1 flex flex-col justify-center">
        ${profe.titulos.map(t => `
          <div class="text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5">
            <i data-lucide="award" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i>
            <span>${t}</span>
          </div>
        `).join('')}
      </div>

      <p class="text-slate-600 text-sm leading-relaxed">${profe.bio}</p>
    </div>
  `;

  const filaArriba = NEMO_DATA.equipo.slice(0, 3);
  const filaAbajo = NEMO_DATA.equipo.slice(3);

  container.innerHTML = `
    <!-- Fila Superior: Inés, Juan, Camilo -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      ${filaArriba.map(cardHtml).join('')}
    </div>

    <!-- Fila Inferior Centrada: Enzo Puoy, Lautaro Remuñan -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      ${filaAbajo.map(cardHtml).join('')}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// RENDER: Horarios y Filtros
// --------------------------------------------------------------------------
let currentScheduleFilter = 'Todos';

function renderHorarios(filter = 'Todos') {
  currentScheduleFilter = filter;
  const container = document.getElementById('horarios-list');
  if (!container) return;

  const normalize = (str) => (str || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const cleanFilter = normalize(filter);

  let filtered = NEMO_DATA.horarios;
  if (cleanFilter !== 'todos') {
    filtered = NEMO_DATA.horarios.filter(h => {
      const cat = normalize(h.categoria);
      const act = normalize(h.actividad);
      return cat === cleanFilter || cat.includes(cleanFilter) || cleanFilter.includes(cat) || act.includes(cleanFilter);
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
        <p class="text-slate-600 mb-3">No hay horarios específicos listados en este momento para esta categoría.</p>
        <button onclick="filterHorarios('Todos')" class="btn-celeste text-xs py-2 px-4">Ver Todos los Horarios</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(h => `
    <div class="schedule-card bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
      <div class="flex-1">
        <div class="flex items-center gap-2.5 mb-2">
          <span class="badge-celeste">${h.categoria}</span>
          <span class="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            ${h.cupos}
          </span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${h.actividad}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
          <div class="flex items-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4 text-sky-600"></i>
            <span>${h.dias}</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4 text-sky-600"></i>
            <span class="font-semibold text-slate-800">${h.hora}</span>
          </div>
          <div class="flex items-center gap-2 sm:col-span-2">
            <i data-lucide="map-pin" class="w-4 h-4 text-sky-600"></i>
            <span>${h.lugar}</span>
          </div>
        </div>
      </div>

      <div class="md:text-right shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
        <a href="${getWhatsAppUrl(h.mensajeWpp)}" target="_blank" rel="noopener noreferrer" class="btn-outline-celeste w-full md:w-auto text-sm">
          <span>CONSULTAR DISPONIBILIDAD</span>
          <i data-lucide="message-circle" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.filterHorarios = function(categoria, btnElement) {
  document.querySelectorAll('.schedule-filter-btn').forEach(btn => {
    btn.classList.remove('bg-sky-600', 'text-white', 'shadow-sm');
    btn.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btnElement) {
    btnElement.classList.add('bg-sky-600', 'text-white', 'shadow-sm');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderHorarios(categoria);
};

// --------------------------------------------------------------------------
// RENDER: Galería Mosaico ("NEMO en Movimiento")
// --------------------------------------------------------------------------
function renderGaleria(filtro = 'todos') {
  const container = document.getElementById('galeria-mosaico');
  if (!container) return;

  const items = filtro === 'todos'
    ? NEMO_DATA.galeria
    : NEMO_DATA.galeria.filter(g => g.categoria === filtro);

  container.innerHTML = items.map(item => `
    <div class="mosaic-item ${item.tamano}" onclick="openLightbox('${item.imagen}', '${item.titulo}', '${item.descripcion.replace(/'/g, "\\'")}')">
      <div class="mosaic-card">
        <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" />
        <div class="mosaic-overlay">
          <span class="text-xs text-sky-300 uppercase tracking-widest font-bold mb-1">${item.categoria}</span>
          <h4 class="text-lg font-bold text-white mb-0.5">${item.titulo}</h4>
          <p class="text-xs text-slate-200">${item.descripcion}</p>
        </div>
      </div>
    </div>
  `).join('');
}

window.filterGaleria = function(cat, btn) {
  document.querySelectorAll('.galeria-filter-btn').forEach(b => {
    b.classList.remove('bg-slate-900', 'text-white');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btn) {
    btn.classList.add('bg-slate-900', 'text-white');
    btn.classList.remove('bg-slate-100', 'text-slate-700');
  }
  renderGaleria(cat);
};

// --------------------------------------------------------------------------
// RENDER: Testimonios Slider
// --------------------------------------------------------------------------
let currentTestimonialIdx = 0;
let testimonialInterval;

function renderTestimonios() {
  const container = document.getElementById('testimonios-wrapper');
  const dotsContainer = document.getElementById('testimonios-dots');
  if (!container) return;

  container.innerHTML = NEMO_DATA.testimonios.map((t, idx) => `
    <div class="testimonial-slide w-full shrink-0 transition-opacity duration-500 ${idx === 0 ? 'opacity-100 block' : 'opacity-0 hidden'}" data-slide="${idx}">
      <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 text-center">
        <div class="flex justify-center gap-1 text-amber-400 mb-6">
          ${Array(t.estrellas).fill('<i data-lucide="star" class="w-5 h-5 fill-current"></i>').join('')}
        </div>
        <p class="text-lg md:text-2xl font-medium text-slate-800 italic mb-8 leading-relaxed">
          "${t.comentario}"
        </p>
        <div class="pt-6 border-t border-slate-100 mt-6 inline-block text-center">
          <h4 class="font-bold text-slate-900 text-lg sm:text-xl">${t.nombre}</h4>
          ${t.grupo ? `<p class="text-xs sm:text-sm text-sky-600 font-semibold mt-1">${t.grupo}</p>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = NEMO_DATA.testimonios.map((_, idx) => `
      <button onclick="goToTestimonial(${idx})" class="w-3 h-3 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-sky-600 w-8' : 'bg-slate-300'}" data-dot="${idx}"></button>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

function showTestimonial(idx) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('[data-dot]');
  slides.forEach((slide, i) => {
    if (i === idx) {
      slide.classList.remove('hidden');
      setTimeout(() => slide.classList.add('opacity-100'), 20);
    } else {
      slide.classList.add('hidden');
      slide.classList.remove('opacity-100');
    }
  });
  dots.forEach((dot, i) => {
    if (i === idx) {
      dot.classList.add('bg-sky-600', 'w-8');
      dot.classList.remove('bg-slate-300');
    } else {
      dot.classList.remove('bg-sky-600', 'w-8');
      dot.classList.add('bg-slate-300');
    }
  });
  currentTestimonialIdx = idx;
}

window.goToTestimonial = function(idx) {
  showTestimonial(idx);
  resetTestimonialTimer();
};

window.nextTestimonial = function() {
  const next = (currentTestimonialIdx + 1) % NEMO_DATA.testimonios.length;
  showTestimonial(next);
};

window.prevTestimonial = function() {
  const prev = (currentTestimonialIdx - 1 + NEMO_DATA.testimonios.length) % NEMO_DATA.testimonios.length;
  showTestimonial(prev);
};

function resetTestimonialTimer() {
  clearInterval(testimonialInterval);
  testimonialInterval = setInterval(nextTestimonial, 7000);
}

function initTestimonialsSlider() {
  resetTestimonialTimer();
}

// --------------------------------------------------------------------------
// INTERACTIVE: Canvas Neuronal y Movimiento en "¿Qué es NEMO?"
// --------------------------------------------------------------------------
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;
  const maxDistance = 140;

  function resize() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2.5 + 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(14, 165, 233, ${alpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// --------------------------------------------------------------------------
// INTERACTIVE: Header & Menu Mobile
// --------------------------------------------------------------------------
function initHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// --------------------------------------------------------------------------
// INTERACTIVE: Scroll Animations (IntersectionObserver)
// --------------------------------------------------------------------------
function initScrollSpyAndAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// INTERACTIVE: Lightbox Modal
// --------------------------------------------------------------------------
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

window.openLightbox = function(src, title, desc) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  if (modal && img) {
    img.src = src;
    if (caption) {
      caption.innerHTML = `
        <h4 class="text-xl font-bold text-white mb-1">${title}</h4>
        <p class="text-slate-300 text-sm max-w-xl mx-auto">${desc}</p>
      `;
    }
    modal.classList.add('active');
  }
};
