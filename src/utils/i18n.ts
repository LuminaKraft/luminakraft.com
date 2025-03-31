import esJson from '../i18n/es.json';
import enJson from '../i18n/en.json';

export type Locale = 'es' | 'en';
type Translations = Record<string, string>;

// Cargar las traducciones
export const translations: Record<Locale, Translations> = {
  es: esJson,
  en: enJson
};

// Función para obtener el idioma del usuario desde las cookies o detectar el idioma del navegador
export function getUserLocale(): Locale {
  if (typeof window !== 'undefined') {
    // Intentar obtener el idioma de la cookie
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith('selectedLanguage=')) {
        const savedLocale = trimmedCookie.split('=')[1].trim();
        if (savedLocale === 'en' || savedLocale === 'es') {
          return savedLocale as Locale;
        }
      }
    }
    
    // Si no hay cookie, detectar el idioma del navegador
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang) {
      const lang = browserLang.substring(0, 2).toLowerCase();
      if (lang === 'en' || lang === 'es') {
        return lang as Locale;
      }
    }
  }
  
  return 'es'; // Idioma predeterminado si no se puede detectar
}

// Función para guardar el idioma del usuario en una cookie
export function saveUserLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    // Guardar cookie con expiración de 1 año
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    const cookieString = `selectedLanguage=${locale}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`;
    document.cookie = cookieString;
  }
}

// Función para depuración - buscar cookies del lado del cliente
export function logClientCookies() {
  if (typeof window !== 'undefined') {
    console.log('All client cookies:', document.cookie);
  }
}

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