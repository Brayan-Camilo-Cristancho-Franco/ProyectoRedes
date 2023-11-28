import React from 'react'

import Typed from 'react-typed'

import './MyName.css'

const MyName = () => {
  const text = ['<h1>Hi, my name is Brayan Cristancho</h1><br><h3>Backend developer<h3/>']
  return (
    <div className="container_name">
      <Typed strings={text} typeSpeed={75} backSpeed={50} loop />
    </div>
  )
}

export default MyName
