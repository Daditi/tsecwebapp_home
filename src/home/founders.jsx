import React, { Component } from 'react';
import { db } from './config'
import Bell from './img/bell.png'
import './founders.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
// #42b078
class Founders extends Component {
    state = {
        founders: null
    }
    componentDidMount() {
        db.collection('founders')
            .get()
            .then(snapshot => {
                const founders = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    founders.push(data)
                })
                this.setState({ founders: founders })
            })
            .catch(error => console.log(error))
    }
    render() {

        return (<div> <div className=' head4 center grey-text darken-4'>
            <h1 >FOUNDERS</h1>
        </div><div className='row'>
                {this.state.founders && this.state.founders.map(
                    founders => {
                        return (<div className='hove'>
                            <div className='space col '>
                                <img className='imag hoverable' src={founders.image} />
                                <div className='spac center'>
                                    <strong>{founders.type}</strong><br />
                                    {founders.name}<br />
                                    {founders.profession}
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

export default Founders;