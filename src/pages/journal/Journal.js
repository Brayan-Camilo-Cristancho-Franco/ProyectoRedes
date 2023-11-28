import React from 'react'

import './Journal.css'
import Slider from '../../components/slider/Slider1'

const Journal = () => {
  return (
    <div
      className="container_journal"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 id='titlep'>Projects</h1>
          <Slider />
    </div>
  )
}

export default Journal
