import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
        <div>
            <h2 id="intro">
                Hi! I'm Reese.
            </h2>
            <h5 class="bio">
                I love building out a beautiful and functional front end, as well as solving the challenges of back end logic. 
            </h5>
                <span class="titles"><Link class="link" to="/projects">Projects</Link></span><span class="titles"><Link class="link" to="/menu">About</Link></span>
                <span class="titles"><Link class="link" to="/menu">Contact</Link></span>
                <span class="titles"><Link class="link" to="/menu">Resume</Link></span>
        </div>
        </div>
    );
}

export default Menu;