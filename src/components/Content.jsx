import React from 'react'

function Content({item}) {
  console.log(item);
  return (

    <div>{item.name}</div>
  )
}

export default Content