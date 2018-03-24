export const DEFAULT_LOCALE = 'en';



import resolveBrowserLocale from './TranslationUtils';

import translate from './translate';
import TranslationProvider from './TranslationProvider';
import withPolyglot from './withPolyglot'


import defaultMessages from './messages';
import customMessages from './translations'


export {resolveBrowserLocale, translate, TranslationProvider, withPolyglot, defaultMessages, customMessages}
