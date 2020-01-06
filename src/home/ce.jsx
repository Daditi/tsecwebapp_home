import React, { Component } from 'react';
import {db} from './config'
import Bell from './img/bell.png'
import './ce.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
// #42b078
class Ce extends Component {
    state = {
       currentevents: null
      }
      componentDidMount()
      {
          db.collection('currentevents')
          .get()
          .then(snapshot => {
              const currentevents = []
            snapshot.forEach(doc => {
                const data = doc.data()
                currentevents.push(data)
            })
            this.setState({currentevents: currentevents})
            })
            .catch(error => console.log(error))
      }
    render() { 
        
        return (<div> <div className=' head2 center grey-text darken-4'>
            <h1 >CURRENT EVENTS</h1>
        </div><div className='row'>
           {this.state.currentevents && this.state.currentevents.map(
               currentevents => { return (<div className='hov'>
                  <div className='coll col'>
                      <img  className='ima center' src={currentevents.image} />
                      <div className='cen center'>
                          <strong>{currentevents.title}</strong>
                      </div>
                      </div>
                   </div>
               )}
           )}</div>
         </div>
        );
    }
}
 
export default Ce;