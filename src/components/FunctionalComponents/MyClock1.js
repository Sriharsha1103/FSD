import React, { useEffect, useState } from 'react'

function MyClock1() {
    const [clock,setClock] =useState(new Date())

  useEffect(()=>{
    const timer = setInterval(()=>{
      setClock(new Date())
    },1000)
    return clearInterval(timer)
  },[])

  return (
    <div>
        {clock.toLocaleString()}
    </div>
  )
}

export default MyClock1
