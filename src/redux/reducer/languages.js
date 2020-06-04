import { languages } from "../../components/languages/languages";
import { LANGUAGE_DATA, SET_LANGUAGE_DATA } from '../action/languages';

const initialState = {
    languages:languages.english,
    dir: languages.english.dir,
    lang: languages.english.lang,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE_DATA:
            return action.payload
        case LANGUAGE_DATA:
            return action.payload
        default:
            return state;
    }
};