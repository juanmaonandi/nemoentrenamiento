# NEMO Entrenamiento — Sitio Web Oficial

> **"Todo tu ser en movimiento."**  
> Espacio social, cultural y deportivo en Maldonado y Punta del Este, Uruguay.

---

## 🌟 Características de la Web

1. **Identidad Visual Minimalista y Deportiva:**
   - Paleta celeste (#0284c7, #0ea5e9, #38bdf8), blanco y carbón suave.
   - Tipografía **Montserrat** limpia con espacios amplios y sin estética agresiva de gimnasio.
   - Animaciones discretas al hacer scroll con `IntersectionObserver`.

2. **Estructura Completa de Secciones:**
   - **Header Fijo:** Navegación suave, logo NEMO y botón directo a WhatsApp.
   - **Hero / Portada:** Experiencia visual de pantalla completa con lema y llamada a la acción.
   - **¿Qué es NEMO? ("Mucho más que entrenar"):** Canvas interactivo de sinapsis neuronales y movimiento.
   - **Nuestra Historia:** Línea de tiempo animada (2020 a 2026) con hitos y fotografías.
   - **Nuestra Filosofía:** Los 4 pilares: *Movimiento, Juego, Vínculos, Bienestar*.
   - **Metodología NEMO 5D:** Gráfico interactivo con **LA PERSONA** en el centro conectada a sus 5 dimensiones (*Físico, Técnico, Cognitivo, Emocional y Social*).
   - **Entrenamientos:** Tarjetas modernas para *Funcional Fútbol, Funcional Fútbol Femenino, Adolescentes, Niños y Tecnificación*.
   - **Nuestro Equipo:** Perfiles profesionales de *Juan Manuel Onandi, Camilo y Enzo*.
   - **Horarios:** Grilla interactiva optimizada para móvil con filtros por categoría y botón de consulta directa por WhatsApp con mensaje predeterminado.
   - **NEMO en Movimiento:** Mosaico dinámico de galería con filtros y visualizador Lightbox a pantalla completa.
   - **Comunidad:** Espacio social *"Entrenar juntos también es encontrarnos"*.
   - **Testimonios:** Carrusel táctil y automático con opiniones reales.
   - **Contacto / ¿Te sumás?:** Llamado a la acción con enlaces a WhatsApp y a Instagram `@nemoentrenamiento`.
   - **Botón Flotante de WhatsApp:** Accesible en cualquier momento con animación de pulso.

---

## 🚀 Cómo Ejecutar la Web Localmente

La web está construida con tecnologías web estándar de alto rendimiento (HTML5, Tailwind CSS, Lucide Icons, Vanilla ES6+), por lo que **no requiere ningún proceso de compilación previo**.

### Opción 1: Abrir directamente en el navegador
1. Haz doble clic en el archivo `index.html` o arrástralo a tu navegador (Chrome, Edge, Firefox, Safari).

### Opción 2: Usar un servidor local ligero
Si tienes Python o Node.js instalado:
```bash
# Con Python 3
python -m http.server 3000

# Con Node (npx)
npx serve .
```
Luego abre `http://localhost:3000` en tu navegador.

---

## 🛠️ Cómo Modificar Contenidos Fácilmente (`data.js`)

Todos los contenidos dinámicos están centralizados en el archivo `data.js`. Para actualizar cualquier dato, solo debes editar ese archivo:

- **Cambiar número de WhatsApp:** Modifica `contacto.whatsappNumber` y `contacto.whatsappDisplay`.
- **Modificar Horarios:** Agrega o edita elementos en el array `horarios`.
- **Agregar Nuevos Profesores:** Agrega un nuevo objeto al array `equipo`.
- **Actualizar Fotos de la Galería:** Edita o agrega elementos en el array `galeria`.
- **Modificar la Historia:** Agrega nuevos años en el array `historia`.
- **Nuevos Testimonios:** Modifica el array `testimonios`.

---

## 🌐 Cómo Desplegar a Internet (Gratis)

Puedes subir esta carpeta a cualquiera de estas plataformas en 1 minuto:

1. **Netlify:** Arrastra la carpeta `nemo-entrenamiento` en [app.netlify.com/drop](https://app.netlify.com/drop).
2. **Vercel:** Ejecuta `npx vercel` dentro de la carpeta o conéctala a un repositorio de GitHub.
3. **GitHub Pages:** Sube los archivos a una rama `main` y activa GitHub Pages en *Settings -> Pages*.

---

*Desarrollado para NEMO Entrenamiento © 2026*
