import React, { Component } from 'react'
import loading from './loading.gif'


const  Spinner =()=> {

    return (
      <div className='text-center my-3' >
        <img src={loading}/>       
      </div>
    )

}

export default Spinner