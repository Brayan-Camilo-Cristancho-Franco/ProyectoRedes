import React from 'react'

import './Card1.css'

import planets from '../../data/planets1'

const Card = planets.map((card, index) => (
  <div className="card_container1">
    <div className="card1" key={index}>
      <img src={card.image} className="image1" alt="Planets"/>
    </div>
    <div className="container_title1">
        <h2 className="title1">{card.name}</h2>
      </div>
  </div>
))

export default Card
