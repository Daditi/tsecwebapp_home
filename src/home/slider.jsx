
import React, { Component } from 'react';
import Slider from "react-slick";
import './slider.css'
import Mountain from './img/mountain.png'
import Forest from './img/forest.png'
import Bonsai from './img/bonsai.png'
import { db } from './config'


class Sliders extends Component {
    state={
         slider : null
    }
     componentDidMount() {
        db.collection('slider')
            .get()
            .then(snapshot => {
                const slider = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    slider.push(data)
                })
                this.setState({ slider: slider })
            })
            .catch(error => console.log(error))
    }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: 'slides',
    };
    return (
      <div>
       
        <Slider {...settings}>
         {this.state.slider && this.state.slider.map(
                    photos => {
                        return (<div><img width = '100%' height = '100%' src={photos.image} /></div>
                        )
                    }
                )}
        </Slider>
      </div>
    );
  }
}
export default Sliders