
export const availableLocales = ["pl","en"]
export const DEFAULT_LOCALE = 'en';
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export {default as resolveBrowserLocale} from './TranslationUtils';
export {default as translate} from './translate';
export {default as Translate} from './TranslateRender';
export {default as TranslationProvider, Context} from './TranslationProvider';

export function changeLocale(locale) {
  if(availableLocales.indexOf(locale) > -1) {
    return {
      type: CHANGE_LOCALE,
      locale : locale
    }
  }
}
