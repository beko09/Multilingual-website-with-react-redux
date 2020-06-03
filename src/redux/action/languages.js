export const LANGUAGE_DATA = 'LANGUAGE_DATA';
export const selectLanguage = (languages,dir,lang) =>  {
    return {
        type: LANGUAGE_DATA,
        payload: languages,
        dir:dir,
        lang:lang,
    };
};