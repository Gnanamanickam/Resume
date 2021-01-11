import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Gnani.jpg)'}} />
              <div style={{margintop: "50px"}}></div>
              <h1 id="colorlib-logo"><a href="index.html">Gnanamanickam</a></h1>
              <span className="email"><i className="icon-mail"></i>garumu3@uic.edu</span>
              <span className="phone3"><i className="phone3"></i>+1(312)468-3355</span>
            </div>
            <div>
            </div>

            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse" style={{margintop: "500px"}}>
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#about" data-nav-section="about">Expertise</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/Gnanamanickam.A" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/imGmanick" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/gnanamanickam/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/gnanamanickam/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Gnanamanickam" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <p><small>
              </small></p>
            </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
