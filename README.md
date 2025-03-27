# LuminaKraft Website

Este proyecto es una reescritura completa del sitio web de LuminaKraft utilizando tecnologías modernas:

- 🚀 [Astro](https://astro.build/) - Framework para sitios web con contenido
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Framework CSS de utilidades
- 📝 [TypeScript](https://www.typescriptlang.org/) - JavaScript con sintaxis para tipos
- ✨ [CSS Personalizado](https://developer.mozilla.org/es/docs/Web/CSS/animation) - Animaciones CSS nativas

## 🗂️ Estructura del proyecto

```
/
├── public/           # Activos estáticos
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── data/         # Datos (servers.json)
│   ├── layouts/      # Plantillas de página
│   ├── pages/        # Páginas del sitio
│   └── utils/        # Utilidades (i18n)
├── lang/             # Archivos de idioma
│   ├── es.json
│   └── en.json
├── astro.config.mjs  # Configuración de Astro
└── tailwind.config.mjs # Configuración de Tailwind
```

## 🚀 Instalación

```bash
# Navegar al directorio del proyecto
cd web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## ✨ Características

- **Diseño Modular**: Componentes reutilizables para todas las secciones.
- **Rutas Dinámicas**: Páginas generadas dinámicamente para servidores.
- **Multilenguaje**: Soporte completo para español e inglés.
- **Animaciones**: Transiciones suaves y efectos visuales implementados con CSS nativo para máxima compatibilidad con navegadores.
- **Optimización**: Carga diferida y alta puntuación en rendimiento.
- **Mantenibilidad**: Estructura organizada y fácil de ampliar.

## 🌍 Soporte de idiomas

El sitio soporta dos idiomas:
- 🇪🇸 Español (predeterminado)
- 🇬🇧 Inglés

Los textos se cargan desde los archivos JSON en `/lang/`.

## 🧩 Servidores

La información de los servidores se almacena de forma centralizada en `src/data/servers.json`, lo que facilita añadir nuevos servidores sin duplicar código.

## 📝 Notas

- Para añadir un nuevo servidor, simplemente agrega su información al archivo `servers.json`.
- Para agregar un nuevo idioma, crea un nuevo archivo JSON en `/lang/` y actualiza la configuración i18n en `astro.config.mjs`.
- Las animaciones del sitio están implementadas con CSS nativo para garantizar la máxima compatibilidad con todos los navegadores, incluyendo Firefox y navegadores basados en Firefox.