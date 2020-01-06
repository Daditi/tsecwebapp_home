import React, { Component } from 'react';
import Navbar from './home/navbar'
import Ce from './home/ce'
import Pe from './home/pe'
import Footer from './home/footer'
import Mentors from './home/mentors'
import Founders from './home/founders'
import Sliders from './home/slider'
import TeamDiscription from './home/teamDiscription'
class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              
               <Navbar />
               <div id='cont5' className="cont5 shadow-lg"><Sliders /></div>
               

                <div id='cont2' className="cont2 shadow-lg"><Ce /></div>

               <div id='cont1' className="cont1 shadow-lg"><Pe /></div> 
              
                <div id='cont3' className="cont3 shadow-lg"><Mentors /></div>
                <div id='cont4' className="cont4"><Founders /></div>
                <div id='cont6' className="cont6 container"><TeamDiscription /></div>
            <Footer />
            </div>
         );
    }
}
 
export default Landing;