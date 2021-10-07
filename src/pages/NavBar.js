import React, {Component} from 'react';

class NavBar extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns">
               <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <img src="images/logo.gif" class = "images" alt="logo handicap moteur" width="40px"/> 
            <a class="navbar-brand" href="/">EPSI Toulouse</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="guide.html">Guide</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="plan.html">Plan accessiblilté</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/quizz">Quizz</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
                   </div>
                </div>  
	     );
    }
}
export default NavBar;