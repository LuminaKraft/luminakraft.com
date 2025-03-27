import esJson from '../../lang/es.json';
import enJson from '../../lang/en.json';

type Locale = 'es' | 'en';
type Translations = Record<string, string>;

const translations: Record<Locale, Translations> = {
  es: esJson,
  en: enJson
};

// Función para obtener el idioma del usuario desde localStorage o usar el predeterminado
export function getUserLocale(): Locale {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('selectedLanguage');
    if (savedLocale === 'en' || savedLocale === 'es') {
      return savedLocale;
    }
  }
  return 'es'; // Idioma predeterminado
}

// Función para guardar el idioma del usuario en localStorage
export function saveUserLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedLanguage', locale);
  }
}

export function getTranslation(key: string, locale: Locale = 'es'): string {
  if (!translations[locale][key]) {
    console.warn(`Missing translation for key: ${key} in locale: ${locale}`);
    return key;
  }
  return translations[locale][key];
}

export function getAllTranslations(locale: Locale = 'es'): Translations {
  return translations[locale];
} 