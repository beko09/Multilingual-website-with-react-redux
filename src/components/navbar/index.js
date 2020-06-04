import React, { Component } from 'react'
import { selectLanguage, defaultLang} from "../../redux/action/languages";
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import { languages } from '../languages/languages';
export class index extends Component {
    direction = (dir, lang) => {
        document.getElementsByTagName("body")[0].setAttribute("dir", dir);
        document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    };
    changeLang = (languages, lang, dir) => {
        this.props.selectLanguage(
            languages,
            dir,
            lang,
            );
            this.direction(dir,lang)
    };
    componentDidMount() {
        this.direction(this.props.dir,this.props.lang);
        this.props.defaultLang()
    }
    render() {
        return (
            <Navbar
                languages={languages}
                changeLang={this.changeLang}
            />
            
        )
    }
}

const mapStateToProps = (state) => ({
    selectedLanguage: state.Languages,
    dir: state.Languages.dir,
    lang: state.Languages.lang,
});

export default connect(mapStateToProps, {
    selectLanguage,
    defaultLang,
})(index);