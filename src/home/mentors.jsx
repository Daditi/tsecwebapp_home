import React, { Component } from 'react';
import { db } from './config'
import Bell from './img/bell.png'
import './mentors.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
// #42b078
class Mentors extends Component {
    state = {
        mentors: null
    }
    componentDidMount() {
        db.collection('mentors')
            .get()
            .then(snapshot => {
                const mentors = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    mentors.push(data)
                })
                this.setState({ mentors: mentors })
            })
            .catch(error => console.log(error))
    }
    render() {

        return (<div> <div className=' head3 center grey-text darken-4'>
            <h1 >MENTORS</h1>
        </div><div className='row'>
                {this.state.mentors && this.state.mentors.map(
                    mentors => {
                        return (<div className='hove'>
                            <div className='space col'>
                                <img className='imagg hoverable' src={mentors.image} />
                                <div className='spacc center'>
                                    <strong>{mentors.type}</strong><br />
                                    {mentors.name}<br/>
                                    {mentors.profession}<br/>
                                    {mentors.prof}
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

export default Mentors;