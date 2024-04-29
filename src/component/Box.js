import React from 'react'

const Box = (props) => {
  let resultDepends;
  if (
    props.title === 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ){
    resultDepends = props.result === 'win' ? 'lose' : 'win'
  } else{
    resultDepends = props.result
  }
  return (
    <div className={`box ${resultDepends}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img}></img>
        <h2>{resultDepends}</h2>
    </div>
  )
}

export default Box