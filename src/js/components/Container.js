import React from 'react';

export default class Container extends React.Component  {
  render(){
    console.log(this.props)
    const size = (this.props.children).length;
    return(
      <div className="container">
        <div className="row">
          {
            this.props.children.map(child => {
              return <div className={"col-md-"+(12/size)}>{child}</div>
            })
          }
        </div>
      </div>
    )
  }
}
