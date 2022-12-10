import React from 'react'

const Background = () => {

    

    

    return (
      <div className="video">
      <video  
    muted
    autoPlay={"autoplay"}
    preLoad="auto"
    loop
      style={{
      position:"flex",
      width: "100%",
      
     }} >
      <source src="https://sharedby.blomp.com/Kwhdlx" type="video/mp4"/></video>
      </div>
  )
}

export default Background