import { languages } from "../../components/languages/languages";
import { LANGUAGE_DATA } from '../action/languages';

const initialState = {
    languages:languages.english,
    dir: languages.english.dir,
    lang: languages.english.lang,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LANGUAGE_DATA:
            return {
                ...state,
                languages:action.payload,
                dir:action.dir,
                lang:action.lang,
            };
        default:
            return state;
    }
};