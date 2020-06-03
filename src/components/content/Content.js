import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './content.css';
import { selectLanguage } from "../../redux/action/languages";
class Content extends Component {
    render() {
        const {
          title,
          content,
          youLang,
          lang,
          link,
          article,
        } = this.props.languages;
        
        
        return (
          <Fragment>
            <div className="content">
              <p>
                <span>{link}</span>
                <a href="https://medium.com/@abobakerhlal09/multilingual-site-by-react-and-redux-d8a8dc961817">
                  {article}
                </a>
              </p>
              <p>
                {youLang} : {lang}
              </p>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    languages: state.Languages.languages,
});

export default connect(mapStateToProps, {
    selectLanguage,
})(Content);
