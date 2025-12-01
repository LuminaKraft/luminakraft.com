import esJson from '../i18n/es.json';
import enJson from '../i18n/en.json';

export type Locale = 'es' | 'en';
type Translations = Record<string, string>;

// Cargar las traducciones
export const translations: Record<Locale, Translations> = {
  es: esJson,
  en: enJson
};

// Declare the global window interface to add our translation cache
declare global {
  interface Window {
    translationsCache?: Record<Locale, Translations>;
    updateTooltipsForLocale?: (locale: Locale) => void;
  }
}

// Inicializar caché de traducciones cuando estamos en el navegador
if (typeof window !== 'undefined') {
  window.translationsCache = translations;
}

// Función para obtener el idioma del usuario desde cookies o detectar el idioma del navegador
export function getUserLocale(): Locale {
  if (typeof window !== 'undefined') {
    try {
      // Intentar obtener el idioma de cookies (prioridad)
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'selectedLanguage' && (value === 'en' || value === 'es')) {
          return value as Locale;
        }
      }

      // Si no hay cookie, detectar el idioma del navegador
      const browserLang = navigator.language || (navigator as any).userLanguage;
      if (browserLang) {
        // Detectar si es español de cualquier país donde el español es el idioma principal
        const isSpanish = browserLang.toLowerCase().startsWith('es');
        const locale = isSpanish ? 'es' : 'en';

        // Guardar la preferencia detectada en una cookie
        document.cookie = `selectedLanguage=${locale}; max-age=31536000; path=/; SameSite=Strict`;
        return locale as Locale;
      }
    } catch (e) {
      console.warn('Error accessing browser cookies or language:', e);
    }
  }

  return 'es'; // Idioma predeterminado si no se puede detectar
}

// Función para guardar el idioma del usuario en cookies
export function saveUserLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    // Guardar en cookie con duración de 1 año
    document.cookie = `selectedLanguage=${locale}; max-age=31536000; path=/; SameSite=Strict`;

    // Disparar evento personalizado para notificar a los componentes
    const event = new CustomEvent('languageChanged', {
      detail: { locale }
    });
    document.dispatchEvent(event);
  }
}

// Función de traducción
export function getTranslation(key: string, locale: Locale = 'es'): string {
  // Asegurarnos de que el locale nunca sea undefined o null
  const safeLocale = locale === 'en' ? 'en' : 'es';

  // Verificar que tenemos las traducciones para este idioma
  if (!translations[safeLocale]) {
    console.error(`No translations found for locale: ${safeLocale}`);
    return key;
  }

  // Buscar la traducción
  if (!translations[safeLocale][key]) {
    console.warn(`Missing translation for key: ${key} in locale: ${safeLocale}`);
    return key;
  }

  return translations[safeLocale][key];
}

export function getAllTranslations(locale: Locale): Translations {
  // Asegurarnos de que el locale nunca sea undefined o null
  const safeLocale = locale === 'en' ? 'en' : 'es';
  return translations[safeLocale];
}

// Función para actualizar dinámicamente los textos en la página
export function updateTextsForLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;

  // Actualizar todos los elementos con atributo data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      element.textContent = getTranslation(key, locale);
    }
  });

  // Actualizar elementos con contenido HTML (data-i18n-html)
  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (key) {
      element.innerHTML = getTranslation(key, locale);
    }
  });

  // Actualizar tooltips
  updateTooltipsForLocale(locale);

  // Disparar evento personalizado para componentes que necesitan actualización especial
  const event = new CustomEvent('languageChanged', {
    detail: { locale }
  });
  document.dispatchEvent(event);
}

// Función para actualizar tooltips basados en atributos data-i18n-tooltip
export function updateTooltipsForLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;

  // Actualizar todos los elementos con atributo data-i18n-tooltip
  const elements = document.querySelectorAll('[data-i18n-tooltip]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n-tooltip');
    if (key) {
      element.setAttribute('title', getTranslation(key, locale));
    }
  });
}

// Make updateTooltipsForLocale available on window
if (typeof window !== 'undefined') {
  window.updateTooltipsForLocale = updateTooltipsForLocale;
}