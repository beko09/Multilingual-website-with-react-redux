import { languages } from '../../components/languages/languages';

export const LANGUAGE_DATA = 'LANGUAGE_DATA';
export const SET_LANGUAGE_DATA = 'SET_LANGUAGE_DATA';

export const defaultLang = (language = languages.english, dir = languages.english.dir, lang = languages.english.lang) => {
    return {
        type: SET_LANGUAGE_DATA,
        payload: language,
        dir: dir,
        lang: lang,
    };
};
export const selectLanguage = (language,dir,lang) =>  {
    return {
        type: LANGUAGE_DATA,
        payload: language,
        dir:dir,
        lang:lang,
    };
};