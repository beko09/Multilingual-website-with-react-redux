import React, { Component, Fragment } from 'react'
import '../style.css'

class Navbar extends Component {
    render() {
        const lang = this.props.languages;
        const changeLang = this.props.changeLang;
        return (
           <Fragment>
               <header>
                   <div className="nav">
                        <button onClick={() => changeLang(lang.english, "en", "ltr")}>EN</button>
                        <button onClick={() => changeLang(lang.arbic, "ar", "rtl")}>AR</button>
                        <button onClick={() => changeLang(lang.france, "fr", "ltr")}>FR</button>
                   </div>
               </header>
           </Fragment>
        )
    }
}

export default Navbar
