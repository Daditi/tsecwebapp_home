 import React, { Component } from 'react';
import {Link} from 'react-scroll'
import Bell from './img/bell.png'
import Logo from './img/logo.png'
import './navbar.css'

class Navbar extends Component {
    state = {  }
    render() { 
        const padding={
            margin: '0px'
        }
        const size = {
            width: '150px',
            height: '60px',
           margin:'0px',
        }
        return (
         <div>
        <div style={padding} className="navbar-fixed">
            <nav>

                <div className="nav-wrapper cyan darken-4 ">
                    <div className='container'>
                        <img className='log' src={Logo} style={size} />
                            <a href="#" className="side sidenav-trigger right" data-target="mobile-links">
                                <i className="material-icons left">menu</i>
                            </a>
                    <ul className="nav-item row right hide-on-med-and-down"><Link
    activeClass="active"
    to="cont2"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>EVENTS</Link>
                            <Link
    activeClass="active"
    to="cont1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>PAST EVENTS</Link>
                             <Link
    activeClass="active"
    to="cont3"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>MENTORS</Link>
                         <Link
    activeClass="active"
    to="cont4"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>FOUNDERS</Link>
                       <li>LOGIN  </li>
                       <li> <img className='bel' src={Bell}  /></li>
                    
                            </ul> 
                </div></div>
            </nav>
        </div>
            <ul class="sidenav" id="mobile-links">
                <li><a href="">LOGIN</a></li>
                <li><a href="">CIRCULARS</a></li>
                
            </ul>
            </div>

     
        );
    }
}
export default Navbar;
