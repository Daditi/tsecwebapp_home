import React, { Component } from 'react';
import { db } from './config'
import Bell from './img/bell.png'
import './pe.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
// #42b078
class Pe extends Component {
    state = {
        pastevents: null
    }
    componentDidMount() {
        db.collection('pastevents')
            .get()
            .then(snapshot => {
                const pastevents = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    pastevents.push(data)
                })
                this.setState({ pastevents: pastevents })
            })
            .catch(error => console.log(error))
    }
 
    render() {

        return (<div> <div className=' head1 center grey-text darken-4'>
            <h1 >PAST EVENTS</h1>
        </div><div className='row'>
                {this.state.pastevents && this.state.pastevents.map(
                    pastevents => {
                        return (<div className='hov'>
                            <div className='coll col'>
                                <img className='ima shadow-lg' src={pastevents.image} />
                                <div className='cen center'>
                                    <strong>{pastevents.title}</strong>
                                </div>
                            </div>
                        </div>
                        )
                    }
                )}</div>
              
        </div>
        );
    }
}

export default Pe;