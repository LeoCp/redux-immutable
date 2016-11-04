import React from 'react';

export default class Card extends React.Component  {
  render(){
    return(
      <div className="card card-block">
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-text">{this.props.text}</p>
        <a className="card-link">{this.props.link1}</a>
        <a className="card-link">{this.props.link2}</a>
      </div>
    )
  }
}
