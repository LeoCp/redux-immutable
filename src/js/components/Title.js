import React from 'react';

export default class Title extends React.Component  {
  render(){
    const style = {
      textAlign:'center',
      padding: '20px'
    }
    return(
      <h1 style={style}>Redux & Immutable</h1>
    )
  }
}
