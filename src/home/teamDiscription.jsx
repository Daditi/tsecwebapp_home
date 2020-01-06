import React, { Component } from 'react';
import { db } from './config'
import Bell from './img/bell.png'
import './pe.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
import TeamDetails from './teamDetails'

class TeamDiscription extends Component {
    state = { teamDiscription : null }

    componentDidMount() {
        db.collection('teamDiscription')
            .get()
            .then(snapshot => {
                const teamDiscription = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    teamDiscription.push(data)
                })
                this.setState({ teamDiscription: teamDiscription })
            })
            .catch(error => console.log(error))
    }
   
    render() {
      const show = this.state.show ? <TeamDetails /> : null;
       // const again = !this.state.show ?  null : <TeamDetails />;
        return (<div>
           <div className='row'>
                {this.state.teamDiscription && this.state.teamDiscription.map(
                    teamDiscription => {
                        return (<div className='hov'>
                            <div className='col'>
                                
                                    <div className="row">
                                        <div className="col">
                                            <div className="card blue-grey darken-1 hoverable">
                                                <div className="card-content white-text font-weight-bold m-lg-3">
                                                    <span className="card-title align-content-center "><strong>{teamDiscription.name}</strong></span>
                                                   <p > <strong>{teamDiscription.discription}</strong>
                                                    </p>
                                                
                                                </div>
                                           
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        )
                    }
                )}</div>
            
                        <br /><br />
           
        </div>  );
    }
}
 
export default TeamDiscription;